const RESUME_DATA = {
    center: {
        id: "james",
        label: "James Vickers",
        sublabel: "MCIM · MCPR",
        type: "center",
        icon: "✦",
        color: "#2563eb"
    },

    nodes: [
        // Primary category nodes
        {
            id: "experience",
            label: "Experience",
            type: "category",
            icon: "◆",
            color: "#1e293b",
            angle: 0,
            distance: 1
        },
        {
            id: "skills",
            label: "Skills",
            type: "category",
            icon: "▲",
            color: "#1e293b",
            angle: 120,
            distance: 1
        },
        {
            id: "ai-work",
            label: "AI Work",
            type: "category",
            icon: "⬡",
            color: "#7c3aed",
            angle: 155,
            distance: 1
        },
        {
            id: "education",
            label: "Education",
            type: "category",
            icon: "○",
            color: "#1e293b",
            angle: 190,
            distance: 1
        },
        {
            id: "about",
            label: "About",
            type: "category",
            icon: "△",
            color: "#1e293b",
            angle: 225,
            distance: 1
        },
        {
            id: "contact",
            label: "Contact",
            type: "category",
            icon: "□",
            color: "#1e293b",
            angle: 260,
            distance: 1
        },
        {
            id: "listen",
            label: "Listen",
            type: "category",
            icon: "♪",
            color: "#ec4899",
            angle: 295,
            distance: 1
        },

        // Experience sub-nodes (ordered newest → oldest)
        {
            id: "ribble-2",
            label: "Ribble Cycles",
            sublabel: "2024–Present",
            type: "role",
            parent: "experience",
            order: 1,
            icon: "◆",
            color: "#059669"
        },
        {
            id: "motif",
            label: "motif",
            sublabel: "2024–Present",
            type: "role",
            parent: "experience",
            order: 2,
            icon: "◆",
            color: "#7c3aed",
            industryTag: "Fintech / AI"
        },
        {
            id: "classified",
            label: "Classified",
            sublabel: "2024",
            type: "role",
            parent: "experience",
            order: 3,
            icon: "◆",
            color: "#2563eb"
        },
        {
            id: "muuvr",
            label: "Muuvr",
            sublabel: "2023–24",
            type: "role",
            parent: "experience",
            order: 4,
            icon: "◆",
            color: "#d946ef"
        },
        {
            id: "wahoo",
            label: "Wahoo / RGT",
            sublabel: "2019–23",
            type: "role",
            parent: "experience",
            order: 5,
            icon: "◆",
            color: "#dc2626"
        },
        {
            id: "wattbike",
            label: "Wattbike",
            sublabel: "2018–19",
            type: "role",
            parent: "experience",
            order: 6,
            icon: "◆",
            color: "#ea580c"
        },
        {
            id: "pelotan",
            label: "Pelotan",
            sublabel: "2018–20",
            type: "role",
            parent: "experience",
            order: 7,
            icon: "◆",
            color: "#ca8a04"
        },
        {
            id: "ribble-1",
            label: "Ribble",
            sublabel: "2017–18",
            type: "role",
            parent: "experience",
            order: 8,
            icon: "◆",
            color: "#059669"
        },
        {
            id: "planetx",
            label: "Planet X",
            sublabel: "2015–17",
            type: "role",
            parent: "experience",
            order: 9,
            icon: "◆",
            color: "#0891b2"
        },
        {
            id: "wattplan",
            label: "Wattplan",
            sublabel: "2025–Present",
            type: "role",
            parent: "experience",
            order: 3,
            icon: "◆",
            color: "#6366f1"
        },
        {
            id: "aster",
            label: "Aster",
            sublabel: "2025–Present",
            type: "role",
            parent: "experience",
            order: 4,
            icon: "◆",
            color: "#ef4444"
        }
    ],

    // Connections between nodes
    edges: [
        // Center to categories
        { from: "james", to: "experience" },
        { from: "james", to: "skills" },
        { from: "james", to: "ai-work" },
        { from: "james", to: "education" },
        { from: "james", to: "about" },
        { from: "james", to: "contact" },
        { from: "james", to: "listen" },
        // Experience to roles
        { from: "experience", to: "ribble-2" },
        { from: "experience", to: "motif" },
        { from: "experience", to: "classified" },
        { from: "experience", to: "muuvr" },
        { from: "experience", to: "wahoo" },
        { from: "experience", to: "wattbike" },
        { from: "experience", to: "pelotan" },
        { from: "experience", to: "ribble-1" },
        { from: "experience", to: "planetx" },
        { from: "experience", to: "wattplan" },
        { from: "experience", to: "aster" }
    ],

    // Detail content for modals
    details: {
        james: {
            title: "James Vickers",
            subtitle: "MCIM · MCPR",
            type: "profile",
            content: `
                <div class="profile-hero-card">
                    <div class="profile-hero-img">
                        <img src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9331.jpg" alt="James Vickers racing" />
                    </div>
                    <div class="profile-hero-body">
                        <div class="profile-hero-avatar">
                            <img src="assets/Main Pic/James Vickers Main Pic.jpg" alt="James Vickers" id="profile-photo" style="cursor:pointer" />
                        </div>
                        <div class="profile-hero-info">
                            <h2>James Vickers</h2>
                            <p class="profile-title">Senior Marketing Professional</p>
                            <p class="profile-creds">MCIM · MCPR</p>
                        </div>
                        <p class="profile-bio">10+ years driving growth through high-impact marketing strategies across cycling, fitness tech and fintech. Proven track record in team leadership, complex campaigns, and delivering innovative solutions.</p>
                        <div class="profile-tags">
                            <span class="tag">Strategy</span>
                            <span class="tag">Brand</span>
                            <span class="tag">AI</span>
                            <span class="tag">Cycling</span>
                            <span class="tag">Leadership</span>
                        </div>
                        <div class="profile-meta">
                            <span>Sheffield / Lincoln, UK · 1.5hrs from London</span>
                            <span>james@manual-focus.co.uk</span>
                        </div>
                        <a href="assets/James-Vickers-CV.pdf" download class="cv-download-btn">Download CV</a>
                    </div>
                </div>
            `
        },

        experience: {
            title: "Experience",
            subtitle: "10+ years across cycling, fitness tech, fintech and AI",
            type: "overview",
            content: `
                <div class="overview-card">
                    <h2>Career Timeline</h2>
                    <p class="overview-intro">Click on individual role nodes to explore each position in detail.</p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <span class="timeline-role">Head of Sales</span>
                            <span class="timeline-company">Planet X</span>
                            <span class="timeline-date">2015 – 17</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">Head of Brand</span>
                            <span class="timeline-company">Ribble</span>
                            <span class="timeline-date">2017 – 18</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">Marketing Director</span>
                            <span class="timeline-company">Pelotan</span>
                            <span class="timeline-date">2018 – 20</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">PR & Marketing</span>
                            <span class="timeline-company">Wattbike</span>
                            <span class="timeline-date">2018 – 19</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">CMO</span>
                            <span class="timeline-company">RGT → Wahoo</span>
                            <span class="timeline-date">2019 – 23</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">CMO</span>
                            <span class="timeline-company">Muuvr</span>
                            <span class="timeline-date">2023 – 24</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-role">Head of Marketing</span>
                            <span class="timeline-company">Classified</span>
                            <span class="timeline-date">2024</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Marketing Consultant</span>
                            <span class="timeline-company">Ribble Cycles</span>
                            <span class="timeline-date">2024 – Present</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Fractional CMO</span>
                            <span class="timeline-company">motif</span>
                            <span class="timeline-date">2024 – Present</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Founder / AI Side Project</span>
                            <span class="timeline-company">Wattplan</span>
                            <span class="timeline-date">2025 – Present</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Founder / Autonomous AI Business</span>
                            <span class="timeline-company">Aster</span>
                            <span class="timeline-date">2025 – Present</span>
                        </div>
                    </div>
                </div>
            `
        },

        "ribble-2": {
            title: "Ribble Cycles",
            subtitle: "Marketing Consultant · Nov 2024 – Present",
            type: "role",
            color: "#059669",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #059669">Cycling</div>
                        <span class="role-status active">Current - Advisory (3 days/week)</span>
                    </div>
                    <h2>Marketing Consultant</h2>
                    <h3>Ribble Cycles · Nov 2024 – Present</h3>
                    <p class="role-context">Brought in on a 5-day contractor role under PE ownership by SMT. Delivered objectives and now transitioned to a 3-day advisory role in Feb 2026.</p>
                    <p class="role-context" style="margin-top: 6px;">Budget responsibility for all marketing activities. £1.2M, landed 2024/2025 under budget at £920K.</p>

                    <div class="achievements">
                        <h4>Leadership</h4>
                        <ul>
                            <li><strong>Reshaped the marketing team</strong> - reorganised roles and responsibilities across the department.</li>
                            <li><strong>Built organisational structure</strong> - processes, planning, and a new task management platform.</li>
                            <li><strong>Day-to-day management</strong> - marketing team, retail stakeholders, and agencies.</li>
                            <li><strong>Onboarded key agencies</strong> - Shift Active Media (PR) and Commuter Films (creative video production).</li>
                            <li><strong>Board-level impact</strong> - delivered strategic presentations to the board, representing the business as part of the SMT to PE Owners.</li>
                        </ul>
                    </div>

                    <div class="achievements">
                        <h4>PR & Media Relations</h4>
                        <ul>
                            <li><strong>Built strategic PR process</strong> - working with Shift Active Media, managed media relations ensuring correct products delivered to journalists on schedule.</li>
                            <li><strong>Non-endemic placement</strong> - secured BBC and ITV TV coverage in 2025.</li>
                            <li><strong>Coverage growth</strong> - articles 135 to 196, est. views 1.89M to 4.42M, potential audience 117M to 327M.</li>
                            <li><strong>Brand repositioning</strong> - shifted perception from "budget heritage" to "high-performance technical" - ULTRA-RACE compared to Colnago rather than Planet X or Dolan.</li>
                            <li><strong>Review placements</strong> - 17 to 19, reinforcing the brand transition.</li>
                        </ul>
                    </div>

                    <div class="achievements">
                        <h4>Pro Sports & Ambassadors</h4>
                        <ul>
                            <li>Led the development of the Ribble Outliers pro gravel team. In its first season, the most successful British gravel team with multiple golds and podiums at UCI and Gravel Earth Series events.</li>
                            <li>Gravel category growth: Ribble's fastest-growing segment, outperforming market growth by 2 percentage points and taking competitor share.</li>
                            <li>Developed marketing activation and product collaboration opportunities between Ribble and its brand partners, including Precision and Restrap.</li>
                            <li>Managed the relationship and marketing activation of the Smurfit Westrock Pro Cycling professional continental women's team, including the "Welcome to Hell" mini-documentary covering their Rutland-Melton CiCLE Classic win.</li>
                        </ul>
                    </div>

                    <div class="achievements">
                        <h4>Events</h4>
                        <ul>
                            <li><strong>Presenting Partner, British Gravel Championships</strong> - digital and physical rights negotiation, planning, and execution.</li>
                            <li><strong>Showroom activations</strong> - Pro Team in-store content and live rides/meet-and-greets.</li>
                            <li><strong>Cyclist Track Days and minor expos</strong> - planning for broader event involvement.</li>
                        </ul>
                    </div>

                    <div class="achievements">
                        <h4>Brand & Strategy</h4>
                        <ul>
                            <li><strong>The Original Outliers rebrand</strong> - worked with FreshBritain on repositioning Ribble's tone of voice and visual language.</li>
                            <li><strong>2025 strategic objectives</strong> - grow gravel market share, increase regional penetration (North East and South), launch four new bikes.</li>
                            <li><strong>Led NPD marketing</strong> - market gap analysis, sign-off documents, and GTM strategies covering positioning, messaging, and channels.</li>
                        </ul>
                    </div>

                    <div class="achievements">
                        <h4>Content</h4>
                        <ul>
                            <li><strong>Shoot planning</strong> - briefs for internal and external creatives to deliver campaign assets across all channels.</li>
                            <li><strong>Hands-on delivery</strong> - tactical SEO content and leadership blogs.</li>
                        </ul>
                    </div>

                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">1.2M</span>
                            <span class="stat-label">Budget Responsibility</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">4.42M</span>
                            <span class="stat-label">Est. Views (2025)</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">327M</span>
                            <span class="stat-label">Potential Audience</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">8,000+</span>
                            <span class="stat-label">Email Subs via Partnerships</span>
                        </div>
                    </div>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px;">Campaign Work</h3>
                    <p class="gallery-intro" style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 20px;">The below shows a selection of the creative assets produced in the delivery of the brand's key campaigns during my time at Ribble.</p>

                    <div class="media-gallery">
                        <h4>2026 Team Launch</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">2026 saw the return of the Ribble Outliers and the return of our launch party at the headquarters of our owners. A key opportunity for partner brands to brief the athletes on their messaging and for sponsors to align on product and marketing partnerships.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2026 Team Launch/RO 16x9 V2.mp4">
                                <video src="assets/Ribble 2026 Team Launch/RO 16x9 V2.mp4" muted preload="metadata" poster="assets/thumbs/ribble-team-launch.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Team Launch Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8854.jpg">
                                <img src="assets/Ribble 2026 Team Launch/0Q5A8854.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8746.jpg">
                                <img src="assets/Ribble 2026 Team Launch/0Q5A8746.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8793.jpg">
                                <img src="assets/Ribble 2026 Team Launch/0Q5A8793.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>British Gravel National Championships 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Our biggest event activation of 2025. We took full ownership of the site including the start and finish lines, gantries, entry, scrimmage, barriers, and flags, alongside a large stretch fabric tent in the centre of the event village. Partners were on-site and the Ribble Outliers warmed up in the fan zone.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/Weekend Highlights Widescreen V2.mp4">
                                <video src="assets/Ribble Gravel National Champinships Sponsorship 2025/Weekend Highlights Widescreen V2.mp4" muted preload="metadata" poster="assets/thumbs/gravel-nationals.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Weekend Highlights</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9898.jpg">
                                <img src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9898.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9331.jpg">
                                <img src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9331.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/_DSC0976.jpg">
                                <img src="assets/Ribble Gravel National Champinships Sponsorship 2025/_DSC0976.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Welcome to Hell - Rutland-Melton CiCLE Classic</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Partnered with Smurfit Westrock Pro Cycling and Cyclist magazine to produce this mini-documentary following the women's professional continental team's win at the Rutland-Melton CiCLE Classic - arguably the biggest one-day race in the UK women's calendar.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 - Welcome to Hell Smurfity WestRock Video/YTDown.com_YouTube_WELCOME-TO-HELL-The-Story-Behind-Britain_Media_BH1ehifowbs_001_1080p.mp4">
                                <video src="assets/Ribble 2025 - Welcome to Hell Smurfity WestRock Video/YTDown.com_YouTube_WELCOME-TO-HELL-The-Story-Behind-Britain_Media_BH1ehifowbs_001_1080p.mp4" muted preload="metadata" poster="assets/thumbs/welcome-to-hell.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Welcome to Hell Mini-Doc</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>ULTRA-RACE Launch 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Launched in 2025 as Ribble's no-compromise race bike. The campaign was built around the tagline "Out Climb. Out Corner. Out Sprint. No Compromise" and included a 3D technology film to communicate the engineering detail behind the frame.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 ULTRA-RACE Launch /4KULTRARACE _TVv4.mp4">
                                <video src="assets/Ribble 2025 ULTRA-RACE Launch /4KULTRARACE _TVv4.mp4" muted preload="metadata" poster="assets/thumbs/ultra-race-tv.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ULTRA-RACE TV Spot</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 ULTRA-RACE Launch /New Ribble Ultra-Race ｜ No Compromise Engineering ｜ Ribble Cycles 3d technology video.mp4">
                                <video src="assets/Ribble 2025 ULTRA-RACE Launch /New Ribble Ultra-Race ｜ No Compromise Engineering ｜ Ribble Cycles 3d technology video.mp4" muted preload="metadata" poster="assets/thumbs/ultra-race-3d.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">3D Technology Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Climb-New-Crop.webp">
                                <img src="assets/Ribble 2025 ULTRA-RACE Launch /Climb-New-Crop.webp" alt="ULTRA-RACE Climb" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Corner-New-Crop.webp">
                                <img src="assets/Ribble 2025 ULTRA-RACE Launch /Corner-New-Crop.webp" alt="ULTRA-RACE Corner" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Sprint-New-Crop.webp">
                                <img src="assets/Ribble 2025 ULTRA-RACE Launch /Sprint-New-Crop.webp" alt="ULTRA-RACE Sprint" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>ALLGRIT & ULTRA-GRIT Launch 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Ribble completely relaunched its gravel range in 2025 with the ALLGRIT and ULTRA-GRIT. The campaign landed distinct positioning for both bikes - race performance for the ULTRA-GRIT, adventure versatility for the ALLGRIT - targeting two clearly defined rider profiles.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/All-Grit Range 40s 16-9.mp4">
                                <video src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/All-Grit Range 40s 16-9.mp4" muted preload="metadata" poster="assets/thumbs/allgrit-range.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ALL-GRIT Range Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0002_ADVENTURE-VERSATILITY.webp">
                                <img src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0002_ADVENTURE-VERSATILITY.webp" alt="ALLGRIT Adventure" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0011_Composed_handling.webp">
                                <img src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0011_Composed_handling.webp" alt="ALLGRIT Handling" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>CGR Relaunch 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The CGR is Ribble's do-it-all bike - designed to handle commutes, gravel, and road with equal composure. This launch film was a key asset in the 2025 relaunch, positioning it as the most versatile bike in the range.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 CGR Launch/Ribble CGR 1920x1080 No Logo.mp4">
                                <video src="assets/Ribble 2025 CGR Launch/Ribble CGR 1920x1080 No Logo.mp4" muted preload="metadata" poster="assets/thumbs/cgr-launch.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">CGR Launch Film</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Ti Custom Colour Launch 2026</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The production of an ASMR-style video was a central asset in the launch of the Ti Custom Colour product, designed to communicate the craft and tactility of the titanium finishing process.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2026 Ti Custom Colour Launch/Ribble Bike Paint V2 no intro logo.mp4">
                                <video src="assets/Ribble 2026 Ti Custom Colour Launch/Ribble Bike Paint V2 no intro logo.mp4" muted preload="metadata" poster="assets/thumbs/ti-paint.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ASMR Paint Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8348.jpg">
                                <img src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8348.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8233.jpg">
                                <img src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8233.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8378-2.jpg">
                                <img src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8378-2.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8082.jpg">
                                <img src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8082.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>The Bike That Gets Me - Campaign 2026</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">This campaign was designed to show prospects that the best bike is the right bike for them - not necessarily the most expensive or the fastest. All creative assets for this project were developed using AI.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2026 - The Bike That Gets Me Campaign/TBTGM-Campaign_Homepage-Banner-Film-1080x1350_2026-03-02-160340_bngt.mp4">
                                <video src="assets/Ribble 2026 - The Bike That Gets Me Campaign/TBTGM-Campaign_Homepage-Banner-Film-1080x1350_2026-03-02-160340_bngt.mp4" muted preload="metadata" poster="assets/thumbs/tbtgm-campaign.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Campaign Film</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        motif: {
            title: "motif",
            subtitle: "Fractional CMO · 2024 – Present",
            type: "role",
            color: "#7c3aed",
            industry: "Fintech / AI",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #7c3aed">Fintech / AI</div>
                        <span class="role-status active">Current - ESOP Holder</span>
                    </div>
                    <h2>Fractional CMO</h2>
                    <h3>motif · AI-Powered Wealth Advisory · 2024 – Present</h3>
                    <p class="role-context">Originally an advisory board role at this AI-powered wealth advisory fintech. ESOP holder handling the full marketing mandate with a small team and budget. Much of the work we do is supported by Claude, Claude Code, and other AI tools.</p>
                    <div class="achievements">
                        <h4>Marketing</h4>
                        <ul>
                            <li><strong>Full marketing ownership</strong> - brand development, website build, hosting, updates, and social media management.</li>
                            <li><strong>Pivoted to B2B outreach</strong> - contacted 1,000+ fintech organisations to develop the sales pipeline.</li>
                            <li><strong>£150M+ AUM pipeline</strong> - generated a qualified "under-negotiation" phase of over 150 million in assets under management across seven entities.</li>
                            <li><strong>30 active prospects</strong> - built pipeline now at ~30 prospects in varying stages.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Product Development</h4>
                        <ul>
                            <li><strong>AI-supported workflow</strong> - much of the work is supported by Claude, Claude Code, and other AI tools across marketing and product.</li>
                            <li><strong>Cross-functional role</strong> - bridging marketing strategy with hands-on product development in an AI-native fintech.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">1,000+</span>
                            <span class="stat-label">Organisations Contacted</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">£150M+</span>
                            <span class="stat-label">AUM Pipeline</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">7</span>
                            <span class="stat-label">Entities in Negotiation</span>
                        </div>
                    </div>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px;">Campaign Work</h3>

                    <div class="media-gallery">
                        <h4>Superteam Accelerator</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">As part of our acceptance to the Solana SuperTeam Singapore Accelerator Fund, we worked with the creative team on a video explaining our product.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/motif/motif - Superteam explainer.mp4">
                                <video src="assets/motif/motif - Superteam explainer.mp4" muted preload="metadata" poster="assets/thumbs/motif-superteam.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Superteam Explainer</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        classified: {
            title: "Classified Cycling",
            subtitle: "Head of Marketing & Comms · Jun – Nov 2024",
            type: "role",
            color: "#2563eb",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #2563eb">Cycling</div>
                    </div>
                    <h2>Head of Marketing & Communications</h2>
                    <h3>Classified Cycling · Component Manufacturer · Jun – Nov 2024</h3>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Brand & product positioning</strong> - led the research, validation, and integration of brand and product positions.</li>
                            <li><strong>160+ media placements</strong> - spearheaded global product launches, including the Vistar // Powershift drivetrain at Eurobike.</li>
                            <li><strong>Global events</strong> - managed Eurobike, Sea Otter, and Taichung Bike Week to strengthen partnerships and drive growth.</li>
                            <li><strong>AI/ML adoption</strong> - led adoption of AI and machine learning across departments.</li>
                            <li><strong>Team leadership</strong> - led the marketing team and agencies to deliver cohesive digital, PR, and social campaigns.</li>
                            <li><strong>IBD & distributor support</strong> - enhanced education and process for IBDs and distributors.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">160+</span>
                            <span class="stat-label">Media Placements at Eurobike</span>
                        </div>
                    </div>

                    <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 20px 0 10px;">The below shows some of the creatives used in the delivery of the brand's key campaigns.</p>

                    <div class="media-gallery">
                        <h4>Vistar Groupset Launch</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">In partnership with TRP, I led the launch of the VISTAR Classified Groupset. This was the standout media news story at Eurobike 2024 across all categories - and arguably one of my best pieces of work.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Vistar Classified Render.mp4">
                                <video src="assets/Classified/Vistar Classified Render.mp4" muted preload="metadata" poster="assets/thumbs/classified-vistar.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Vistar Render</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>INEOS Partnership</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">We worked with the World Tour team INEOS in 2024 at both the Giro d'Italia and the Tour de France as part of the team's time trial setup. I worked on all of the commercials and partnership details, as well as activation.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Classified - Ineos - Giro d'Italia.mp4">
                                <video src="assets/Classified/Classified - Ineos - Giro d'Italia.mp4" muted preload="metadata" poster="assets/thumbs/classified-ineos.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">INEOS - Giro d'Italia</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/INEOS_2_1024x1024.webp">
                                <img src="assets/Classified/INEOS_2_1024x1024.webp" alt="INEOS Partnership" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Eurobike 2024</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">I led the organisation of our attendance at Eurobike in 2024. Our stand had the largest LED screen at the event, creating intrigue and interest with our unique layout and event experience.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike1.jpeg">
                                <img src="assets/Classified/Eurobike1.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/EUrobike 2.jpeg">
                                <img src="assets/Classified/EUrobike 2.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 3.jpeg">
                                <img src="assets/Classified/Eurobike 3.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 4.jpeg">
                                <img src="assets/Classified/Eurobike 4.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 5.jpeg">
                                <img src="assets/Classified/Eurobike 5.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike6.jpeg">
                                <img src="assets/Classified/Eurobike6.jpeg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>High Def Render Project</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Working with the world-class animation studio Propeller in Denmark, we created a suite of high-quality renders for various campaigns and award applications.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Drive Train Animation Render.mp4">
                                <video src="assets/Classified/Drive Train Animation Render.mp4" muted preload="metadata" poster="assets/thumbs/classified-drivetrain.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Drive Train Render</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Hub Animation Render.mp4">
                                <video src="assets/Classified/Hub Animation Render.mp4" muted preload="metadata" poster="assets/thumbs/classified-hub.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Hub Render</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        muuvr: {
            title: "Muuvr",
            subtitle: "CMO · Jan 2023 – May 2024",
            type: "role",
            color: "#d946ef",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #d946ef">Fitness Tech</div>
                    </div>
                    <h2>Chief Marketing Officer</h2>
                    <h3>Muuvr · Move-to-Earn Application · Jan 2023 – May 2024</h3>
                    <div class="achievements">
                        <h4>Brand & GTM</h4>
                        <ul>
                            <li>Led Muuvr's brand and visual identity from scratch, including persona development to shape product and communications.</li>
                            <li>Oversaw go-to-market strategy for product launches. Procured and managed agencies across creative, performance, and PR.</li>
                            <li>Built the entire social presence and led the technical development of the website, built on WooCommerce/WordPress with custom elements.</li>
                            <li>Contributed to a successful fundraising effort securing $4.5M in investment.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Product Development</h4>
                        <ul>
                            <li>Extensively involved in product development, hosting product development sessions and creating requirements documents and technical plans.</li>
                            <li>Led on gamification strategy, designing sequences from onboarding through to the full user journey.</li>
                            <li>Designed and implemented AI strategies across product, marketing, and financial decision-making.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Events & Partnerships</h4>
                        <ul>
                            <li>Represented Muuvr at events including the Frankfurt Digital Assets Conference and live endurance sports events such as the Blenheim Triathlon and Oxford Half Marathon.</li>
                            <li>Attended Rouleur Live and held a series of investor workshops and biannual investor events.</li>
                            <li>Led the development of the Muuvr Marketplace partnerships: commercial arrangements between event organisers and endurance sports brands enabling users to redeem moves for equipment.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">$4.5M</span>
                            <span class="stat-label">Investment Raised</span>
                        </div>
                    </div>
                </div>
            `
        },

        wahoo: {
            title: "RGT Cycling → Wahoo Fitness",
            subtitle: "CMO / Head of Marketing · 2019 – Jan 2023",
            type: "role",
            color: "#dc2626",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #dc2626">Fitness Tech</div>
                    </div>
                    <h2>CMO → Head of Marketing (Subscription Services)</h2>
                    <h3>RGT Cycling (Co-Founded) → Acquired by Wahoo Fitness · 2019 – Jan 2023</h3>
                    <p class="role-context">Co-founded RGT Cycling as Head of Brand & Marketing (2019), promoted to CMO (2021), then transitioned to Head of Marketing (Subscription Services) at Wahoo Fitness following acquisition (April 2022).</p>
                    <div class="achievements">
                        <h4>RGT Cycling - Co-Founded (2019 – 2022)</h4>
                        <ul>
                            <li><strong>0 → 450K users</strong> - grew registered users from 100 to 450K and subscribers from 0 to 10K.</li>
                            <li><strong>Conversion optimisation</strong> - drove a funnel optimisation project improving register-to-ride conversions from 20% to 45% within 12 months.</li>
                            <li><strong>2.2M sessions</strong> - directed platform content strategy generating over 2.2M sessions from approximately 1M users.</li>
                            <li><strong>MOU & WAU growth</strong> - approximately 3,000% increase in monthly and weekly active users.</li>
                            <li><strong>Brand recall</strong> - improved prompted brand recall from 2 to 95 and unprompted from 0 to 75.</li>
                            <li><strong>NPS turnaround</strong> - elevated site-based NPS from -65 to +45.</li>
                            <li><strong>GTM flywheel</strong> - defined the GTM flywheel, utilising partnerships with over 100 brands to provide attention at the top of the funnel and support conversion.</li>
                            <li><strong>Community</strong> - curated and hosted the RGT Breakaway Podcast and AMA sessions, fostering strong community engagement and brand advocacy.</li>
                            <li><strong>Led creative direction</strong> - integrated brand messaging and performance marketing while managing agency partnerships and budgets.</li>
                            <li><strong>Acquisition</strong> - played a critical role in corporate strategy and due diligence during RGT Cycling's acquisition by Wahoo Fitness.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Wahoo Fitness - Post-Acquisition (2022 – 2023)</h4>
                        <ul>
                            <li><strong>Integrated marketing strategy</strong> - led the strategic development and execution of Wahoo X's integrated marketing strategy, driving growth and brand positioning.</li>
                            <li><strong>Go-to-market</strong> - directed GTM, PR, partnerships, product innovation, and multi-channel marketing efforts.</li>
                            <li><strong>Market insights</strong> - delivered vital market insights to inform strategic decisions and maximise ROI.</li>
                            <li><strong>Cross-functional support</strong> - provided high-level strategic support across Retail and Sales, defining vision, mission, and performance metrics.</li>
                            <li><strong>IBD & distributor relations</strong> - worked closely with local offices, IBDs, and distributors to ensure accurate and favourable product positioning.</li>
                            <li><strong>500+ retailers</strong> - managed global product launches and expanded RGT retail presence.</li>
                            <li><strong>Wahoo X GTM Fall 2022</strong> - led the campaign achieving major improvements in brand KPIs and securing coverage in 20 top publications.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">450K</span>
                            <span class="stat-label">Registered Users</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">20→45%</span>
                            <span class="stat-label">Conversion Rate</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">-65→+45</span>
                            <span class="stat-label">NPS Score</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">3,000%</span>
                            <span class="stat-label">MOU/WAU Growth</span>
                        </div>
                    </div>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px;">Campaign Work</h3>

                    <div class="media-gallery">
                        <h4>SYSTM X Rebrand</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">When Wahoo acquired RGT Cycling, we went through a rebrand for both the SYSTM and RGT products. The two separate products came together as a single product, WahooX.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="youtube" data-src="lKKbsJTf7_c">
                                <img src="https://img.youtube.com/vi/lKKbsJTf7_c/hqdefault.jpg" alt="SYSTM X Rebrand" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">SYSTM X Rebrand</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Wahoo ELEMNT ROAM Launch</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">While managing marketing for subscription services at Wahoo, I also undertook additional roles supporting the delivery of creatives and planning for hardware launches.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="youtube" data-src="MKNoP4vOAL0">
                                <img src="https://img.youtube.com/vi/MKNoP4vOAL0/hqdefault.jpg" alt="ELEMNT ROAM Launch" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ELEMNT ROAM Launch</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>SYSTM On Location Series</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">I led on various campaign launches at Wahoo, including the On Location Series for SYSTM.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="youtube" data-src="A_MKzV8rjTA">
                                <img src="https://img.youtube.com/vi/A_MKzV8rjTA/hqdefault.jpg" alt="World Cycling Centre" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">World Cycling Centre</div>
                            </div>
                            <div class="gallery-item" data-type="youtube" data-src="XO2jF7O5aB4">
                                <img src="https://img.youtube.com/vi/XO2jF7O5aB4/hqdefault.jpg" alt="Catalunya" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Catalunya</div>
                            </div>
                            <div class="gallery-item" data-type="youtube" data-src="I8sDkjYOLk8">
                                <img src="https://img.youtube.com/vi/I8sDkjYOLk8/hqdefault.jpg" alt="Portugal" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Portugal</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>GCN Partnership</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">We worked with GCN on a series of partnership videos to support the launch of the platform.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="youtube" data-src="D29q_wssy0k">
                                <img src="https://img.youtube.com/vi/D29q_wssy0k/hqdefault.jpg" alt="GCN Partnership" loading="lazy" decoding="async">
                                <div class="gallery-play"></div>
                                <div class="gallery-label">GCN Partnership</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        wattbike: {
            title: "Wattbike",
            subtitle: "PR & Marketing Manager · 2018 – 2019",
            type: "role",
            color: "#ea580c",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #ea580c">Fitness Tech</div>
                    </div>
                    <h2>PR & Marketing Manager</h2>
                    <h3>Wattbike · Indoor Training Bike · 2018 – 2019</h3>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Media perception shift</strong> - shifted media perceptions of the Wattbike Atom, improving mid-funnel retention and driving conversions after addressing early negative reviews.</li>
                            <li><strong>Global events</strong> - delivered growth through events across the UK, Europe, and Africa.</li>
                            <li><strong>Ambassador marketing</strong> - built the framework for selecting and engaging ambassadors, negotiating contracts, and collaborating with high-profile talent.</li>
                            <li><strong>International support</strong> - provided tailored marketing materials and training resources for international distributors and dealers.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        pelotan: {
            title: "Pelotan",
            subtitle: "Consultant Marketing Director · 2018 – 2020",
            type: "role",
            color: "#ca8a04",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #ca8a04">Cycling</div>
                    </div>
                    <h2>Consultant Marketing Director</h2>
                    <h3>Pelotan · Cycling-Specific Sun Protection · 2018 – 2020</h3>
                    <p class="role-context">Consultancy role providing marketing direction for this niche cycling sun protection brand.</p>
                </div>
            `
        },

        "ribble-1": {
            title: "Ribble",
            subtitle: "Head of Brand & Marketing · 2017 – 2018",
            type: "role",
            color: "#059669",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #059669">Cycling</div>
                    </div>
                    <h2>Head of Brand & Marketing</h2>
                    <h3>Ribble · High-End D2C Bike Brand · 2017 – 2018</h3>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Brand & marketing strategy</strong> - developed and executed brand and marketing strategies to drive growth and visibility.</li>
                            <li><strong>Digital marketing</strong> - led SEO, performance, and email efforts to boost engagement.</li>
                            <li><strong>Brand messaging</strong> - managed consistent brand messaging across all channels.</li>
                            <li><strong>Content & influencer</strong> - directed content creation and oversaw influencer partnerships.</li>
                            <li><strong>Data-driven optimisation</strong> - analysed data to optimise campaigns and improve ROI.</li>
                            <li><strong>Cross-functional collaboration</strong> - worked with teams to align brand strategy with product development and customer experience.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        planetx: {
            title: "Planet X Bikes",
            subtitle: "Head of Sales & Marketing · 2015 – 2017",
            type: "role",
            color: "#0891b2",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #0891b2">Cycling</div>
                    </div>
                    <h2>Head of Sales & Marketing</h2>
                    <h3>Planet X Bikes · D2C Bike Brand · 2015 – 2017</h3>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Revenue growth</strong> - developed and executed sales and marketing strategies that drove revenue growth and market expansion.</li>
                            <li><strong>Digital marketing</strong> - led SEO, PPC, email, and social media initiatives.</li>
                            <li><strong>eCommerce optimisation</strong> - optimised the eCommerce platform and implemented customer segmentation to boost conversions and retention.</li>
                            <li><strong>Team leadership</strong> - led the sales team to exceed targets through training and mentorship.</li>
                            <li><strong>Supplier relationships</strong> - built key supplier partnerships to optimise inventory and pricing.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        aster: {
            title: "Aster — Watch the Dot",
            subtitle: "Founder / Autonomous AI Business · 2025 – Present",
            type: "role",
            color: "#ef4444",
            industry: "AI / Endurance Sports",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #ef4444">Autonomous AI Business</div>
                    </div>
                    <h2>Aster — Watch the Dot</h2>
                    <h3>Live GPS Tracking Platform for Ultra-Endurance Cycling · 2025 – Present</h3>
                    <p class="role-context">A vibe-created, fully autonomous business — not just an app. Aster is live GPS tracking for ultra-endurance cycling, shipped to iOS and Android. The point isn't the app: it's that the entire back office runs itself. Orchestrated AI agents (Hermes, Paperclip and various models) handle business analysis, product, engineering requirements, market research, development, testing, marketing, content and copy — with little or no input from me. A live proof of how much of a business one operator can run when AI handles the stack.</p>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Founder & Operator</strong> - concept, brand, strategy and the human in the loop for an otherwise autonomous business.</li>
                            <li><strong>Agent Orchestration</strong> - designed the AI agent workflows (Hermes, Paperclip and supporting models) that run BA, product, engineering, QA, marketing and content end-to-end.</li>
                            <li><strong>Product</strong> - core proposition, four non-negotiable rider-safety rules (offline start/finish, never auto-logout, tracking persists, never lose a ping).</li>
                            <li><strong>GTM</strong> - positioning ("for the rides that don't end on TV"), brand, channel strategy and launch plan.</li>
                            <li><strong>Shipping</strong> - native iOS and Android via Capacitor, with background geolocation, live race maps and a real-time leaderboard.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Why It Matters</h4>
                        <p>Aster is the live proof of the Brand-to-Platform thesis: a cycling brand operating as a software platform, run by a single operator with AI handling the rest. It's a working answer to the question "how much business can one person run?" when the org chart is mostly agents.</p>
                    </div>
                    <span class="ai-coming" style="display:inline-block;margin-top:16px;">iOS & Android · public launch in progress</span>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px;">Inside the Autonomous Business</h3>
                    <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Brand, design system, operations and team comms — all running with AI agents in the loop.</p>

                    <div class="media-gallery">
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/Aster Brand Book - Logo & Mark.png">
                                <img src="assets/Aster/Aster Brand Book - Logo & Mark.png" alt="Aster brand book — Logo & Mark" loading="lazy" decoding="async">
                                <div class="gallery-label">Brand Book — Logo & Mark</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/Aster Brand Book - Components.png">
                                <img src="assets/Aster/Aster Brand Book - Components.png" alt="Aster brand book — Components" loading="lazy" decoding="async">
                                <div class="gallery-label">Brand Book — Components</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/Aster Notion - Source of Truth.png">
                                <img src="assets/Aster/Aster Notion - Source of Truth.png" alt="Aster Notion workspace — source of truth" loading="lazy" decoding="async">
                                <div class="gallery-label">Operations Hub (Notion)</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/Aster Slack - Feature Suggestions.jpg">
                                <img src="assets/Aster/Aster Slack - Feature Suggestions.jpg" alt="Aster Slack — feature suggestions with Claude" loading="lazy" decoding="async">
                                <div class="gallery-label">Team Slack (with Claude)</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        wattplan: {
            title: "Wattplan",
            subtitle: "Founder / AI Side Project · 2025 – Present",
            type: "role",
            color: "#6366f1",
            industry: "AI / Endurance Sports",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #6366f1">AI Side Project</div>
                    </div>
                    <h2>Wattplan</h2>
                    <h3>AI-Powered Endurance Sports Training App · 2025 – Present</h3>
                    <p class="role-context">An AI-powered endurance sports training app built entirely using Claude Code. Wattplan is a personal experiment into AI readiness and the practical application of AI in product development.</p>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Founder</strong> - concept, vision, and strategic direction.</li>
                            <li><strong>Marketing</strong> - brand development, positioning, website, and launch strategy.</li>
                            <li><strong>Development</strong> - built the full app using Claude Code - front-end, back-end, and AI integrations.</li>
                            <li><strong>GTM</strong> - go-to-market planning, user acquisition strategy, and early traction.</li>
                            <li><strong>Product</strong> - feature design, user flows, and data architecture.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Brand to Platform Evolution</h4>
                        <p>Exploring how AI enables brands to transition from brand to platform. This experiment investigates how app production can create a competitive moat and build sustainable audiences.</p>
                    </div>
                    <a href="https://wattplan.cc" target="_blank" class="ai-link" style="display:inline-block;margin-top:16px;color:#6366f1;font-weight:600;">wattplan.cc</a>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px;">App Screenshots</h3>

                    <div class="media-gallery">
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan Dashboards.png">
                                <img src="assets/Wattplan/Wattplan Dashboards.png" alt="Wattplan Dashboards" loading="lazy" decoding="async">
                                <div class="gallery-label">Dashboards</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan AI Coach.png">
                                <img src="assets/Wattplan/Wattplan AI Coach.png" alt="Wattplan AI Coach" loading="lazy" decoding="async">
                                <div class="gallery-label">AI Coach</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan AI Strategy.png">
                                <img src="assets/Wattplan/Wattplan AI Strategy.png" alt="Wattplan AI Strategy" loading="lazy" decoding="async">
                                <div class="gallery-label">AI Strategy</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan Route Analysis.png">
                                <img src="assets/Wattplan/Wattplan Route Analysis.png" alt="Wattplan Route Analysis" loading="lazy" decoding="async">
                                <div class="gallery-label">Route Analysis</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan Ride Review Screen.png">
                                <img src="assets/Wattplan/Wattplan Ride Review Screen.png" alt="Wattplan Ride Review" loading="lazy" decoding="async">
                                <div class="gallery-label">Ride Review</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/Wattplan Ride wPrime Review.png">
                                <img src="assets/Wattplan/Wattplan Ride wPrime Review.png" alt="Wattplan wPrime Review" loading="lazy" decoding="async">
                                <div class="gallery-label">wPrime Review</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        skills: {
            title: "Skills & Expertise",
            subtitle: "Core competencies across marketing, leadership & technology",
            type: "skills",
            content: `
                <div class="skills-card">
                    <h2>Skills & Expertise</h2>
                    <div class="skills-grid">
                        <div class="skill-group">
                            <h4>Leadership & Strategy</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Leadership</span>
                                <span class="skill-tag">Business Development</span>
                                <span class="skill-tag">Strategy</span>
                                <span class="skill-tag">Investor Relations</span>
                                <span class="skill-tag">Budgeting</span>
                                <span class="skill-tag">Funding</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Brand & Creative</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Brand Development</span>
                                <span class="skill-tag">Campaign Management</span>
                                <span class="skill-tag">PR & Editorial</span>
                                <span class="skill-tag">Content Strategy</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Digital & Data</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Digital Planning & Purchasing</span>
                                <span class="skill-tag">SEO / PPC</span>
                                <span class="skill-tag">CRM & Email Marketing</span>
                                <span class="skill-tag">Data Analysis</span>
                                <span class="skill-tag">eCommerce</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Partnerships & Events</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Event Management</span>
                                <span class="skill-tag">Sponsorships & Partnerships</span>
                                <span class="skill-tag">Ambassador & Influencer Marketing</span>
                                <span class="skill-tag">Agency Management</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Technology</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">AI & Machine Learning</span>
                                <span class="skill-tag highlight">Claude Code</span>
                                <span class="skill-tag highlight">Claude Co Work</span>
                                <span class="skill-tag">AI Creative Tools</span>
                                <span class="skill-tag">Midjourney / DALL-E</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Industries</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Cycling & Endurance Sports</span>
                                <span class="skill-tag">Fitness Technology</span>
                                <span class="skill-tag">Fintech</span>
                                <span class="skill-tag">D2C / eCommerce</span>
                                <span class="skill-tag">Performance Apparel</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Languages</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">English (Native)</span>
                                <span class="skill-tag">Italian (Elementary)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        "ai-work": {
            title: "AI Work",
            subtitle: "AI-powered marketing, strategy & creative examples",
            type: "ai-work",
            content: `
                <div class="ai-work-card">
                    <h2>AI Work</h2>
                    <p class="ai-intro">Tech evangelist and early adopter with 2+ years of hands-on AI experience — from embedding AI/ML across marketing, product and decision-making in established businesses, to running an autonomous, AI-operated business end-to-end as a solo operator.</p>
                    <div class="ai-grid">
                        <div class="ai-item">
                            <div class="ai-item-icon">A</div>
                            <h4>Aster — Watch the Dot</h4>
                            <p>A vibe-created, fully autonomous business — not just an app. Live GPS tracking for ultra-endurance cycling, shipped to iOS and Android. Built and run by orchestrated AI agents (Hermes, Paperclip and various models) across the full back office: business analysis, product, engineering requirements, market research, development, testing, marketing, content and copy. A live proof of how much of a business one operator can run when AI handles the stack.</p>
                            <span class="ai-coming">iOS & Android · public launch in progress</span>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">W</div>
                            <h4>Wattplan</h4>
                            <p>AI-powered endurance sports training app built entirely with Claude Code - founder, marketing, development, GTM, and product. A side project testing what's possible when AI handles the full stack.</p>
                            <a href="https://wattplan.cc" target="_blank" class="ai-link">wattplan.cc</a>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">T</div>
                            <h4>The Bike That Gets Me</h4>
                            <p>Ribble Cycles 2026 campaign where all creative assets were developed using AI - demonstrating how AI tools can produce production-ready marketing content.</p>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">I</div>
                            <h4>AI Integration</h4>
                            <p>Led adoption of AI/ML at Classified Cycling across departments. Designed AI strategies at Muuvr for product, marketing and finance. Built wattplan.cc using only AI as an experiment in AI readiness.</p>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">B</div>
                            <h4>Brand to Platform Evolution</h4>
                            <p>Exploring how AI lets brands graduate from brand to platform — using autonomous product creation as a moat and an audience-building engine. Aster is the live proof: a cycling brand operating as a software platform, run by a single operator with AI handling the rest.</p>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">R</div>
                            <h4>This Resume</h4>
                            <p>Built with AI assistance - an interactive knowledge-graph resume demonstrating the intersection of marketing and technology.</p>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">C</div>
                            <h4>AI Creatives</h4>
                            <p>AI-generated campaign visuals, brand assets, and creative concepts.</p>
                            <span class="ai-coming">Portfolio coming soon</span>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">S</div>
                            <h4>Strategy Documents</h4>
                            <p>AI-assisted market analysis, positioning frameworks, and GTM strategies.</p>
                            <span class="ai-coming">Portfolio coming soon</span>
                        </div>
                    </div>
                </div>
            `
        },

        education: {
            title: "Education & Qualifications",
            subtitle: "Professional accreditations and certifications",
            type: "education",
            content: `
                <div class="education-card">
                    <h2>Education & Qualifications</h2>
                    <div class="edu-list">
                        <div class="edu-item">
                            <div class="edu-badge">MCIM</div>
                            <div class="edu-detail">
                                <h4>Member of the Chartered Institute of Marketing</h4>
                                <p>Professional Marketing Accreditation</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">MCPR</div>
                            <div class="edu-detail">
                                <h4>Member of the Chartered Institute of Public Relations</h4>
                                <p>Professional PR Accreditation</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">HD</div>
                            <div class="edu-detail">
                                <h4>Higher Diploma - Fishing & Fishery Sciences & Management</h4>
                                <p>Distinction</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">ISEB</div>
                            <div class="edu-detail">
                                <h4>BCS Requirements Engineering</h4>
                                <p>ISEB Certification</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">ISEB</div>
                            <div class="edu-detail">
                                <h4>BCS Certificate in Business Analysis</h4>
                                <p>ISEB Certification</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">ITIL</div>
                            <div class="edu-detail">
                                <h4>Information Technology Infrastructure Library</h4>
                                <p>IT Service Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        about: {
            title: "About",
            subtitle: "The person behind the CV",
            type: "about",
            content: `
                <div class="about-card">
                    <h2>About James</h2>
                    <div class="about-sections">
                        <div class="about-section">
                            <h4>Cycling - It's Part of My Fabric</h4>
                            <p>I am a lifestyle cyclist. Cycling isn't just an interest - it runs through everything I do. My father was a mountain biking instructor, and I grew up on bikes. I rode the juniors competitively before heading off to college. Today I ride road and gravel seriously - I raced the National Championships in 2025 and placed 15th. I'm equally at home on a gravel bike in the Peak District or on the road in the Yorkshire Dales. Cycling culture, community and progression are values I live, not just market.</p>
                        </div>
                        <div class="about-section">
                            <h4>Industry Network</h4>
                            <p>Extensive network across the cycling industry built over almost 15 years. Deep relationships with journalists, brands, athletes, agencies, retailers, distributors, and event organisers across the UK and Europe. From grassroots community rides to WorldTour teams, I understand the ecosystem at every level.</p>
                        </div>
                        <div class="about-section">
                            <h4>Personal</h4>
                            <p>I live between Sheffield and Lincoln with my wife and son, Fox.</p>
                        </div>
                        <div class="about-section">
                            <h4>Travel</h4>
                            <p>30% travel possible. Comfortable with UK and European travel for events, retail, wholesale partners, and activations.</p>
                        </div>
                        <div class="about-section">
                            <h4>Technology</h4>
                            <p>AI enthusiast and tech evangelist. Always at the forefront of tech as an early adopter. 2+ years of significant hands-on AI experience across marketing, strategy, creative, and now product development. Currently building products with Claude Code.</p>
                        </div>
                        <div class="about-section">
                            <h4>Interests</h4>
                            <div class="interest-tags">
                                <span>Road Cycling</span>
                                <span>Gravel</span>
                                <span>XC MTB</span>
                                <span>Cycling Culture</span>
                                <span>Travel</span>
                                <span>Adventure Sports</span>
                                <span>Sustainability</span>
                                <span>Technology</span>
                                <span>AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        contact: {
            title: "Contact",
            subtitle: "Get in touch",
            type: "contact",
            content: `
                <div class="contact-card">
                    <h2>Get in Touch</h2>
                    <div class="contact-grid">
                        <a href="mailto:james@manual-focus.co.uk" class="contact-item">
                            <span class="contact-icon">@</span>
                            <span class="contact-label">Email</span>
                            <span class="contact-value">james@manual-focus.co.uk</span>
                        </a>
                        <a href="tel:07897714630" class="contact-item">
                            <span class="contact-icon">T</span>
                            <span class="contact-label">Phone</span>
                            <span class="contact-value">07897 714630</span>
                        </a>
                        <div class="contact-item">
                            <span class="contact-icon">L</span>
                            <span class="contact-label">Location</span>
                            <span class="contact-value">Sheffield / Lincoln, UK · 1.5hrs from London</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">+</span>
                            <span class="contact-label">Travel</span>
                            <span class="contact-value">30% travel possible - UK, Europe</span>
                        </div>
                    </div>
                </div>
            `
        },

        listen: {
            title: "Listen",
            subtitle: "What I'm listening to",
            type: "listen",
            content: `<div id="ipod-mount"></div>`
        }
    }
};

const PLAYLIST = [
    {
        title: "Edge of Seventeen",
        artist: "Stevie Nicks",
        src: "assets/music/Stevie Nicks -Edge-of-Seventeen.mp3"
    },
    {
        title: "This Must Be the Place",
        artist: "Talking Heads",
        src: "assets/music/Ta;lking Heads-This-Must-Be-the-Place.mp3"
    },
    {
        title: "Regulate",
        artist: "Warren G",
        src: "assets/music/Warren-G-Regulate.mp3"
    },
    {
        title: "Suzie Q",
        artist: "Creedence Clearwater Revival",
        src: "assets/music/Creedence-Clearwater-Revival-Suzie-Q.mp3"
    },
    {
        title: "Want You in My Soul",
        artist: "Lovebirds ft. Stee Downes",
        src: "assets/music/ovebirds-Want-You-In-My-Soul-ft-Stee-Downes.mp3"
    },
    {
        title: "Pennies from Heaven",
        artist: "Inner City",
        src: "assets/music/Inner-City-Pennies-From-Heaven.mp3"
    },
    {
        title: "Born to Run",
        artist: "Bruce Springsteen",
        src: "assets/music/Bruce-Springsteen-Born-to-Run.mp3"
    },
    {
        title: "Water (feat. Clara La San)",
        artist: "BICEP",
        src: "assets/music/BICEP-WATER-FEAT-CLARA-LA-SAN-mp3.mp3"
    }
];
