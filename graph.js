// ============================================
// Force-Directed Knowledge Graph Engine (D3.js)
// Fixed drag/click separation, structured layout
// ============================================

class GraphEngine {
    constructor(canvasEl, containerEl) {
        this.canvas = canvasEl;
        this.ctx = canvasEl.getContext('2d');
        this.container = containerEl;
        this.nodeData = [];
        this.edgeData = [];
        this.simulation = null;
        this.draggedNode = null;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;

        this.resize();
        window.addEventListener('resize', () => {
            this.resize();
            if (this.simulation) {
                this.simulation.force('center', d3.forceCenter(this.width / 2, this.height / 2));
                this.simulation.alpha(0.3).restart();
            }
        });

        // Transform state for pinch-zoom and two-finger pan
        const isMobileInit = window.innerWidth < 768;
        this.scale = isMobileInit ? 0.75 : 1;
        this.panX = 0;
        this.panY = 0;
        this.lastPinchDist = 0;
        this.lastPanX = 0;
        this.lastPanY = 0;
        this.isPinching = false;
        this.wasPinching = false;

        // Unified pointer events on the canvas area (parent of container)
        const area = this.container.parentElement;
        area.addEventListener('mousedown', (e) => this.onPointerDown(e));
        window.addEventListener('mousemove', (e) => this.onPointerMove(e));
        window.addEventListener('mouseup', (e) => this.onPointerUp(e));
        area.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        window.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        window.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }

