const RESUME_DATA = {
    center: {
        id: "james",
        label: "James Vickers",
        sublabel: "MCIM · MCIPR",
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
        {
            id: "ai-exploration",
            label: "Projects",
            type: "category",
            icon: "⬢",
            color: "#6366f1",
            angle: 60,
            distance: 1
        },
        {
            id: "manual-focus",
            label: "Manual Focus",
            type: "category",
            icon: "◎",
            color: "#1e293b",
            angle: 330,
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
            sublabel: "2025–Present",
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
            sublabel: "2019–22",
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
            id: "aster",
            label: "Aster",
            sublabel: "2025–Present",
            type: "role",
            parent: "ai-exploration",
            order: 1,
            icon: "◆",
            color: "#ef4444"
        },
        {
            id: "wattplan",
            label: "WattPlan",
            sublabel: "2026–Present",
            type: "role",
            parent: "ai-exploration",
            order: 2,
            icon: "◆",
            color: "#6366f1"
        }
    ],

    // Connections between nodes
    edges: [
        // Center to categories
        { from: "james", to: "experience" },
        { from: "james", to: "skills" },
        { from: "james", to: "ai-work" },
        { from: "james", to: "ai-exploration" },
        { from: "james", to: "manual-focus" },
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
        // Projects
        { from: "ai-exploration", to: "aster" },
        { from: "ai-exploration", to: "wattplan" },
    ],

    // Detail content for modals
    details: {
        james: {
            title: "James Vickers",
            subtitle: "MCIM · MCIPR",
            type: "profile",
            content: `
                <div class="profile-hero-card">
                    <div class="profile-hero-img">
                        <img src="assets/thumbs/g/ribble-gravel-national-champinships-sponsorship-2025-0q5a9331.jpg" alt="James Vickers racing" />
                    </div>
                    <div class="profile-hero-body">
                        <div class="profile-hero-avatar">
                            <img src="assets/thumbs/g/main-pic-james-vickers-main-pic.jpg" alt="James Vickers" id="profile-photo" style="cursor:pointer" />
                        </div>
                        <div class="profile-hero-info">
                            <h2>James Vickers</h2>
                            <p class="profile-title">Marketing and communications leader</p>
                            <p class="profile-creds">MCIM · MCIPR</p>
                        </div>
                        <p class="profile-bio">I lead marketing and communications for brands in endurance sport, cycling and fitness tech. I was on the founding team at RGT Cycling as CMO and grew it from 100 to 450,000 users through to its acquisition by Wahoo Fitness.</p>
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
                            <span class="timeline-date">2019 – 22</span>
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
                            <span class="timeline-role">Head of Brand → Advisor</span>
                            <span class="timeline-company">Ribble Cycles</span>
                            <span class="timeline-date">2024 – Present</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Fractional CMO</span>
                            <span class="timeline-company">motif</span>
                            <span class="timeline-date">2025 – Present</span>
                        </div>
                        <div class="timeline-item current">
                            <span class="timeline-role">Founder</span>
                            <span class="timeline-company">Manual Focus</span>
                            <span class="timeline-date">2009 – Present</span>
                        </div>
                    </div>
                </div>
            `
        },

        "ribble-2": {
            title: "Ribble Cycles",
            subtitle: "Head of Brand & Marketing, now Marketing Advisor · Nov 2024 – Present",
            type: "role",
            color: "#059669",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #059669">Cycling</div>
                        <span class="role-status active">Current - Retained advisor (3 days/week)</span>
                    </div>
                    <h2>Head of Brand & Marketing, now Marketing Advisor</h2>
                    <h3>Ribble Cycles · Nov 2024 – Present</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://www.ribblecycles.co.uk/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">ribblecycles.co.uk →</a></p>
                    <p class="role-context">Joined as Head of Brand and Marketing in November 2024 to lead the marketing function under PE ownership. Since January 2026 I have been a retained Marketing Advisor three days a week, working through Manual Focus on strategy and the pro sports programme.</p>
                    <p class="role-context" style="margin-top: 6px;">Budget responsibility for all marketing activities. £1.2M, landed 2024/2025 under budget at £920K.</p>


                    <div class="skill-tags" style="margin: 10px 0 4px;">
                        <span class="skill-tag">4 national titles — 2026 Gravel Nats</span>
                        <span class="skill-tag">Coverage 135 → 196 articles</span>
                        <span class="skill-tag">Audience 117M → 327M</span>
                        <span class="skill-tag">£1.2M budget, landed £920K</span>
                    </div>
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
                            <li><strong>Four national titles</strong> - the Ribble Outliers won all four titles at the 2026 UK Gravel National Championships.</li>
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
                            <li><strong>ALLGRIT &amp; ULTRA-GRIT go-to-market</strong> - wrote the positioning and messaging framework and the GTM plan for the range and its material variants, ran the press tour, and produced the showroom and retailer education assets with localised versions for each market. Ribble's most successful new product launch, with retail partners, athletes and journalists aligned behind one story.</li>
                            <li><strong>The Original Outliers rebrand</strong> - my first major project. I led the rebrand with FreshBritain and rolled the new brand out across every touchpoint, from retail and the website to social. I was closely involved in developing the messaging and carried it through the tone of voice and the product copy.</li>
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
                        <h4>UK Gravel National Championships 2026 - Four National Titles</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The Ribble Outliers won all four national titles at the 2026 UK Gravel National Championships, and the story film, race day reel and podium photography all came out of the same weekend. I raced too and finished 9th in the 40-44 category, my best national result to date. The full film is also on <a href="https://www.youtube.com/watch?v=qm-CDWKo8xc" target="_blank" rel="noopener" style="color:#2563eb;">YouTube</a>.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Gravel Nationals 2026 - Four Titles/Ribble Outliers Nationals Film.mp4">
                                <video src="assets/Ribble Gravel Nationals 2026 - Four Titles/Ribble Outliers Nationals Film.mp4" muted preload="none" poster="assets/thumbs/g/ribble-gravel-nationals-2026-four-titles-nationals-film-poster.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">The Nationals Film</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Gravel Nationals 2026 - Four Titles/RACE DAY REEL.mp4">
                                <video src="assets/Ribble Gravel Nationals 2026 - Four Titles/RACE DAY REEL.mp4" muted preload="none" poster="assets/thumbs/g/ribble-gravel-nationals-2026-four-titles-4sc-ribble-natchamp-209.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Race Day Reel</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel Nationals 2026 - Four Titles/4SC.RIBBLE.NATCHAMP.-209.jpg">
                                <img src="assets/thumbs/g/ribble-gravel-nationals-2026-four-titles-4sc-ribble-natchamp-209.jpg" alt="Ribble Outliers - 2026 UK Gravel National Championships" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>2026 Team Launch</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">2026 saw the return of the Ribble Outliers and the return of our launch party at the headquarters of our owners. A key opportunity for partner brands to brief the athletes on their messaging and for sponsors to align on product and marketing partnerships.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2026 Team Launch/RO 16x9 V2.mp4">
                                <video src="assets/Ribble 2026 Team Launch/RO 16x9 V2.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-ribble-team-launch.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Team Launch Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8854.jpg">
                                <img src="assets/thumbs/g/ribble-2026-team-launch-0q5a8854.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8746.jpg">
                                <img src="assets/thumbs/g/ribble-2026-team-launch-0q5a8746.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Team Launch/0Q5A8793.jpg">
                                <img src="assets/thumbs/g/ribble-2026-team-launch-0q5a8793.jpg" alt="Team Launch" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>British Gravel National Championships 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Our biggest event activation of 2025. We took full ownership of the site including the start and finish lines, gantries, entry, scrimmage, barriers, and flags, alongside a large stretch fabric tent in the centre of the event village. Partners were on-site and the Ribble Outliers warmed up in the fan zone.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/Weekend Highlights Widescreen V2.mp4">
                                <video src="assets/Ribble Gravel National Champinships Sponsorship 2025/Weekend Highlights Widescreen V2.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-gravel-nationals.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Weekend Highlights</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9898.jpg">
                                <img src="assets/thumbs/g/ribble-gravel-national-champinships-sponsorship-2025-0q5a9898.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/0Q5A9331.jpg">
                                <img src="assets/thumbs/g/ribble-gravel-national-champinships-sponsorship-2025-0q5a9331.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gravel National Champinships Sponsorship 2025/_DSC0976.jpg">
                                <img src="assets/thumbs/g/ribble-gravel-national-champinships-sponsorship-2025-dsc0976.jpg" alt="Gravel Nationals" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>UCI Gralloch 2026 - Jenson Young 2nd Place</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Jenson Young of the Ribble Outliers took second at the UCI Gralloch in May 2026, a marquee result in one of the UK's most-watched gravel races and a clear proof point for the Outliers programme on the racing side as well as in the brand and comms work it generates.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Gralloch 2026 - Jenson Young 2nd Place/Jenson Young Gralloch 2026.mp4">
                                <video src="assets/Ribble Gralloch 2026 - Jenson Young 2nd Place/Jenson Young Gralloch 2026.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-gralloch-jenson.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Jenson Young Race Reel</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gralloch 2026 - Jenson Young 2nd Place/Gralloch 01.jpg">
                                <img src="assets/thumbs/g/ribble-gralloch-2026-jenson-young-2nd-place-gralloch-01.jpg" alt="UCI Gralloch - Jenson Young" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gralloch 2026 - Jenson Young 2nd Place/Gralloch 25.jpg">
                                <img src="assets/thumbs/g/ribble-gralloch-2026-jenson-young-2nd-place-gralloch-25.jpg" alt="UCI Gralloch - Jenson Young" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Gralloch 2026 - Jenson Young 2nd Place/Gralloch 50.jpg">
                                <img src="assets/thumbs/g/ribble-gralloch-2026-jenson-young-2nd-place-gralloch-50.jpg" alt="UCI Gralloch - Jenson Young" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Ribble Outliers at The Traka 2026</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The Ribble Outliers raced The Traka in Girona in April 2026, one of the biggest gravel events in the world, and the resulting film is the team's own content piece on the trip, the riders and the race. Cyclist magazine ran an in-depth gallery from the same weekend.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble Outliers Traka 2026/Ribble Outliers Traka 2026.mp4">
                                <video src="assets/Ribble Outliers Traka 2026/Ribble Outliers Traka 2026.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-outliers-traka.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Ribble Outliers x Traka Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Outliers Traka 2026/Traka - Harry Medal.jpg">
                                <img src="assets/thumbs/g/ribble-outliers-traka-2026-traka-harry-medal.jpg" alt="Ribble Outliers Traka - Harry" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Outliers Traka 2026/Traka - Jenson Young 1.jpg">
                                <img src="assets/thumbs/g/ribble-outliers-traka-2026-traka-jenson-young-1.jpg" alt="Ribble Outliers Traka - Jenson Young" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Outliers Traka 2026/Traka - Meth 3.jpg">
                                <img src="assets/thumbs/g/ribble-outliers-traka-2026-traka-meth-3.jpg" alt="Ribble Outliers Traka - Meth" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble Outliers Traka 2026/Traka - Sophie 2.jpg">
                                <img src="assets/thumbs/g/ribble-outliers-traka-2026-traka-sophie-2.jpg" alt="Ribble Outliers Traka - Sophie" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Welcome to Hell - Rutland-Melton CiCLE Classic</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Partnered with Smurfit Westrock Pro Cycling and Cyclist magazine to produce this mini-documentary following the women's professional continental team's win at the Rutland-Melton CiCLE Classic - arguably the biggest one-day race in the UK women's calendar.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 - Welcome to Hell Smurfity WestRock Video/YTDown.com_YouTube_WELCOME-TO-HELL-The-Story-Behind-Britain_Media_BH1ehifowbs_001_1080p.mp4">
                                <video src="assets/Ribble 2025 - Welcome to Hell Smurfity WestRock Video/YTDown.com_YouTube_WELCOME-TO-HELL-The-Story-Behind-Britain_Media_BH1ehifowbs_001_1080p.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-welcome-to-hell.jpg"></video>
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
                                <video src="assets/Ribble 2025 ULTRA-RACE Launch /4KULTRARACE _TVv4.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-ultra-race-tv.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ULTRA-RACE TV Spot</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 ULTRA-RACE Launch /New Ribble Ultra-Race ｜ No Compromise Engineering ｜ Ribble Cycles 3d technology video.mp4">
                                <video src="assets/Ribble 2025 ULTRA-RACE Launch /New Ribble Ultra-Race ｜ No Compromise Engineering ｜ Ribble Cycles 3d technology video.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-ultra-race-3d.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">3D Technology Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Climb-New-Crop.webp">
                                <img src="assets/thumbs/g/ribble-2025-ultra-race-launch-climb-new-crop.jpg" alt="ULTRA-RACE Climb" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Corner-New-Crop.webp">
                                <img src="assets/thumbs/g/ribble-2025-ultra-race-launch-corner-new-crop.jpg" alt="ULTRA-RACE Corner" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ULTRA-RACE Launch /Sprint-New-Crop.webp">
                                <img src="assets/thumbs/g/ribble-2025-ultra-race-launch-sprint-new-crop.jpg" alt="ULTRA-RACE Sprint" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>ALLGRIT & ULTRA-GRIT Launch 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Ribble completely relaunched its gravel range in 2025 with the ALLGRIT and ULTRA-GRIT. The campaign landed distinct positioning for both bikes - race performance for the ULTRA-GRIT, adventure versatility for the ALLGRIT - targeting two clearly defined rider profiles. Review uptake followed across the endemic press, with tests at <a href="https://www.cyclist.co.uk/reviews/ribble-ultra-grit-gravel-bike-review" target="_blank" rel="noopener" style="color:#2563eb;">Cyclist</a>, <a href="https://www.cyclingnews.com/bikes/gravel/ribble-ultra-grit-gravel-bike-review-ribble-has-really-delivered-with-its-latest-race-bike/" target="_blank" rel="noopener" style="color:#2563eb;">Cyclingnews</a> ("Ribble has really delivered with its latest race bike"), <a href="https://road.cc/content/review/ribble-ultra-grit-apex-xplr-axs-317151" target="_blank" rel="noopener" style="color:#2563eb;">road.cc</a> and <a href="https://www.bikeradar.com/features/tech/versus/pearson-on-and-on-race-vs-ribble-ultra-grit" target="_blank" rel="noopener" style="color:#2563eb;">BikeRadar</a>. Across the brand as a whole, not just the gravel range, Ribble's global coverage log runs to 379 pieces since January 2024 with a combined audience of 364M.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/All-Grit Range 40s 16-9.mp4">
                                <video src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/All-Grit Range 40s 16-9.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-allgrit-range.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ALL-GRIT Range Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0002_ADVENTURE-VERSATILITY.webp">
                                <img src="assets/thumbs/g/ribble-2025-allgrit-and-ultra-grit-launch-0002-adventure-versatility.jpg" alt="ALLGRIT Adventure" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2025 ALLGRIT and ULTRA-GRIT launch/0011_Composed_handling.webp">
                                <img src="assets/thumbs/g/ribble-2025-allgrit-and-ultra-grit-launch-0011-composed-handling.jpg" alt="ALLGRIT Handling" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>CGR Relaunch 2025</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The CGR is Ribble's do-it-all bike - designed to handle commutes, gravel, and road with equal composure. This launch film was a key asset in the 2025 relaunch, positioning it as the most versatile bike in the range.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2025 CGR Launch/Ribble CGR 1920x1080 No Logo.mp4">
                                <video src="assets/Ribble 2025 CGR Launch/Ribble CGR 1920x1080 No Logo.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-cgr-launch.jpg"></video>
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
                                <video src="assets/Ribble 2026 Ti Custom Colour Launch/Ribble Bike Paint V2 no intro logo.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-ti-paint.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">ASMR Paint Film</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8348.jpg">
                                <img src="assets/thumbs/g/ribble-2026-ti-custom-colour-launch-0q5a8348.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8233.jpg">
                                <img src="assets/thumbs/g/ribble-2026-ti-custom-colour-launch-0q5a8233.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8378-2.jpg">
                                <img src="assets/thumbs/g/ribble-2026-ti-custom-colour-launch-0q5a8378-2.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Ribble 2026 Ti Custom Colour Launch/0Q5A8082.jpg">
                                <img src="assets/thumbs/g/ribble-2026-ti-custom-colour-launch-0q5a8082.jpg" alt="Ti Custom Colour" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>The Bike That Gets Me - Campaign 2026</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">This campaign was designed to show prospects that the best bike is the right bike for them - not necessarily the most expensive or the fastest. All creative assets for this project were developed using AI.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Ribble 2026 - The Bike That Gets Me Campaign/TBTGM-Campaign_Homepage-Banner-Film-1080x1350_2026-03-02-160340_bngt.mp4">
                                <video src="assets/Ribble 2026 - The Bike That Gets Me Campaign/TBTGM-Campaign_Homepage-Banner-Film-1080x1350_2026-03-02-160340_bngt.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-tbtgm-campaign.jpg"></video>
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
            subtitle: "Fractional CMO · Jan 2025 – Present",
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
                    <h3>motif · AI-Powered Wealth Advisory · Jan 2025 – Present</h3>
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
                                <video src="assets/motif/motif - Superteam explainer.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-motif-superteam.jpg"></video>
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
            subtitle: "Head of Marketing & Comms · May – Oct 2024",
            type: "role",
            color: "#2563eb",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #2563eb">Cycling</div>
                    </div>
                    <h2>Head of Marketing & Communications</h2>
                    <h3>Classified Cycling · Component Manufacturer · May – Oct 2024</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://www.classified-cycling.cc/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">classified-cycling.cc →</a></p>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Brand & product positioning</strong> - led the research, validation, and integration of brand and product positions.</li>
                            <li><strong>160+ media placements</strong> - spearheaded global product launches, including the Vistar // Powershift drivetrain at Eurobike.</li>
                            <li><strong>Global events</strong> - managed Eurobike, Sea Otter, and Taichung Bike Week to strengthen partnerships and drive growth.</li>
                            <li><strong>Gravel factory team</strong> - the Classified Ridley Factory Team sat in my remit, with a pro sports manager running it into me. Piotr Havik finished 4th at Unbound Gravel and Annabel Fisher won the British National Gravel Championships, both in 2024.</li>
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
                                <video src="assets/Classified/Vistar Classified Render.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-classified-vistar.jpg"></video>
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
                                <video src="assets/Classified/Classified - Ineos - Giro d'Italia.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-classified-ineos.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">INEOS - Giro d'Italia</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/INEOS_2_1024x1024.webp">
                                <img src="assets/thumbs/g/classified-ineos-2-1024x1024.jpg" alt="INEOS Partnership" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Eurobike 2024</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">I led the organisation of our attendance at Eurobike in 2024. Our stand had the largest LED screen at the event, creating intrigue and interest with our unique layout and event experience.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike1.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike1.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/EUrobike 2.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike-2.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 3.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike-3.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 4.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike-4.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike 5.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike-5.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Classified/Eurobike6.jpeg">
                                <img src="assets/thumbs/g/classified-eurobike6.jpg" alt="Eurobike 2024" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>High Def Render Project</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Working with the world-class animation studio Propeller in Denmark, we created a suite of high-quality renders for various campaigns and award applications.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Drive Train Animation Render.mp4">
                                <video src="assets/Classified/Drive Train Animation Render.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-classified-drivetrain.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Drive Train Render</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Classified/Hub Animation Render.mp4">
                                <video src="assets/Classified/Hub Animation Render.mp4" muted preload="none" poster="assets/thumbs/g/thumbs-classified-hub.jpg"></video>
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
            subtitle: "CMO · Jan 2023 – Jun 2024",
            type: "role",
            color: "#d946ef",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #d946ef">Fitness Tech</div>
                    </div>
                    <h2>Chief Marketing and Communications Officer</h2>
                    <h3>Muuvr · Move-to-Earn Application · Jan 2023 – Jun 2024</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://www.muuvr.io/en/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">muuvr.io →</a></p>
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
            subtitle: "CMO / Head of Marketing · 2019 – Dec 2022",
            type: "role",
            color: "#dc2626",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #dc2626">Fitness Tech</div>
                    </div>
                    <h2>CMO → Head of Marketing (Subscription Services)</h2>
                    <h3>RGT Cycling (Co-Founded) → Acquired by Wahoo Fitness · 2019 – Dec 2022</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://uk.wahoofitness.com/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">wahoofitness.com →</a></p>
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
            subtitle: "Marketing & PR Manager · Apr 2018 – Aug 2019",
            type: "role",
            color: "#ea580c",
            industry: "Fitness Tech",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #ea580c">Fitness Tech</div>
                    </div>
                    <h2>Marketing & PR Manager</h2>
                    <h3>Wattbike · Indoor Training Bike · Apr 2018 – Aug 2019</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://wattbike.com/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">wattbike.com →</a></p>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>Media perception shift</strong> - shifted media perceptions of the Wattbike Atom, improving mid-funnel retention and driving conversions after addressing early negative reviews.</li>
                            <li><strong>Global events</strong> - delivered growth through events across the UK, Europe, and Africa.</li>
                            <li><strong>Ambassador marketing</strong> - built the framework for selecting and engaging ambassadors, negotiating contracts, and collaborating with high-profile talent.</li>
                            <li><strong>HUUB Wattbike Test Team</strong> - led the partnership with the amateur track squad that beat Team GB to gold at the London Track World Cup, with coverage on the BBC and ITV News and hundreds of mentions across endemic titles.</li>
                            <li><strong>International support</strong> - provided tailored marketing materials and training resources for international distributors and dealers.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        pelotan: {
            title: "Pelotan",
            subtitle: "Consultant Marketing Director · Feb 2018 – Dec 2020",
            type: "role",
            color: "#ca8a04",
            industry: "Cycling",
            content: `
                <div class="role-card">
                    <div class="role-header">
                        <div class="role-badge" style="background: #ca8a04">Cycling</div>
                    </div>
                    <h2>Consultant Marketing Director</h2>
                    <h3>Pelotan · Cycling-Specific Sun Protection · Feb 2018 – Dec 2020</h3>
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://pelotan.cc/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">pelotan.cc →</a></p>
                    <p class="role-context">Consultancy role providing marketing direction for this niche cycling sun protection brand.</p>
                    <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li><strong>British Cycling partnership</strong> - secured an exclusive three-year sun protection deal with British Cycling and other national governing bodies, lifting conversion rates and the brand's profile.</li>
                            <li><strong>Marketing strategy</strong> - owned strategy and planning across PR, partnerships and performance marketing.</li>
                            <li><strong>Website and tracking</strong> - oversaw the website build and set up analytics, the reporting dashboard and remarketing.</li>
                        </ul>
                    </div>
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
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://www.ribblecycles.co.uk/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">ribblecycles.co.uk →</a></p>
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
                    <p style="margin: -2px 0 8px; font-size: 12px;"><a href="https://planetx.co.uk/" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;">planetx.co.uk →</a></p>
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

        "privacy-project": {
            title: "Haven Protocol",
            subtitle: "Marketing & Communications Lead · Feb 2020 – Jul 2022",
            type: "role",
            color: "#64748b",
            industry: "Fintech / Web3",
            content: `
                <div class="role-card">
                    <p style="margin: 0 0 12px; font-size: 12px;"><a href="#" data-open="ai-exploration" style="color: var(--text-secondary); text-decoration: none;">← Projects</a></p>
                    <div class="role-header">
                        <div class="role-badge" style="background: #64748b">Fintech / Web3</div>
                    </div>
                    <h2>Marketing & Communications Lead</h2>
                    <h3>Haven Protocol · Privacy Stablecoin · Self-employed · Feb 2020 – Jul 2022</h3>
                    <p class="role-context">Haven Protocol is a privacy-focused crypto project, and a top-10 privacy stablecoin on CoinGecko with a market cap of $400M. I led its marketing and communications as a self-employed project, working remotely alongside my role at RGT Cycling.</p>
                    <div class="achievements">
                        <h4>What I Led</h4>
                        <ul>
                            <li><strong>Positioning</strong> - built the brand position around privacy, stability and trust, so the project stood apart in a crowded market.</li>
                            <li><strong>Community</strong> - grew an engaged community through ambassador programmes, digital events and direct engagement.</li>
                            <li><strong>Campaigns</strong> - planned and ran global campaigns for user acquisition and awareness.</li>
                            <li><strong>PR and editorial</strong> - managed media relations and editorial across the crypto press.</li>
                            <li><strong>Paid media</strong> - led paid media and inventory planning, with budgets managed for return.</li>
                            <li><strong>Compliance</strong> - kept every communication within the international regulatory frameworks that applied.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">$400M</span>
                            <span class="stat-label">Market Cap</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">Top 10</span>
                            <span class="stat-label">Privacy Stablecoin on CoinGecko</span>
                        </div>
                    </div>
                </div>
            `
        },

        "manual-focus": {
            title: "Manual Focus",
            subtitle: "My marketing consultancy · Founder · 2009 – Present",
            type: "manual-focus",
            content: `
                <div class="ai-work-card">
                    <div class="mf-hero">
                        <img class="mf-logo" src="assets/ManualFocus/logo-white.svg" alt="Manual Focus">
                        <p class="mf-eyebrow">Manual Focus · Sheffield</p>
                        <h2 class="mf-title">Senior marketing for endurance and sports brands <em>with AI doing the heavy lifting.</em></h2>
                        <p class="mf-lede">Manual Focus is my marketing consultancy. It leads a brand's marketing as a fractional CMO, advises the team already in place, or builds what is needed and hands it over. It also makes its own research tools.</p>
                        <a class="mf-cta" href="https://manual-focus.co.uk/" target="_blank" rel="noopener">manual-focus.co.uk →</a>
                        <svg class="mf-rings" viewBox="0 0 92 78" aria-hidden="true"><defs><linearGradient id="mfg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF2D78"/><stop offset=".5" stop-color="#C026D3"/><stop offset="1" stop-color="#00E5FF"/></linearGradient></defs><circle cx="54" cy="30" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/><circle cx="38" cy="48" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/></svg>
                    </div>
                    <div class="mf-products">
                        <a href="#" class="mf-product" data-open="light-meter">
                            <img src="assets/thumbs/g/mf-chart-shortlist.jpg" alt="Light Meter chart, who AI recommends" loading="lazy" decoding="async">
                            <div class="mf-product-body">
                                <span class="mf-eyebrow">Launched October 2026</span>
                                <h4>Light Meter</h4>
                                <p>Measures which brands AI recommends. Buyer questions go to six AI engines three times each, and every brand named and site cited is counted. BikeBiz covered the first study.</p>
                                <span class="mf-more">Open Light Meter →</span>
                            </div>
                        </a>
                        <a href="#" class="mf-product" data-open="rider-panel">
                            <img src="assets/thumbs/g/mf-rider-panel-graph.jpg" alt="Rider Panel knowledge graph" loading="lazy" decoding="async">
                            <div class="mf-product-body">
                                <span class="mf-eyebrow">Launches 10 November 2026</span>
                                <h4>Rider Panel</h4>
                                <p>Tests a product launch before a brand spends on it. The launch runs through a season in a simulated market of AI agents, then runs again with one thing changed.</p>
                                <span class="mf-more">Open the Rider Panel →</span>
                            </div>
                        </a>
                        <a href="https://manual-focus.co.uk/lens/" target="_blank" rel="noopener" class="mf-product">
                            <div class="mf-product-art"><b>47</b><span>playbooks</span><b>28</b><span>skills</span></div>
                            <div class="mf-product-body">
                                <span class="mf-eyebrow">Free and open source</span>
                                <h4>The Lens</h4>
                                <p>A library of AI marketing playbooks and skills for Claude, released under the MIT licence.</p>
                                <span class="mf-more">manual-focus.co.uk/lens →</span>
                            </div>
                        </a>
                    </div>
                    <div class="achievements" style="margin-top: 18px;">
                        <h4>How it works</h4>
                        <ul>
                            <li><strong>Clients</strong> - Ribble Cycles, where I am retained as Marketing Advisor three days a week, and Pyramid Plastics.</li>
                            <li><strong>Engagements</strong> - strategic advisor, fractional CMO, or a fixed-scope build that is handed over when it works.</li>
                            <li><strong>Where it started</strong> - I founded Manual Focus in 2009 to take digital DJs and producers into physical releases, which is where the name comes from. It ran campaigns, PR and A&amp;R for artists and labels including Jack Fell Down, Modifi Music and Scrap until 2018, then sat dormant until I began running my consultancy work through it in 2026.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        "light-meter": {
            title: "Light Meter",
            subtitle: "Manual Focus · AI visibility audit · Launched Oct 2026",
            type: "role",
            color: "#e11d48",
            industry: "AI / Research",
            content: `
                <div class="role-card">
                    <p style="margin: 0 0 12px; font-size: 12px;"><a href="#" data-open="manual-focus" style="color: var(--text-secondary); text-decoration: none;">← Manual Focus</a></p>
                    <div class="mf-hero">
                        <p class="mf-eyebrow">Manual Focus Light Meter · Launched October 2026</p>
                        <h2 class="mf-title">Light Meter shows which brands <em>AI recommends</em></h2>
                        <p class="mf-lede">AI is becoming the shop window. When a buyer asks ChatGPT or Gemini what to buy, the brands it names are the ones that get considered. Light Meter measures which brands AI recommends in a category, how often, and which websites the engines cite, so a brand knows which questions it is losing and whose coverage to chase.</p>
                        <div class="mf-chips"><span class="mf-chip hot">5,562 answers</span><span class="mf-chip">6 AI engines</span><span class="mf-chip">309 questions</span></div>
                        <a class="mf-cta" href="https://manual-focus.co.uk/light-meter/" target="_blank" rel="noopener">manual-focus.co.uk/light-meter →</a>
                        <svg class="mf-rings" viewBox="0 0 92 78" aria-hidden="true"><defs><linearGradient id="mfg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF2D78"/><stop offset=".5" stop-color="#C026D3"/><stop offset="1" stop-color="#00E5FF"/></linearGradient></defs><circle cx="54" cy="30" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/><circle cx="38" cy="48" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/></svg>
                    </div>
                    <div class="achievements">
                        <h4>How it works</h4>
                        <ul>
                            <li><strong>Buyer questions</strong> - 100 to 300 questions per category, tagged by buying moment from beginner and value through to performance and problems.</li>
                            <li><strong>Six engines, three runs</strong> - every question goes to six AI engines from a UK location, three times each, because the answers change from one run to the next.</li>
                            <li><strong>Shares with ranges</strong> - every brand named and every site cited is recorded, and each brand's share is reported with a 95% range.</li>
                            <li><strong>Output</strong> - a league table with each engine's view, the winner of each buying moment, the sites that decide it and the next steps.</li>
                        </ul>
                    </div>
                    <div class="stat-grid">
                        <div class="stat">
                            <span class="stat-value">83%</span>
                            <span class="stat-label">Trainer Answers Naming Wahoo</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">88%</span>
                            <span class="stat-label">App Answers Naming Zwift</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">20%</span>
                            <span class="stat-label">Same Brands In All Three Runs</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">50%+</span>
                            <span class="stat-label">Sources From Cycling Media</span>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>First study - UK indoor cycling, October 2026</h4>
                        <ul>
                            <li><strong>One clear leader</strong> - Wahoo was named in 83% of smart trainer answers and Zwift in 88% of training app answers.</li>
                            <li><strong>The engines disagree</strong> - Claude named Van Rysel in 43% of its trainer answers against 5% on Google AI Mode.</li>
                            <li><strong>The answers move</strong> - an engine named the same brands in all three runs only 20% of the time. ChatGPT managed it 13% of the time and Perplexity 48%.</li>
                            <li><strong>PR decides it</strong> - cycling media supplied over half the sources the engines cited, led by Cyclingnews.</li>
                            <li><strong>Coverage</strong> - <a href="https://manual-focus.co.uk/reports/ai-shortlist-indoor-cycling/" target="_blank" rel="noopener" style="color:#2563eb;">the full report</a> is free to read and BikeBiz covered the launch.</li>
                        </ul>
                    </div>
                    <div class="media-gallery">
                        <h4>From the report</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The press charts from the indoor cycling study. Who the engines recommend, how far they disagree, and where they get their answers.</p>
                        <div class="gallery-grid contain">
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/chart-shortlist.jpg">
                                <img src="assets/thumbs/g/mf-chart-shortlist.jpg" alt="Who AI recommends, by category" loading="lazy" decoding="async">
                                <div class="gallery-label">Who AI recommends</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/chart-engines.jpg">
                                <img src="assets/thumbs/g/mf-chart-engines.jpg" alt="How the six engines differ" loading="lazy" decoding="async">
                                <div class="gallery-label">Engine by engine</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/chart-sources.jpg">
                                <img src="assets/thumbs/g/mf-chart-sources.jpg" alt="The sites the engines cite" loading="lazy" decoding="async">
                                <div class="gallery-label">Sources cited</div>
                            </div>
                        </div>
                    </div>
                    <div class="media-gallery">
                        <h4>Launch carousel</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The six-slide LinkedIn carousel that launched the study.</p>
                        <div class="gallery-grid portrait">
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-01.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-01.jpg" alt="Light Meter launch carousel, slide 1" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 1</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-02.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-02.jpg" alt="Light Meter launch carousel, slide 2" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 2</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-03.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-03.jpg" alt="Light Meter launch carousel, slide 3" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 3</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-04.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-04.jpg" alt="Light Meter launch carousel, slide 4" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 4</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-05.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-05.jpg" alt="Light Meter launch carousel, slide 5" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 5</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/launch-slide-06.jpg">
                                <img src="assets/thumbs/g/mf-launch-slide-06.jpg" alt="Light Meter launch carousel, slide 6" loading="lazy" decoding="async">
                                <div class="gallery-label">Slide 6</div>
                            </div>
                        </div>
                    </div>
                    <div class="media-gallery">
                        <h4>Coverage</h4>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/bikebiz-coverage.jpg">
                                <img src="assets/thumbs/g/mf-bikebiz-coverage.jpg" alt="BikeBiz coverage of the first Light Meter study" loading="lazy" decoding="async">
                                <div class="gallery-label">BikeBiz</div>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Method</strong> - designed the question sets, the repeat-run approach and the reporting of ranges.</li>
                            <li><strong>Build</strong> - built the collection and analysis pipeline.</li>
                            <li><strong>Launch</strong> - wrote the report, ran the launch and secured the trade coverage.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        "rider-panel": {
            title: "Rider Panel",
            subtitle: "Manual Focus · Launch simulation · Launches 10 Nov 2026",
            type: "role",
            color: "#0d9488",
            industry: "AI / Research",
            content: `
                <div class="role-card">
                    <p style="margin: 0 0 12px; font-size: 12px;"><a href="#" data-open="manual-focus" style="color: var(--text-secondary); text-decoration: none;">← Manual Focus</a></p>
                    <div class="mf-hero">
                        <p class="mf-eyebrow">Manual Focus Rider Panel · Launches 10 November 2026</p>
                        <h2 class="mf-title">Try a launch plan <em>before you spend on it</em></h2>
                        <p class="mf-lede">Asking real customers is slow and expensive, so most brands only do it for their biggest launches and decide everything else on instinct. The Rider Panel tests a launch plan in a simulated market of AI agents first. Light Meter shows what AI tells a brand's buyers, and the Rider Panel shows what those buyers might then do.</p>
                        <div class="mf-chips"><span class="mf-chip hot">500 AI agents</span><span class="mf-chip">A season, month by month</span><span class="mf-chip">Change one thing</span></div>
                        <svg class="mf-rings" viewBox="0 0 92 78" aria-hidden="true"><defs><linearGradient id="mfg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF2D78"/><stop offset=".5" stop-color="#C026D3"/><stop offset="1" stop-color="#00E5FF"/></linearGradient></defs><circle cx="54" cy="30" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/><circle cx="38" cy="48" r="27" fill="none" stroke="url(#mfg)" stroke-width="5"/></svg>
                    </div>
                    <div class="achievements">
                        <h4>How it works</h4>
                        <ul>
                            <li><strong>Agents with lives</strong> - every agent has a life story, from who they live with to the kit they already own, the apps they train on and the shop they usually use.</li>
                            <li><strong>A season, month by month</strong> - the agents live through a simulated season and decide what to buy, when and why.</li>
                            <li><strong>Change one thing</strong> - the same season runs again with the price or the channel changed, so a brand can compare plans and read why each agent bought or walked away.</li>
                            <li><strong>Real market</strong> - rivals are real products at UK retailer prices checked on the day.</li>
                            <li><strong>Speed</strong> - a study takes days, and the best plans then go to real customers.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>First study</h4>
                        <ul>
                            <li><strong>The test</strong> - a made-up folding smart trainer, launched to 500 simulated UK cyclists shopping for an indoor trainer over the 2026 to 2027 season, under four different launch plans.</li>
                            <li><strong>Results</strong> - published with the launch on 10 November 2026.</li>
                        </ul>
                    </div>
                    <div class="media-gallery">
                        <h4>The panel</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The 500 agents in the first study, connected by what they have in common.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/ManualFocus/rider-panel-graph.jpg">
                                <img src="assets/thumbs/g/mf-rider-panel-graph.jpg" alt="Rider Panel knowledge graph" loading="lazy" decoding="async">
                                <div class="gallery-label">Knowledge graph</div>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Method</strong> - developed the method across ten rounds of testing, with controls, reruns and checks against real UK search data built in.</li>
                            <li><strong>Build</strong> - built on Claude and run from Claude Code, from sourced UK rider figures.</li>
                            <li><strong>Showing the working</strong> - every check is published with the report, and forecasts are registered in advance to be scored against real sales.</li>
                            <li><strong>Launch</strong> - wrote the report, the press release and the launch plan.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        "ai-exploration": {
            title: "Projects",
            subtitle: "Side projects alongside the day jobs",
            type: "ai-exploration",
            content: `
                <div class="ai-work-card">
                    <h2>Projects</h2>
                    <p class="ai-intro">Side projects that run alongside the day jobs and supplement them. Two are products I built and launched with AI development agents, and one is an earlier fintech engagement.</p>
                    <div class="pj-grid">
                        <div class="pj-tile pj-feature">
                            <a href="#" data-open="wattplan" class="pj-media"><img src="assets/thumbs/g/wattplan-hero-film.jpg" alt="WattPlan launch film, a plan that adapts to the way you ride" loading="lazy" decoding="async"></a>
                            <div class="pj-body">
                                <span class="pj-eyebrow">Live on the App Store and Google Play</span>
                                <h4>WattPlan</h4>
                                <p>A cycling training app built to make you stronger on the bike. I took it from first commit to both stores in seven months and built the brand around it.</p>
                                <ul class="pj-points">
                                    <li>Store screenshots</li>
                                    <li>Train. Adapt. campaign films</li>
                                    <li>Messaging house</li>
                                    <li>Brand book</li>
                                </ul>
                                <div class="pj-links">
                                    <a href="#" data-open="wattplan" class="pj-link">Open WattPlan →</a>
                                    <a href="wattplan-brand/" target="_blank" class="pj-link">Brand book →</a>
                                    <a href="https://wattplan.cc" target="_blank" rel="noopener" class="pj-link">wattplan.cc →</a>
                                </div>
                            </div>
                        </div>
                        <div class="pj-tile">
                            <a href="#" data-open="aster" class="pj-media"><img src="assets/thumbs/g/aster-store-trio.jpg" alt="Aster store screenshots" loading="lazy" decoding="async"></a>
                            <div class="pj-body">
                                <span class="pj-eyebrow">Live on the App Store and Google Play</span>
                                <h4>Aster</h4>
                                <p>Any ride or run, live on the map. An athlete goes live from their phone, shares one link, and anyone can watch. Built and run by a lean team with AI agents doing much of the work.</p>
                                <ul class="pj-points">
                                    <li>Store screenshots</li>
                                    <li>Messaging</li>
                                    <li>Brand book</li>
                                </ul>
                                <div class="pj-links">
                                    <a href="#" data-open="aster" class="pj-link">Open Aster →</a>
                                    <a href="aster-brand/" target="_blank" class="pj-link">Brand book →</a>
                                    <a href="https://aster-track.com" target="_blank" rel="noopener" class="pj-link">aster-track.com →</a>
                                </div>
                            </div>
                        </div>
                        <div class="pj-tile">
                            <a href="#" data-open="privacy-project" class="pj-media pj-art"><b>$400M</b><span>market cap</span></a>
                            <div class="pj-body">
                                <span class="pj-eyebrow">Feb 2020 to Jul 2022</span>
                                <h4>Haven Protocol</h4>
                                <p>Marketing and communications lead for Haven Protocol, a privacy-focused crypto project and a top-10 privacy stablecoin on CoinGecko.</p>
                                <div class="pj-links"><a href="#" data-open="privacy-project" class="pj-link">Open the project →</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        aster: {
            title: "Aster",
            subtitle: "Founder · Live on the App Store and Google Play · 2025 – Present",
            type: "role",
            color: "#ef4444",
            industry: "AI / Endurance Sports",
            content: `
                <div class="role-card">
                    <p style="margin: 0 0 12px; font-size: 12px;"><a href="#" data-open="ai-exploration" style="color: var(--text-secondary); text-decoration: none;">← Projects</a></p>
                    <div class="as-hero">
                        <img class="as-mark" src="assets/Aster/brand/aster-mark-dark.svg" alt="Aster">
                        <span class="as-pill">Live on the App Store and Google Play</span>
                        <h2 class="as-title">Go<i>.</i><br>Live<i>.</i></h2>
                        <p class="as-desc">Any ride or run, live on the map.</p>
                        <p class="as-lede">Aster makes any ride or run watchable live. An athlete goes live from the phone in their pocket and sends one link, and the people who care can watch the whole way. No tracker to carry, nothing to hire.</p>
                        <div class="as-links">
                            <a class="as-btn" href="https://apps.apple.com/gb/app/aster-live-track/id6764533612" target="_blank" rel="noopener">App Store</a>
                            <a class="as-btn" href="https://play.google.com/store/apps/details?id=app.astertrack" target="_blank" rel="noopener">Google Play</a>
                            <a class="as-link" href="https://aster-track.com" target="_blank" rel="noopener">aster-track.com →</a>
                        </div>
                    </div>
                    <p class="role-context">I founded Aster to test how far AI can take a lean team. Orchestrated AI agents handle much of the business analysis, product, engineering, testing, marketing and content, and I lead the brand and the go-to-market. The app has been on the App Store since August 2026 and is on Google Play, with the site in English, Spanish, Italian and German.</p>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Founder</strong> - concept, brand, strategy and go-to-market.</li>
                            <li><strong>Agent orchestration</strong> - designed the AI agent workflows (Hermes, Paperclip and supporting models) that run analysis, product, engineering, QA, marketing and content.</li>
                            <li><strong>Brand</strong> - the Go. Live. brand line, the messaging house with its versions for clubs, teams, event organisers and brand partners, the visual identity and the tone of voice.</li>
                            <li><strong>Creative direction</strong> - set the brief for photography and film, a nostalgic, filtered look with heavy motion blur, and directed the launch films for organisers, clubs and athletes.</li>
                            <li><strong>Go-to-market</strong> - positioning, channel strategy, store listings and the launch plan across cycling and running.</li>
                            <li><strong>Product</strong> - the core proposition and four non-negotiable reliability rules (offline start and finish, never auto-logout, tracking persists, never lose a ping).</li>
                            <li><strong>Shipping</strong> - native iOS and Android via Capacitor, with background location and live maps.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Why It Matters</h4>
                        <p>Aster is my working answer to how much of a business a lean team can run when AI agents take on the stack, and a live example of a brand operating as a software platform.</p>
                    </div>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>

                    <div class="media-gallery">
                        <h4>The app today</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The nine screenshots on the App Store listing.</p>
                        <div class="gallery-grid phone">
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-01.jpg">
                                <img src="assets/thumbs/g/aster-store-01.jpg" alt="Aster store screenshot, Go Live" loading="lazy" decoding="async">
                                <div class="gallery-label">Go Live</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-02.jpg">
                                <img src="assets/thumbs/g/aster-store-02.jpg" alt="Aster store screenshot, Everyone Live" loading="lazy" decoding="async">
                                <div class="gallery-label">Everyone Live</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-03.jpg">
                                <img src="assets/thumbs/g/aster-store-03.jpg" alt="Aster store screenshot, Where You Stand" loading="lazy" decoding="async">
                                <div class="gallery-label">Where You Stand</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-04.jpg">
                                <img src="assets/thumbs/g/aster-store-04.jpg" alt="Aster store screenshot, One Link" loading="lazy" decoding="async">
                                <div class="gallery-label">One Link</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-05.jpg">
                                <img src="assets/thumbs/g/aster-store-05.jpg" alt="Aster store screenshot, Clubs" loading="lazy" decoding="async">
                                <div class="gallery-label">Clubs</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-06.jpg">
                                <img src="assets/thumbs/g/aster-store-06.jpg" alt="Aster store screenshot, Milestone" loading="lazy" decoding="async">
                                <div class="gallery-label">Milestone</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-07.jpg">
                                <img src="assets/thumbs/g/aster-store-07.jpg" alt="Aster store screenshot, Share It All" loading="lazy" decoding="async">
                                <div class="gallery-label">Share It All</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-08.jpg">
                                <img src="assets/thumbs/g/aster-store-08.jpg" alt="Aster store screenshot, The Story" loading="lazy" decoding="async">
                                <div class="gallery-label">The Story</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/store-09.jpg">
                                <img src="assets/thumbs/g/aster-store-09.jpg" alt="Aster store screenshot, Battery" loading="lazy" decoding="async">
                                <div class="gallery-label">Battery</div>
                            </div>
                        </div>
                    </div>
                    <div class="media-gallery">
                        <h4>Watching on the web</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Anyone with the link can watch in a browser, with no app and no sign-up.</p>
                        <div class="gallery-grid contain">
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/2026/live-map-desktop.jpg">
                                <img src="assets/thumbs/g/aster-live-map-desktop.jpg" alt="Aster live map on desktop" loading="lazy" decoding="async">
                                <div class="gallery-label">Live map</div>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>Creative direction</h4>
                        <p style="font-size: 12px; line-height: 1.6; color: var(--text-secondary); margin: 0 0 4px;">I set the brief for Aster's photography and film. Aster lets people watch someone they care about mid-ride, so the pictures have to feel like being out there with them. The look is nostalgic and filtered with heavy motion blur, and every frame should feel like the middle of a race.</p>
                        <ul>
                            <li><strong>Photography</strong> - riders mid-effort, with the background and the wheels panned into blur and the rider held sharp. Shallow depth of field, crops tight enough to lose half the rider, and saturated kit against dust, mud and wet tarmac, in late gold, dusk or forest shade.</li>
                            <li><strong>Casting</strong> - people who read as riders, in mixed kit, with a mix of gender, body type, skin tone and age across the set.</li>
                            <li><strong>Film</strong> - the photograph stays a photograph and the product arrives as a layer on top. Each film opens on a few seconds of moving photography, then draws the route on a dark map and brings the app in. One headline style runs throughout, in capitals at one size with the last line in lime.</li>
                            <li><strong>Proof</strong> - every claim in a film is checked against the product's code before it ships. The demo race keeps its "Live demo" label, sponsor marks are abstract, and anyone shown live carries the line "Subject to network coverage."</li>
                            <li><strong>Formats</strong> - a brand launch film and one each for organisers, clubs and athletes, with feature cuts of 20 to 32 seconds. Each is built in Remotion and rendered in 16:9, 4:5, 1:1 and 9:16, and the vertical cut is composed for 9:16 from source so nothing is cropped down from a finished film.</li>
                            <li><strong>Production</strong> - the cycling library is art-directed and generated in Midjourney against a mood board, and every output is reviewed before it is saved so that no real brand name, third-party race number or identifiable person gets through.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>What we don't want</h4>
                        <ul>
                            <li><strong>Catalogue pictures</strong> - studio backdrops, static portraits, posed smiles, flat midday light, stock-photo cleanness and clip-art cyclist silhouettes.</li>
                            <li><strong>A blurred rider</strong> - the blur belongs to the background and the wheels.</li>
                            <li><strong>Team-issue casting</strong> - everyone in matching kit, or a set that is all men or all pros.</li>
                            <li><strong>Real brands</strong> - logos, sponsor text, named events and teams, third-party race numbers and identifiable people.</li>
                            <li><strong>Lost grit</strong> - any colour treatment that cleans a picture up.</li>
                            <li><strong>Busy motion</strong> - cuts inside a shot, wipes, bouncing effects, parallax and animated illustration.</li>
                            <li><strong>Half a product</strong> - a cropped card of part of a screen, or big empty areas of dark frame.</li>
                            <li><strong>Overclaiming</strong> - a simulated race passed off as a real one, a real brand shown as a sponsor, or a line the product cannot back.</li>
                        </ul>
                    </div>
                    <div class="media-gallery">
                        <h4>Photography</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Twelve frames from the cycling library in use on the Aster site.</p>
                        <div class="gallery-grid portrait">
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/three-abreast.jpg">
                                <img src="assets/thumbs/g/aster-cr-three-abreast.jpg" alt="Three riders abreast at dusk" loading="lazy" decoding="async">
                                <div class="gallery-label">Three abreast</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/dune-sprint.jpg">
                                <img src="assets/thumbs/g/aster-cr-dune-sprint.jpg" alt="Rider sprinting on sand with panning blur" loading="lazy" decoding="async">
                                <div class="gallery-label">Panning blur</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/road-rain-night.jpg">
                                <img src="assets/thumbs/g/aster-cr-road-rain-night.jpg" alt="Rider on a wet road with a light leak" loading="lazy" decoding="async">
                                <div class="gallery-label">Light leak</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/face-dusk.jpg">
                                <img src="assets/thumbs/g/aster-cr-face-dusk.jpg" alt="Close crop of a rider at dusk" loading="lazy" decoding="async">
                                <div class="gallery-label">Close crop</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/bunch-gravel-dusk.jpg">
                                <img src="assets/thumbs/g/aster-cr-bunch-gravel-dusk.jpg" alt="A bunch on gravel at dusk" loading="lazy" decoding="async">
                                <div class="gallery-label">Gravel bunch</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/spray-head-on.jpg">
                                <img src="assets/thumbs/g/aster-cr-spray-head-on.jpg" alt="Rider head on through spray" loading="lazy" decoding="async">
                                <div class="gallery-label">Spray</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/reach-gold-wheel.jpg">
                                <img src="assets/thumbs/g/aster-cr-reach-gold-wheel.jpg" alt="Rider reaching forward beside a gold wheel" loading="lazy" decoding="async">
                                <div class="gallery-label">Wheel and rider</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/road-autumn-attack.jpg">
                                <img src="assets/thumbs/g/aster-cr-road-autumn-attack.jpg" alt="Rider attacking on an autumn road" loading="lazy" decoding="async">
                                <div class="gallery-label">Autumn road</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/bunch-wet-dusk.jpg">
                                <img src="assets/thumbs/g/aster-cr-bunch-wet-dusk.jpg" alt="A bunch from behind at dusk" loading="lazy" decoding="async">
                                <div class="gallery-label">From behind</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/climb-hazy.jpg">
                                <img src="assets/thumbs/g/aster-cr-climb-hazy.jpg" alt="Riders climbing in haze" loading="lazy" decoding="async">
                                <div class="gallery-label">Hazy climb</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/bunch-corner.jpg">
                                <img src="assets/thumbs/g/aster-cr-bunch-corner.jpg" alt="A bunch through a corner with the edges of the frame blurred" loading="lazy" decoding="async">
                                <div class="gallery-label">Through the corner</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Aster/creative/woods-number.jpg">
                                <img src="assets/thumbs/g/aster-cr-woods-number.jpg" alt="Rider with a plain race number in woodland light" loading="lazy" decoding="async">
                                <div class="gallery-label">Woodland light</div>
                            </div>
                        </div>
                    </div>
                    <div class="media-gallery">
                        <h4>Launch films</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The brand film and the three audience films, each with voice-over, followed by three short cuts for social.</p>
                        <div class="gallery-grid" style="grid-template-columns: repeat(2, 1fr);">
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/launch-brand.mp4">
                                <video src="assets/Aster/films/launch-brand.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-launch-brand.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Brand launch film, 1:38</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/launch-organisers.mp4">
                                <video src="assets/Aster/films/launch-organisers.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-launch-organisers.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Organisers, 1:01</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/launch-clubs.mp4">
                                <video src="assets/Aster/films/launch-clubs.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-launch-clubs.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Clubs, 1:17</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/launch-athletes.mp4">
                                <video src="assets/Aster/films/launch-athletes.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-launch-athletes.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Athletes, 1:07</div>
                            </div>
                        </div>
                        <div class="gallery-grid portrait" style="margin-top: 10px;">
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/justride-story-4x5.mp4">
                                <video src="assets/Aster/films/justride-story-4x5.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-justride-story-4x5.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Social cut, Just Ride</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/club-story-4x5.mp4">
                                <video src="assets/Aster/films/club-story-4x5.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-club-story-4x5.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Social cut, meet-up</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Aster/films/event-story-4x5.mp4">
                                <video src="assets/Aster/films/event-story-4x5.mp4" muted preload="none" poster="assets/thumbs/g/aster-film-event-story-4x5.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Social cut, chain gang</div>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>The message</h4>
                        <ul>
                            <li><strong>Go. Live.</strong> - the brand line, with the descriptor "Any ride or run, live on the map."</li>
                            <li><strong>Proposition</strong> - Aster makes any ride or run watchable live.</li>
                            <li><strong>Everyone Live</strong> - enter an event and the whole field goes live. No tracker to carry, nothing to hire.</li>
                            <li><strong>Clubs made easy</strong> - build the ride in minutes and one link gets the whole club in, live on one map.</li>
                            <li><strong>Share it all</strong> - send one link and your people are with you the whole way.</li>
                            <li><strong>One house, several rooms</strong> - the same structure is cut for clubs, teams, event organisers and brand partners, and for cycling and running.</li>
                        </ul>
                    </div>
                    <a href="aster-brand/" target="_blank" class="ai-link" style="display:inline-block;margin-top:16px;color:#6366f1;font-weight:600;">Open the Aster brand book →</a>
                </div>
            `
        },

        wattplan: {
            title: "WattPlan",
            subtitle: "Founder / AI Side Project · Jan 2026 – Present",
            type: "role",
            color: "#6366f1",
            industry: "AI / Endurance Sports",
            content: `
                <div class="role-card">
                    <p style="margin: 0 0 12px; font-size: 12px;"><a href="#" data-open="ai-exploration" style="color: var(--text-secondary); text-decoration: none;">← Projects</a></p>
                    <div class="role-header">
                        <div class="role-badge" style="background: #6366f1">AI Side Project</div>
                    </div>
                    <h2>WattPlan</h2>
                    <h3>Cycling Training App · iOS and Android · Jan 2026 – Present</h3>
                    <p class="role-context">A cycling training app built to make you stronger on the bike. WattPlan builds a rider's training around their goals and the time they have, and adjusts it as things change. I built it with AI development agents to test how far a lean team can go, and it is live on the App Store and Google Play.</p>
                    <div class="achievements">
                        <h4>My Role</h4>
                        <ul>
                            <li><strong>Founder</strong> - took a cycling training app from first commit to live on the App Store and Google Play in seven months. It builds a rider's plan around their goals and hours, then adapts it using the rides they actually complete.</li>
                            <li><strong>Product</strong> - defined the adaptive engine, so plans repair themselves when a workout is missed or a ride lands harder than prescribed.</li>
                            <li><strong>Development</strong> - directed the whole build with AI development agents, shipping 80 cloud services, integrations with Garmin, Strava, Wahoo and Zwift, a Bluetooth workout player and an AI coach with long-term memory, behind 109 automated test suites.</li>
                            <li><strong>Brand</strong> - wrote the messaging house, built the logo family and tone of voice, and set the vocabulary rules that keep product and marketing consistent.</li>
                            <li><strong>Creative direction</strong> - set the photography and film direction, a nostalgic, filtered look with motion blur that runs through the site, the films and the launch campaign.</li>
                            <li><strong>Marketing</strong> - produced 45 long-form articles alongside the store listings, the site and the launch campaigns for both platforms.</li>
                            <li><strong>Subscription</strong> - built the free and Premium tiers through RevenueCat.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>Brand to Platform Evolution</h4>
                        <p>Exploring how AI enables brands to transition from brand to platform. This experiment investigates how app production can create a competitive moat and build sustainable audiences.</p>
                    </div>
                    <a href="https://wattplan.cc" target="_blank" class="ai-link" style="display:inline-block;margin-top:16px;color:#6366f1;font-weight:600;">wattplan.cc</a>

                    <div class="section-divider" style="margin: 24px 0 16px; border-top: 1px solid var(--border-light);"></div>

                    <div class="media-gallery">
                        <h4>The app today</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The screenshots on the App Store and Google Play for version 1.0.49.</p>
                        <div class="gallery-grid phone">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-01-today.jpg">
                                <img src="assets/thumbs/g/wattplan-store-01-today.jpg" alt="WattPlan Today screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Today</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-02-plan.jpg">
                                <img src="assets/thumbs/g/wattplan-store-02-plan.jpg" alt="WattPlan Plan screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Plan</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-03-coach.jpg">
                                <img src="assets/thumbs/g/wattplan-store-03-coach.jpg" alt="WattPlan Coach screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Coach</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-04-voice-coach.jpg">
                                <img src="assets/thumbs/g/wattplan-store-04-voice-coach.jpg" alt="WattPlan Voice Coach screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Voice Coach</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-05-rides-counted.jpg">
                                <img src="assets/thumbs/g/wattplan-store-05-rides-counted.jpg" alt="WattPlan Rides Counted screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Rides Counted</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-06-adjusted-plan.jpg">
                                <img src="assets/thumbs/g/wattplan-store-06-adjusted-plan.jpg" alt="WattPlan Adjusted Plan screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Adjusted Plan</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-07-fitness-explorer.jpg">
                                <img src="assets/thumbs/g/wattplan-store-07-fitness-explorer.jpg" alt="WattPlan Fitness Explorer screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Fitness Explorer</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-08-workout-player.jpg">
                                <img src="assets/thumbs/g/wattplan-store-08-workout-player.jpg" alt="WattPlan Workout Player screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Workout Player</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/2026/store-09-strength.jpg">
                                <img src="assets/thumbs/g/wattplan-store-09-strength.jpg" alt="WattPlan Strength screen" loading="lazy" decoding="async">
                                <div class="gallery-label">Strength</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>Train. Adapt. campaign, October 2026 to January 2027</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">The launch campaign for both stores. 57 posts across Instagram and LinkedIn over twelve weeks, built around one 82-second hero film that is cut down into Reels and supported by podcast clips, carousels and a logo reveal.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="video" data-src="assets/Wattplan/campaign/hero-film-one-story.mp4">
                                <video src="assets/Wattplan/campaign/hero-film-one-story.mp4" muted preload="none" poster="assets/thumbs/g/wattplan-hero-film.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Hero film, One Story</div>
                            </div>
                            <div class="gallery-item" data-type="video" data-src="assets/Wattplan/campaign/logo-reveal.mp4">
                                <video src="assets/Wattplan/campaign/logo-reveal.mp4" muted preload="none" poster="assets/thumbs/g/wattplan-logo-reveal.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">Logo reveal</div>
                            </div>
                        </div>
                        <div class="gallery-grid portrait" style="margin-top: 10px;">
                            <div class="gallery-item" data-type="video" data-src="assets/Wattplan/campaign/app-store-preview.mp4">
                                <video src="assets/Wattplan/campaign/app-store-preview.mp4" muted preload="none" poster="assets/thumbs/g/wattplan-app-store-preview.jpg"></video>
                                <div class="gallery-play"></div>
                                <div class="gallery-label">App Store preview</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/campaign/cover-chain-gang.jpg">
                                <img src="assets/thumbs/g/wattplan-cover-chain-gang.jpg" alt="Reel cover, chain gang" loading="lazy" decoding="async">
                                <div class="gallery-label">Reel cover</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/campaign/cover-wedding-rest-day.jpg">
                                <img src="assets/thumbs/g/wattplan-cover-wedding-rest-day.jpg" alt="Reel cover, wedding rest day" loading="lazy" decoding="async">
                                <div class="gallery-label">Reel cover</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/campaign/cover-train-adapt.jpg">
                                <img src="assets/thumbs/g/wattplan-cover-train-adapt.jpg" alt="Train. Adapt. end frame" loading="lazy" decoding="async">
                                <div class="gallery-label">End frame</div>
                            </div>
                        </div>
                    </div>

                    <div class="achievements">
                        <h4>Creative direction</h4>
                        <p style="font-size: 12px; line-height: 1.6; color: var(--text-secondary); margin: 0 0 4px;">I set the look for WattPlan's photography and film, and it starts from where the riding actually happens. A wet lane at dusk, a chain gang at full speed, a turbo in a dark garage. The look is nostalgic and filtered, with motion blur carrying the speed, so a frame feels like a ride you remember.</p>
                        <ul>
                            <li><strong>Photography</strong> - the road and the wheels streak while the rider stays sharp. Crops are tight on hands, shoulders and faces, the light is low, and the colour sits in dusk blue and purple so the volt of the app is the brightest thing in frame.</li>
                            <li><strong>Indoor</strong> - the turbo set is shot dark, with one bulb or one window, a fan and a bare wall. It shows a rider working alone, which is where a lot of structured training gets done.</li>
                            <li><strong>Film</strong> - the photograph stays a photograph and the app arrives as a layer on top, one beat at a time. Each picture is split into rider and background, so the rider eases forward while the background falls away. Headlines run on two lines in white and volt, and the WP mark holds the corner throughout.</li>
                            <li><strong>Real screens</strong> - every screen, number and Coach reply in a film is the app's own. The Coach lines come from running the real Coach, the week comes from the real plan engine, and the render stops if a number disagrees with what the app would show.</li>
                            <li><strong>Formats</strong> - every film renders in 16:9, 4:5, 1:1 and 9:16 from one script, and each frame is checked against Instagram's own interface so text stays clear of the buttons and the caption.</li>
                            <li><strong>Production</strong> - the library of 36 images is art-directed and generated in Midjourney against one mood board, and every output is checked before it is kept.</li>
                        </ul>
                    </div>
                    <div class="achievements">
                        <h4>What we don't want</h4>
                        <ul>
                            <li><strong>Catalogue pictures</strong> - studio backdrops, static portraits, posed smiles and stock-photo cleanness.</li>
                            <li><strong>Flat light</strong> - even midday sun outdoors, or a brightly lit room indoors.</li>
                            <li><strong>A blurred rider</strong> - the blur belongs to the road and the wheels.</li>
                            <li><strong>Team-issue casting</strong> - everyone in matching kit, or a set that is all men or all pros.</li>
                            <li><strong>Real brands</strong> - logos, sponsor text, named events, third-party race numbers and identifiable people.</li>
                            <li><strong>Mocked-up product</strong> - invented screens, numbers the app would not show, or a Coach line the real Coach would not say.</li>
                            <li><strong>Promised results</strong> - watts, times, placings or percentages on screen.</li>
                        </ul>
                    </div>
                    <div class="media-gallery">
                        <h4>Photography</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Ten frames from the library. The indoor set first, then the road and gravel set.</p>
                        <div class="gallery-grid" style="grid-template-columns: repeat(2, 1fr);">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/29-indoor-male-bulb-dark.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-29-indoor-male-bulb-dark.jpg" alt="Rider on a turbo trainer lit by one bulb" loading="lazy" decoding="async">
                                <div class="gallery-label">One bulb</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/30-indoor-male-shadow-wall.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-30-indoor-male-shadow-wall.jpg" alt="Rider on a turbo trainer with a hard shadow on the wall" loading="lazy" decoding="async">
                                <div class="gallery-label">Shadow on the wall</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/31-indoor-male-window-side.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-31-indoor-male-window-side.jpg" alt="Rider on a turbo trainer beside a window" loading="lazy" decoding="async">
                                <div class="gallery-label">Window light</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/33-indoor-female-shutter-front.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-33-indoor-female-shutter-front.jpg" alt="Rider on a turbo trainer in front of a shutter door" loading="lazy" decoding="async">
                                <div class="gallery-label">Shutter door</div>
                            </div>
                        </div>
                        <div class="gallery-grid portrait" style="margin-top: 10px;">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/04-two-drafting.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-04-two-drafting.jpg" alt="Two riders drafting at dusk with panning blur" loading="lazy" decoding="async">
                                <div class="gallery-label">Two up at dusk</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/07-climbing-rear.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-07-climbing-rear.jpg" alt="Rider climbing out of the saddle in dust" loading="lazy" decoding="async">
                                <div class="gallery-label">Out of the saddle</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/20-road-female-wet-spray.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-20-road-female-wet-spray.jpg" alt="Rider in road spray" loading="lazy" decoding="async">
                                <div class="gallery-label">Spray</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/14-peloton-twilight-climb.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-14-peloton-twilight-climb.jpg" alt="A bunch climbing at twilight" loading="lazy" decoding="async">
                                <div class="gallery-label">Twilight climb</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/08-two-finish.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-08-two-finish.jpg" alt="Two riders close to the lens" loading="lazy" decoding="async">
                                <div class="gallery-label">Close to the lens</div>
                            </div>
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/03-detail-hands-bars.jpg">
                                <img src="assets/thumbs/g/wattplan-cr-03-detail-hands-bars.jpg" alt="Hands on the bars" loading="lazy" decoding="async">
                                <div class="gallery-label">Hands on the bars</div>
                            </div>
                        </div>
                    </div>
                    <div class="media-gallery">
                        <h4>Film</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Four frames from the hero film. Each one pairs a ride with the screen that responds to it.</p>
                        <div class="gallery-grid contain" style="grid-template-columns: 1fr;">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/creative/film-frames.jpg" style="aspect-ratio: 16 / 9;">
                                <img src="assets/thumbs/g/wattplan-cr-film-frames.jpg" alt="Four frames from the WattPlan hero film, with app screens over ride photography" loading="lazy" decoding="async">
                                <div class="gallery-label">Hero film frames</div>
                            </div>
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h4>The messaging house</h4>
                        <p class="gallery-description" style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 10px;">Every store listing, page, onboarding screen and email traces back to this one document, and every claim in it traces to shipped code. A line that cannot be traced to a pillar does not ship. <a href="https://manual-focus.co.uk/blog/wattplan-messaging-hierarchy/" target="_blank" rel="noopener" style="color:#2563eb;">How it was built</a> is written up on the Manual Focus blog.</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" data-type="image" data-src="assets/Wattplan/brand/messaging-house.jpg">
                                <img src="assets/thumbs/g/wattplan-messaging-house.jpg" alt="WattPlan messaging hierarchy" loading="lazy" decoding="async">
                                <div class="gallery-label">Messaging hierarchy</div>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h4>What the house says</h4>
                        <ul>
                            <li><strong>Train. Adapt.</strong> - the tagline reads four ways. The cyclist does the work, the body adapts to it, the plan adapts to the riding actually done, and the two keep looping.</li>
                            <li><strong>Personalised. Training</strong> - when life or riding changes, the week still makes sense.</li>
                            <li><strong>Questions. Answered.</strong> - ask the Coach a normal question and get a clear answer based on the plan, the rides and the goals.</li>
                            <li><strong>Rides. Counted.</strong> - connect once, then ride. Every ride is imported, scored and added to the picture.</li>
                            <li><strong>Voice</strong> - an experienced club rider who knows the science. Warm, direct, and giving one clear recommendation.</li>
                            <li><strong>Vocabulary</strong> - plan, Coach, cyclist and rider. No sport clichés, no technology filler, and no promise of watts, times or placings.</li>
                        </ul>
                    </div>
                    <a href="wattplan-brand/" target="_blank" class="ai-link" style="display:inline-block;margin-top:16px;color:#6366f1;font-weight:600;">Open the WattPlan brand book →</a>
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
                            <h4>Marketing Strategy</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">Marketing Strategy</span>
                                <span class="skill-tag highlight">Brand Strategy</span>
                                <span class="skill-tag">Go-to-Market Strategy</span>
                                <span class="skill-tag">Positioning & Messaging</span>
                                <span class="skill-tag">Customer Acquisition Strategy</span>
                                <span class="skill-tag">Retention & Lifecycle</span>
                                <span class="skill-tag">Multi-Channel Planning</span>
                                <span class="skill-tag">Audience & Segmentation</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Brand & Creative Direction</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">Brand Creative Direction</span>
                                <span class="skill-tag">Brand Development</span>
                                <span class="skill-tag">Brand Repositioning</span>
                                <span class="skill-tag">Visual Identity</span>
                                <span class="skill-tag">Campaign Management</span>
                                <span class="skill-tag">Content Strategy</span>
                                <span class="skill-tag">Editorial Direction</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>PR & Owned Media</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">PR Strategy</span>
                                <span class="skill-tag highlight">Owned Media Strategy</span>
                                <span class="skill-tag">Media Relations</span>
                                <span class="skill-tag">Earned Media</span>
                                <span class="skill-tag">Press Office</span>
                                <span class="skill-tag">Non-Endemic Coverage (BBC / ITV)</span>
                                <span class="skill-tag">Thought Leadership</span>
                                <span class="skill-tag">Crisis Communications</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Digital & Performance</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">Paid Performance Marketing</span>
                                <span class="skill-tag highlight">SEO</span>
                                <span class="skill-tag">SEM / PPC</span>
                                <span class="skill-tag">Programmatic & Paid Social</span>
                                <span class="skill-tag">CRM & Lifecycle Email</span>
                                <span class="skill-tag">Conversion Optimisation</span>
                                <span class="skill-tag">eCommerce</span>
                                <span class="skill-tag">Analytics & Attribution</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Partnerships & Events</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Sponsorships & Partnerships</span>
                                <span class="skill-tag">Ambassador & Influencer Marketing</span>
                                <span class="skill-tag">Event Management</span>
                                <span class="skill-tag">Pro Team Activation</span>
                                <span class="skill-tag">Sponsorship Negotiation</span>
                                <span class="skill-tag">Agency Management</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>Leadership & Commercial</h4>
                            <div class="skill-tags">
                                <span class="skill-tag">Senior Marketing Leadership</span>
                                <span class="skill-tag">Team Building</span>
                                <span class="skill-tag">Business Development</span>
                                <span class="skill-tag">Budget Ownership (£1.2M+)</span>
                                <span class="skill-tag">P&L</span>
                                <span class="skill-tag">Investor Relations</span>
                                <span class="skill-tag">Funding & Fundraising</span>
                                <span class="skill-tag">Board-Level Reporting</span>
                            </div>
                        </div>
                        <div class="skill-group">
                            <h4>AI & Autonomous Operations</h4>
                            <div class="skill-tags">
                                <span class="skill-tag highlight">Vibe Coding</span>
                                <span class="skill-tag highlight">Vibe Marketing</span>
                                <span class="skill-tag highlight">Organisational Automation</span>
                                <span class="skill-tag highlight">AI Agent Orchestration</span>
                                <span class="skill-tag highlight">Autonomous Business Operations</span>
                                <span class="skill-tag">Multi-Agent Workflows</span>
                                <span class="skill-tag">Prompt & Context Engineering</span>
                                <span class="skill-tag">Model Routing (Opus / Sonnet / Haiku)</span>
                                <span class="skill-tag">AI Content Pipelines</span>
                                <span class="skill-tag">AI-Native GTM</span>
                                <span class="skill-tag">AI & Machine Learning</span>
                                <span class="skill-tag">Claude Code</span>
                                <span class="skill-tag">Claude Co Work</span>
                                <span class="skill-tag">Hermes & Paperclip</span>
                                <span class="skill-tag">MCP (Model Context Protocol)</span>
                                <span class="skill-tag">AI Creative (Midjourney / DALL·E / Sora)</span>
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
                    <p class="ai-intro">Tech evangelist and early adopter with 2+ years of hands-on AI experience, from embedding AI/ML across marketing, product and decision-making in established businesses to running an autonomous, AI-operated business end-to-end as a solo operator.</p>
                    <div class="ai-grid">
                        <div class="ai-item">
                            <div class="ai-item-icon">A</div>
                            <h4>Aster</h4>
                            <p>Any ride or run, live on the map. An athlete goes live from their phone, shares one link, and anyone can watch. Built and run by a lean team, with AI agents (Hermes, Paperclip and supporting models) handling much of the analysis, product, engineering, marketing and content.</p>
                            <span class="ai-coming">Live on the App Store and Google Play</span>
                            <a href="https://aster-track.com" target="_blank" class="ai-link">aster-track.com</a>
                        </div>
                        <div class="ai-item">
                            <div class="ai-item-icon">W</div>
                            <h4>WattPlan</h4>
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
                            <p>Exploring how AI lets brands graduate from brand to platform, using autonomous product creation as a moat and an audience-building engine. Aster is the live proof: a cycling brand operating as a software platform, run by a single operator with AI handling the rest.</p>
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
                            <div class="edu-badge">MCIPR</div>
                            <div class="edu-detail">
                                <h4>Member of the Chartered Institute of Public Relations</h4>
                                <p>Professional PR Accreditation</p>
                            </div>
                        </div>
                        <div class="edu-item">
                            <div class="edu-badge">HD</div>
                            <div class="edu-detail">
                                <h4>Higher Diploma - Fishing & Fishery Sciences & Management</h4>
                                <p>Brooksby Melton College, 1999 – 2002 · Distinction</p>
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
                        <div class="edu-item">
                            <div class="edu-badge">AI</div>
                            <div class="edu-detail">
                                <h4>Google generative AI courses</h4>
                                <p>Introduction to Large Language Models, Introduction to Generative AI and Introduction to Responsible AI (Sep 2024), plus the Prompt Design in Vertex AI skill badge (Oct 2024)</p>
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
                            <p>I am a lifestyle cyclist. Cycling isn't just an interest - it runs through everything I do. My father was a mountain biking instructor, and I grew up on bikes. I rode the juniors competitively before heading off to college. Today I ride and race road and gravel. In August 2026 I finished 9th in the 40-44 category at the UK National Gravel Championships, my best national result to date, a year after placing 15th at the Nationals in 2025. In September 2026 I finished 5th in my age group at UCI Gravel Cymru. I'm equally at home on a gravel bike in the Peak District or on the road in the Yorkshire Dales. Cycling culture, community and progression are values I live, not just market.</p>
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
