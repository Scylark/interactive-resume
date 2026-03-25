// ============================================
// App — Wire everything together
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('graphCanvas');
    const container = document.getElementById('nodesContainer');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const dotClose = document.getElementById('dotClose');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');

    // ----------------------------------------
    // Rotate device prompt (portrait mobile only)
    // ----------------------------------------
    const rotatePrompt = document.getElementById('rotatePrompt');
    const rotateDismiss = document.getElementById('rotateDismiss');
    let rotateDismissed = false;

    function checkOrientation() {
        if (rotateDismissed) return;
        const isMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && window.innerWidth <= 1024);
        const isPortrait = window.innerHeight > window.innerWidth;
        if (isMobile && isPortrait) {
            rotatePrompt.classList.add('visible');
        } else {
            rotatePrompt.classList.remove('visible');
        }
    }

    if (rotateDismiss) {
        rotateDismiss.addEventListener('click', () => {
            rotateDismissed = true;
            rotatePrompt.classList.remove('visible');
        });
    }

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', () => setTimeout(checkOrientation, 100));

    // ----------------------------------------
    // Two-finger tooltip (shows once on mobile)
    // ----------------------------------------
    const touchTooltip = document.getElementById('touchTooltip');
    let tooltipShown = false;

    if ('ontouchstart' in window) {
        const canvasArea = document.getElementById('canvasArea');
        canvasArea.addEventListener('touchstart', (e) => {
            if (!tooltipShown && e.touches.length === 1) {
                tooltipShown = true;
                touchTooltip.classList.add('visible');
                setTimeout(() => touchTooltip.classList.remove('visible'), 3000);
            }
        }, { passive: true });
    }

    // ----------------------------------------
    // Prevent overscroll/back-navigation gesture
    // ----------------------------------------
    document.body.style.overscrollBehavior = 'none';
    document.documentElement.style.overscrollBehavior = 'none';

    // Init graph
    const graph = new GraphEngine(canvas, container);
    graph.buildGraph(RESUME_DATA);
    graph.applyTransform(); // Apply initial scale (0.75 on mobile)

    // ----------------------------------------
    // Node click → open modal (uses graph.isDragging to ignore drags)
    // ----------------------------------------
    container.addEventListener('click', (e) => {
        // If the graph engine detected a drag, ignore this click
        if (graph.isDragging) return;

        const nodeEl = e.target.closest('.node');
        if (nodeEl) {
            const id = nodeEl.dataset.id;
            openModal(id);
        }
    });

    // Touch tap support
    container.addEventListener('touchend', (e) => {
        if (graph.isDragging || graph.wasPinching) return;

        const nodeEl = e.target.closest('.node');
        if (nodeEl) {
            const id = nodeEl.dataset.id;
            openModal(id);
        }
    });

    // ----------------------------------------
    // Sidebar nav click
    // ----------------------------------------
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            openModal(target);

            // Update active state
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Close mobile sidebar
            sidebar.classList.remove('open');
        });
    });

    // ----------------------------------------
    // Modal management
    // ----------------------------------------
    function openModal(id) {
        const detail = RESUME_DATA.details[id];
        if (!detail) return;

        modalContent.innerHTML = detail.content;
        modal.classList.toggle('wide', id === 'experience');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Hide mini-player when opening any modal
        ipod.hideMiniPlayer();

        // Mount iPod player if Listen modal
        if (id === 'listen') {
            const mount = document.getElementById('ipod-mount');
            if (mount) {
                ipod.setTracks(typeof PLAYLIST !== 'undefined' ? PLAYLIST : []);
                mount.innerHTML = ipod.getHTML();
                ipod.bindEvents();
            }
        }

        // Animate stats in
        setTimeout(() => {
            modalContent.querySelectorAll('.stat-value').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(10px)';
                el.style.transition = `all 0.4s ease ${i * 0.1}s`;
                requestAnimationFrame(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            });
        }, 200);
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

        // Show mini-player if music is playing
        if (ipod.isPlaying) {
            ipod.showMiniPlayer();
        }
    }

    // Traffic light buttons
    dotClose.addEventListener('click', closeModal);
    document.getElementById('dotMinimize').addEventListener('click', closeModal);
    document.getElementById('dotMaximize').addEventListener('click', () => {
        modal.classList.toggle('maximized');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ----------------------------------------
    // Mobile menu
    // ----------------------------------------
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // ----------------------------------------
    // Gallery lightbox
    // ----------------------------------------
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<button class="lightbox-close">&times;</button><div class="lightbox-content"></div>';
    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        const vid = lightbox.querySelector('video');
        if (vid) vid.pause();
        const iframe = lightbox.querySelector('iframe');
        if (iframe) iframe.src = '';
        lightbox.querySelector('.lightbox-content').innerHTML = '';
    }

    // Delegate gallery clicks from modal content
    modalContent.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) return;

        const type = item.dataset.type;
        const src = item.dataset.src;
        const content = lightbox.querySelector('.lightbox-content');

        if (type === 'youtube') {
            content.innerHTML = '<iframe src="https://www.youtube.com/embed/' + src + '?autoplay=1" style="width:min(90vw,960px);aspect-ratio:16/9;border:none;border-radius:12px;" allow="autoplay;encrypted-media" allowfullscreen></iframe>';
        } else if (type === 'video') {
            content.innerHTML = '<video src="' + src + '" controls autoplay style="max-width:90vw;max-height:85vh;border-radius:12px;"></video>';
        } else {
            content.innerHTML = '<img src="' + src + '" alt="" style="max-width:90vw;max-height:85vh;border-radius:12px;">';
        }
        lightbox.classList.add('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ----------------------------------------
    // Profile photo lightbox (sidebar + modal)
    // ----------------------------------------
    document.querySelectorAll('#sidebar-photo, #profile-photo').forEach(photo => {
        photo.addEventListener('click', () => {
            const content = lightbox.querySelector('.lightbox-content');
            content.innerHTML = '<img src="assets/Main Pic/James Vickers Main Pic.jpg" alt="James Vickers" style="max-width:90vw;max-height:85vh;border-radius:12px;">';
            lightbox.classList.add('active');
        });
    });

    // ----------------------------------------
    // Swipe-right to go back (close modal/lightbox)
    // ----------------------------------------
    let swipeStartX = 0;
    let swipeStartY = 0;

    document.addEventListener('touchstart', (e) => {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = e.changedTouches[0].clientY - swipeStartY;
        if (dx > 80 && Math.abs(dy) < Math.abs(dx) * 0.5) {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            } else if (modalOverlay.classList.contains('active')) {
                closeModal();
            }
        }
    }, { passive: true });

    // ----------------------------------------
    // Download PDF
    // ----------------------------------------
    document.getElementById('downloadPdf').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'assets/James-Vickers-CV.pdf';
        link.download = 'James-Vickers-CV.pdf';
        link.click();
    });
});