    resize() {
        const parent = this.canvas.parentElement;
        const dpr = window.devicePixelRatio || 1;
        this.width = parent.clientWidth;
        this.height = parent.clientHeight;
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    buildGraph(data) {
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.nodeData = [];

        // Center node — slightly left of true center
        const centerX = cx - 40;
        this.nodeData.push({
            ...data.center,
            x: centerX,
            y: cy,
            radius: 36
        });

        // Category nodes — place at defined angles
        const categories = data.nodes.filter(n => n.type === 'category');
        const isMobile = this.width < 768;
        const catDist = Math.min(this.width, this.height) * (isMobile ? 0.16 : 0.22);

        categories.forEach(n => {
            const angle = (n.angle || 0) * Math.PI / 180;
            this.nodeData.push({
                ...n,
                x: centerX + Math.cos(angle) * catDist,
                y: cy + Math.sin(angle) * catDist,
                radius: 24
            });
        });

        // Role nodes — stack near their actual parent (Experience or AI Exploration)
        const roles = data.nodes.filter(n => n.type === 'role').sort((a, b) => (a.order || 0) - (b.order || 0));

        const roleOffset = isMobile ? 90 : 130;
        const roleSpacingY = isMobile ? 38 : 52;

        // Group roles by their parent id
        const rolesByParent = {};
        roles.forEach(r => {
            const parentId = r.parent || 'experience';
            if (!rolesByParent[parentId]) rolesByParent[parentId] = [];
            rolesByParent[parentId].push(r);
        });

        Object.keys(rolesByParent).forEach(parentId => {
            const parentNode = this.nodeData.find(n => n.id === parentId);
            const parentRoles = rolesByParent[parentId];
            const baseX = parentNode ? parentNode.x : cx;
            const baseY = parentNode ? parentNode.y : cy;

            // Layout direction: parents to the right of the centre tail their
            // roles further right in a vertical column. Parents elsewhere drop
            // their roles straight down in a vertical column.
            const parentRight = baseX > centerX + 10;
            const startX = parentRight ? baseX + roleOffset : baseX;
            const startY = parentRight
                ? baseY - (parentRoles.length - 1) * (isMobile ? 18 : 26)
                : baseY + roleOffset;

            parentRoles.forEach((n, i) => {
                const xOffset = parentRight ? (i % 2) * 20 : 0;
                this.nodeData.push({
                    ...n,
                    x: startX + xOffset,
                    y: startY + i * roleSpacingY,
                    radius: 18
                });
            });
        });

        // Edges
        this.edgeData = data.edges.map(e => ({
            source: e.from,
            target: e.to
        }));

        // Force simulation
        this.simulation = d3.forceSimulation(this.nodeData)
            .force('link', d3.forceLink(this.edgeData)
                .id(d => d.id)
                .distance(d => {
                    const src = typeof d.source === 'object' ? d.source : this.nodeData.find(n => n.id === d.source);
                    const tgt = typeof d.target === 'object' ? d.target : this.nodeData.find(n => n.id === d.target);
                    if (src && tgt) {
                        if (src.type === 'center' || tgt.type === 'center') return catDist;
                        if (src.type === 'category' || tgt.type === 'category') return 140;
                    }
                    return 100;
                })
                .strength(d => {
                    const src = typeof d.source === 'object' ? d.source : null;
                    const tgt = typeof d.target === 'object' ? d.target : null;
                    if (src && tgt && (src.type === 'role' || tgt.type === 'role')) return 0.3;
                    return 0.6;
                })
            )
            .force('charge', d3.forceManyBody()
                .strength(d => {
                    if (d.type === 'center') return -600;
                    if (d.type === 'category') return -300;
                    return -120;
                })
            )
            .force('center', d3.forceCenter(cx, cy).strength(0.02))
            .force('collision', d3.forceCollide()
                .radius(d => {
                    const mob = this.width < 768;
                    if (d.type === 'role') return d.radius + (mob ? 24 : 38);
                    return d.radius + (mob ? 14 : 20);
                })
                .strength(1)
            )
            // Pull experience + experience roles right, categories left, other-parent roles toward their parent
            .force('x', d3.forceX(d => {
                if (d.type === 'center') return centerX;
                const mob = this.width < 768;
                if (d.id === 'experience') return cx + this.width * (mob ? 0.08 : 0.12);
                if (d.type === 'role') {
                    const parentNode = this.nodeData.find(n => n.id === d.parent);
                    if (parentNode) {
                        // If parent is to the right of centre, tail role right of parent.
                        // Otherwise sit role directly under parent (same x).
                        const parentRight = parentNode.x > centerX + 10;
                        return parentRight ? parentNode.x + (mob ? 80 : 120) : parentNode.x;
                    }
                    return cx + this.width * (mob ? 0.18 : 0.24);
                }
                if (d.type === 'category') return cx - this.width * (mob ? 0.08 : 0.12);
                return cx;
            }).strength(d => {
                if (d.type === 'role') return 0.12;
                if (d.type === 'center') return 0.08;
                return 0.05;
            }))
            // Vertical pull: roles whose parent sits left/below centre get
            // pulled below the parent. Everything else centres vertically.
            .force('y', d3.forceY(d => {
                if (d.type === 'center') return cy;
                if (d.type === 'role') {
                    const parentNode = this.nodeData.find(n => n.id === d.parent);
                    if (parentNode) {
                        const parentRight = parentNode.x > centerX + 10;
                        if (!parentRight) {
                            return parentNode.y + (this.width < 768 ? 90 : 130);
                        }
                    }
                }
                return cy;
            }).strength(d => {
                if (d.type === 'role') {
                    const parentNode = this.nodeData.find(n => n.id === d.parent);
                    if (parentNode) {
                        const parentRight = parentNode.x > centerX + 10;
                        if (!parentRight) return 0.1; // stronger downward pull for below-parent roles
                    }
                }
                return 0.02;
            }))
            // Custom force: keep roles in chronological vertical order
            .force('roleOrder', this.roleOrderForce(roles))
            .alphaDecay(0.025)
            .velocityDecay(0.5)
            .on('tick', () => this.tick());

        this.renderNodes();
    }

    // Custom force: strict vertical ordering for roles, grouped per parent.
    // Parents to the right of centre stack their roles in a vertical column
    // offset to the right; parents elsewhere stack their roles in a vertical
    // column descending directly below them.
    roleOrderForce(rolesConfig) {
        // Group role ids by parent
        const rolesByParent = {};
        rolesConfig.forEach(r => {
            const parentId = r.parent || 'experience';
            if (!rolesByParent[parentId]) rolesByParent[parentId] = [];
            rolesByParent[parentId].push(r.id);
        });

        return (alpha) => {
            const strength = 0.2 * alpha;
            const spacing = this.width < 768 ? 36 : 50;
            const off = this.width < 768 ? 90 : 130;

            const centerNode = this.nodeData.find(n => n.type === 'center');
            const cnX = centerNode ? centerNode.x : this.width / 2;

            Object.keys(rolesByParent).forEach(parentId => {
                const roleIds = rolesByParent[parentId];
                const roleNodes = this.nodeData.filter(n => roleIds.includes(n.id));
                if (roleNodes.length < 1) return;

                const parentNode = this.nodeData.find(n => n.id === parentId);
                if (!parentNode) return;

                roleNodes.sort((a, b) => roleIds.indexOf(a.id) - roleIds.indexOf(b.id));

                const parentRight = parentNode.x > cnX + 10;
                let topY, targetX;

                if (parentRight) {
                    // Vertical column centred on parent, offset to the right
                    const totalHeight = (roleNodes.length - 1) * spacing;
                    topY = parentNode.y - totalHeight / 2;
                    targetX = parentNode.x + off;
                } else {
                    // Vertical column descending directly below parent
                    topY = parentNode.y + off;
                    targetX = parentNode.x;
                }

                roleNodes.forEach((node, i) => {
                    const targetY = topY + i * spacing;
                    node.vy += (targetY - node.y) * strength;
                    node.vx += (targetX - node.x) * strength * 0.4;
                });
            });
        };
    }

    renderNodes() {
        this.container.innerHTML = '';

        this.nodeData.forEach(node => {
            const el = document.createElement('div');
            el.className = `node ${node.type}`;
            el.id = 'node-' + node.id;
            el.dataset.id = node.id;

            const shape = document.createElement('div');
            shape.className = 'node-shape';

            if (node.type === 'center') {
                const img = document.createElement('img');
                img.src = 'assets/Main Pic/James Vickers Main Pic.jpg';
                img.alt = 'James Vickers';
                img.className = 'center-avatar';
                // Prevent native image drag completely
                img.draggable = false;
                img.style.pointerEvents = 'none';
                img.addEventListener('dragstart', (e) => e.preventDefault());
                shape.appendChild(img);
            } else {
                shape.textContent = node.icon;
                if (node.color && node.type === 'role') {
                    shape.style.borderColor = node.color;
                    shape.style.color = node.color;
                }
            }

            const label = document.createElement('div');
            label.className = 'node-label';
            label.textContent = node.label;

            el.appendChild(shape);
            el.appendChild(label);

            // Sublabel for roles (dates)
            if (node.sublabel && node.type === 'role') {
                const sub = document.createElement('div');
                sub.className = 'node-sublabel';
                sub.textContent = node.sublabel;
                el.appendChild(sub);
            }

            // Sublabel for center node
            if (node.type === 'center') {
                const sub = document.createElement('div');
                sub.className = 'node-sublabel';
                sub.textContent = node.sublabel;
                el.appendChild(sub);
            }

            this.container.appendChild(el);
        });
    }

    tick() {
        this.nodeData.forEach(node => {
            const el = document.getElementById('node-' + node.id);
            if (el) {
                el.style.left = node.x + 'px';
                el.style.top = node.y + 'px';
            }
        });
        this.drawEdges();
    }

    drawEdges() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.edgeData.forEach(edge => {
            const src = typeof edge.source === 'object' ? edge.source : null;
            const tgt = typeof edge.target === 'object' ? edge.target : null;
            if (!src || !tgt) return;

            const isRoleEdge = src.type === 'role' || tgt.type === 'role';

            this.ctx.beginPath();
            this.ctx.moveTo(src.x, src.y);
            this.ctx.lineTo(tgt.x, tgt.y);
            this.ctx.strokeStyle = isRoleEdge ? 'rgba(203,213,225,0.45)' : 'rgba(148,163,184,0.5)';
            this.ctx.lineWidth = isRoleEdge ? 0.8 : 1.2;
            this.ctx.stroke();
        });
    }

