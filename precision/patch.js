// Precision Fuel & Hydration tailoring layer.
// Loads after data.js and adjusts RESUME_DATA for this application copy.
(function () {
    // Credentials: MCIM · MCIPR everywhere
    RESUME_DATA.center.sublabel = "MCIM · MCIPR";
    if (RESUME_DATA.details.james) {
        RESUME_DATA.details.james.subtitle = "MCIM · MCIPR";
        RESUME_DATA.details.james.content = RESUME_DATA.details.james.content
            .split("MCIM · MCPR").join("MCIM · MCIPR");
    }

    // Precision & me node + edge
    RESUME_DATA.nodes.push({
        id: "precision",
        label: "Precision & me",
        sublabel: "This application",
        type: "category",
        icon: "◎",
        color: "#FC5000",
        angle: 330,
        distance: 1
    });
    RESUME_DATA.edges.push({ from: "james", to: "precision" });

    // Precision & me modal
    RESUME_DATA.details.precision = {
        title: "Precision & me",
        subtitle: "Prepared for Precision Fuel & Hydration",
        type: "role",
        color: "#FC5000",
        content: `
            <div class="role-card">
                <div class="role-header">
                    <div class="role-badge" style="background: #FC5000">This application</div>
                </div>
                <h2>Precision & me</h2>
                <h3>A brand I've known, used and worked alongside</h3>
                <p class="role-context">This version of my resume was prepared for the Marketing Director application in August 2026, and our paths have crossed a few times before it.</p>
                <div class="achievements">
                    <h4>Where we've already worked together</h4>
                    <ul>
                        <li><strong>Classified, 2024</strong> - Precision sponsored the Classified gravel squad while I led the brand's marketing.</li>
                        <li><strong>Ribble Outliers, 2025–26</strong> - the pro gravel team I set up at Ribble races on Precision products, and the partnership marketing we ran together gave our email subscribers a healthy boost.</li>
                    </ul>
                </div>
                <div class="achievements">
                    <h4>As an athlete</h4>
                    <ul>
                        <li><strong>The Gralloch UCI, 2026</strong> - I used the Fuel & Hydration Planner to build the fuelling plan for my 13th place finish.</li>
                        <li><strong>Bucket list race</strong> - Challenge Roth.</li>
                    </ul>
                </div>
                <div class="achievements">
                    <h4>The proposal</h4>
                    <ul>
                        <li>Alongside this resume I've submitted a strategic proposal built on live UK, US and German search data, a first-hand walkthrough of the Fuel & Hydration Planner and a plan for a first hundred days.</li>
                    </ul>
                </div>
                <div class="stat-grid">
                    <div class="stat">
                        <span class="stat-value">13th</span>
                        <span class="stat-label">The Gralloch UCI, fuelled by the Planner</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">2</span>
                        <span class="stat-label">Teams I've led that partnered with Precision</span>
                    </div>
                </div>
            </div>
        `
    };

    // Ribble: brief delivered, retained for strategy and the pro team
    if (RESUME_DATA.details["ribble-2"]) {
        RESUME_DATA.details["ribble-2"].content = RESUME_DATA.details["ribble-2"].content.replace(
            "Brought in on a 5-day contractor role under PE ownership by SMT. Delivered objectives and now transitioned to a 3-day advisory role in Feb 2026.",
            "Brought in on a 5-day contractor role under PE ownership by SMT to implement structure for the marketing team and integrate marketing into retail. With that brief delivered, transitioned to a 3-day retained consultant role in Feb 2026, where the remit is strategy and the management of the Ribble Outliers pro team."
        );
    }

    // Profile: endurance-forward bio + prepared-for line
    if (RESUME_DATA.details.james) {
        RESUME_DATA.details.james.content = RESUME_DATA.details.james.content
            .replace(
                '<p class="profile-bio">10+ years driving growth through high-impact marketing strategies across cycling, fitness tech and fintech. Proven track record in team leadership, complex campaigns, and delivering innovative solutions.</p>',
                '<p class="profile-bio">Fifteen years leading marketing in endurance sport and the technology around it. I helped found RGT Cycling, grew it to 450,000 riders worldwide and stayed on through its acquisition by Wahoo Fitness, and at Ribble I rebuilt the marketing team under private equity ownership before stepping into a retained strategy role.</p>'
            )
            .replace(
                "<span>james@manual-focus.co.uk</span>",
                '<span>james@manual-focus.co.uk</span>\n                            <span style="color:#FC5000;font-weight:600;">Prepared for Precision Fuel &amp; Hydration · August 2026</span>'
            );
    }

    // Trim Muuvr to a brief entry
    if (RESUME_DATA.details.muuvr) {
        RESUME_DATA.details.muuvr.content = RESUME_DATA.details.muuvr.content.replace(
            /<div class="achievements">\s*<h4>Brand & GTM<\/h4>[\s\S]*?<h4>Events & Partnerships<\/h4>[\s\S]*?<\/div>\s*<div class="stat-grid">/,
            `<div class="achievements">
                    <h4>In brief</h4>
                    <ul>
                        <li>Built the brand, visual identity and social presence from scratch, and oversaw go-to-market for product launches with agencies across creative, performance and PR.</li>
                        <li>Contributed to a successful fundraising effort securing $4.5M in investment.</li>
                        <li>Represented the brand at endurance events including the Blenheim Triathlon and Oxford Half Marathon, with marketplace partnerships built around event organisers and endurance sports brands.</li>
                    </ul>
                </div>
                <div class="stat-grid">`
        );
    }

    // Trim motif to a brief entry
    if (RESUME_DATA.details.motif) {
        RESUME_DATA.details.motif.content = RESUME_DATA.details.motif.content.replace(
            /<div class="achievements">\s*<h4>Marketing<\/h4>[\s\S]*?<div class="stat-grid">[\s\S]*?<\/div>\s*<\/div>/,
            `<div class="achievements">
                    <h4>In brief</h4>
                    <ul>
                        <li><strong>Full marketing ownership</strong> - brand, website and social for this AI-powered wealth advisory, alongside B2B outreach that built a pipeline of ~30 prospects with £150M+ in assets under management at the negotiation stage.</li>
                    </ul>
                </div>
                <div class="stat-grid">
                    <div class="stat">
                        <span class="stat-value">£150M+</span>
                        <span class="stat-label">AUM Pipeline</span>
                    </div>
                </div>`
        );
    }
})();