    // ---- Pointer interaction (drag only — click handled in app.js) ----

    getNodeAtPoint(clientX, clientY) {
        const rect = this.container.parentElement.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        for (let i = this.nodeData.length - 1; i >= 0; i--) {
            const n = this.nodeData[i];
            const dx = x - n.x;
            const dy = y - n.y;
            if (dx * dx + dy * dy < (n.radius + 15) * (n.radius + 15)) {
                return n;
            }
        }
        return null;
    }

    onPointerDown(e) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const node = this.getNodeAtPoint(clientX, clientY);
        if (node) {
            this.draggedNode = node;
            this.isDragging = false;
            this.dragStartX = clientX;
            this.dragStartY = clientY;
            node.fx = node.x;
            node.fy = node.y;
            this.simulation.alphaTarget(0.3).restart();
            if (e.touches) e.preventDefault();
        }
    }

    onPointerMove(e) {
        if (!this.draggedNode) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const rect = this.container.parentElement.getBoundingClientRect();

        // Detect if we've moved enough to call it a drag
        const dx = Math.abs(clientX - this.dragStartX);
        const dy = Math.abs(clientY - this.dragStartY);
        if (dx > 3 || dy > 3) {
            this.isDragging = true;
        }

        this.draggedNode.fx = clientX - rect.left;
        this.draggedNode.fy = clientY - rect.top;

        if (e.touches) e.preventDefault();
    }

    onPointerUp(e) {
        if (this.draggedNode) {
            this.draggedNode.fx = null;
            this.draggedNode.fy = null;
            this.draggedNode = null;
            this.simulation.alphaTarget(0);
        }
        // isDragging is read by app.js to distinguish click from drag
        // Reset after a short delay so the mouseup/click in app.js can read it
        setTimeout(() => { this.isDragging = false; }, 50);
    }

    // ---- Multi-touch: pinch zoom + two-finger pan ----

    applyTransform() {
        // Apply transform to the inner container + canvas, NOT the parent area
        // This way overflow:hidden on the area just clips the viewport edge
        // but doesn't shrink with the scale
        const t = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
        this.container.style.transformOrigin = '50% 50%';
        this.container.style.transform = t;
        this.canvas.style.transformOrigin = '50% 50%';
        this.canvas.style.transform = t;
    }

    getPinchDist(touches) {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    getPinchCenter(touches) {
        return {
            x: (touches[0].clientX + touches[1].clientX) / 2,
            y: (touches[0].clientY + touches[1].clientY) / 2
        };
    }

    onTouchStart(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            this.isPinching = true;
            this.wasPinching = true; // Set immediately so touchend won't open node
            // Cancel any in-progress single-finger drag
            if (this.draggedNode) {
                this.draggedNode.fx = null;
                this.draggedNode.fy = null;
                this.draggedNode = null;
                this.simulation.alphaTarget(0);
            }
            this.isDragging = false;
            this.lastPinchDist = this.getPinchDist(e.touches);
            const c = this.getPinchCenter(e.touches);
            this.lastPanX = c.x;
            this.lastPanY = c.y;
        } else if (e.touches.length === 1 && !this.isPinching) {
            this.onPointerDown(e);
        }
    }

    onTouchMove(e) {
        if (this.isPinching && e.touches.length === 2) {
            e.preventDefault();
            const dist = this.getPinchDist(e.touches);
            const scaleChange = dist / this.lastPinchDist;
            this.scale = Math.min(2.5, Math.max(0.85, this.scale * scaleChange));
            this.lastPinchDist = dist;

            const c = this.getPinchCenter(e.touches);
            this.panX += c.x - this.lastPanX;
            this.panY += c.y - this.lastPanY;
            this.lastPanX = c.x;
            this.lastPanY = c.y;

            this.applyTransform();
        } else if (!this.isPinching && e.touches.length === 1) {
            this.onPointerMove(e);
        }
    }

    onTouchEnd(e) {
        if (e.touches.length < 2 && this.isPinching) {
            this.isPinching = false;
            this.wasPinching = true;
            setTimeout(() => { this.wasPinching = false; }, 300);
        }
        if (e.touches.length === 0 && !this.wasPinching) {
            this.onPointerUp(e);
        }
    }
}
