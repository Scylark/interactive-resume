#!/usr/bin/env python3
"""Generate James Vickers CV as a professional PDF."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

OUTPUT = "/Users/jamesvickers/Desktop/Claude/Manual Focus/James Vickers/interactive-resume/assets/James-Vickers-CV.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    topMargin=1.8*cm,
    bottomMargin=1.5*cm,
    leftMargin=2*cm,
    rightMargin=2*cm,
)

styles = getSampleStyleSheet()

# Custom styles
styles.add(ParagraphStyle(
    'CVName', parent=styles['Title'],
    fontSize=22, leading=26, spaceAfter=2,
    fontName='Helvetica-Bold', alignment=TA_LEFT,
    textColor=HexColor('#1d1d1f'),
))
styles.add(ParagraphStyle(
    'CVContact', parent=styles['Normal'],
    fontSize=9, leading=13, spaceAfter=6,
    fontName='Helvetica', textColor=HexColor('#6e6e73'),
))
styles.add(ParagraphStyle(
    'CVSummary', parent=styles['Normal'],
    fontSize=9.5, leading=14, spaceAfter=10,
    fontName='Helvetica', textColor=HexColor('#1d1d1f'),
))
styles.add(ParagraphStyle(
    'CVSectionHead', parent=styles['Heading2'],
    fontSize=12, leading=16, spaceBefore=14, spaceAfter=6,
    fontName='Helvetica-Bold', textColor=HexColor('#1d1d1f'),
    borderWidth=0, borderPadding=0,
))
styles.add(ParagraphStyle(
    'CVRoleCompany', parent=styles['Normal'],
    fontSize=10.5, leading=14, spaceBefore=8, spaceAfter=1,
    fontName='Helvetica-Bold', textColor=HexColor('#1d1d1f'),
))
styles.add(ParagraphStyle(
    'CVRoleTitle', parent=styles['Normal'],
    fontSize=9, leading=13, spaceAfter=3,
    fontName='Helvetica-Oblique', textColor=HexColor('#6e6e73'),
))
styles.add(ParagraphStyle(
    'CVContext', parent=styles['Normal'],
    fontSize=9, leading=13, spaceAfter=4,
    fontName='Helvetica', textColor=HexColor('#3a3a3c'),
))
styles.add(ParagraphStyle(
    'CVBullet', parent=styles['Normal'],
    fontSize=9, leading=13, spaceAfter=2,
    fontName='Helvetica', textColor=HexColor('#1d1d1f'),
    leftIndent=12, bulletIndent=0,
))
styles.add(ParagraphStyle(
    'CVSkills', parent=styles['Normal'],
    fontSize=9, leading=14, spaceAfter=6,
    fontName='Helvetica', textColor=HexColor('#3a3a3c'),
))
styles.add(ParagraphStyle(
    'CVSmall', parent=styles['Normal'],
    fontSize=8.5, leading=12, spaceAfter=3,
    fontName='Helvetica', textColor=HexColor('#3a3a3c'),
))

story = []

def hr():
    story.append(HRFlowable(width="100%", thickness=0.5, color=HexColor('#d2d2d7'), spaceAfter=6, spaceBefore=4))

def section(title):
    story.append(Paragraph(title, styles['CVSectionHead']))
    hr()

def role(company, title_text, dates):
    story.append(Paragraph(f'{company} <font color="#6e6e73" size="9">{dates}</font>', styles['CVRoleCompany']))
    story.append(Paragraph(title_text, styles['CVRoleTitle']))

def context(text):
    story.append(Paragraph(text, styles['CVContext']))

def bullet(text):
    story.append(Paragraph(f'<bullet>&bull;</bullet> {text}', styles['CVBullet']))

def small(text):
    story.append(Paragraph(text, styles['CVSmall']))

# ── Header ──
story.append(Paragraph('James Vickers MCIM MCPR', styles['CVName']))
story.append(Paragraph('Sheffield / Lincoln, UK · Remote · 07897714630 · james@manual-focus.co.uk', styles['CVContact']))
story.append(Paragraph(
    'Senior Marketing Professional with 10+ years of experience driving growth through high-impact '
    'marketing strategies. Proven track record in managing complex campaigns, team leadership, and '
    'delivering innovative solutions. A proactive, analytical, and results-driven leader known for '
    'building strong relationships with stakeholders and providing clear, actionable insights to '
    'senior decision-makers. Skilled in branding, PR, digital marketing, events, content strategy, '
    'and partnerships, with a focus on technology and endurance sports.',
    styles['CVSummary']
))

# ── Skills ──
section('KEY SKILLS &amp; EXPERTISE')
story.append(Paragraph(
    'Leadership · Business Development · Strategy · Funding · Investor Relations · Budgeting · '
    'Brand Development · Campaign Management · PR and Editorial · Digital Planning and Purchasing · '
    'Event Management · Sponsorships &amp; Partnerships · Ambassador &amp; Influencer Marketing · '
    'Project Management · CRM and Email Marketing · AI &amp; Machine Learning',
    styles['CVSkills']
))

# ── Career ──
section('CAREER HIGHLIGHTS')

# Ribble 2
role('Ribble Cycles – High-Performance D2C Bike Brand', 'Marketing Consultant (currently 3 days/week advisory)', 'Nov 2024 – Present')
context('Budget responsibility: £1.2M. Landed 2024/2025 budget under at £920,000. Operating at leadership level under PE ownership by True.')
bullet('Reshaped the marketing team by reorganising roles and responsibilities to ensure the right people were in the right positions.')
bullet('Established organisational structure, processes, and planning, including implementation of a new task management platform.')
bullet('Developed a strategic PR process to manage media relations. Secured non-endemic athlete placements on BBC, ITV TV and local newspapers.')
bullet('Coverage growth: articles from 135 (2024) to 196 (2025). Estimated views from 1.89M to 4.42M. Potential audience from 117M to 327M.')
bullet('Repositioned brand perception from "budget-friendly heritage brand" to "high-performance technical admiration" — ULTRA-RACE compared to Colnago in Cycling Weekly.')
bullet('Onboarded and managed two key agencies: Shift Active Media (PR) and Commute Films (creative video production).')
bullet('Led NPD marketing including pre-design sign-off documents and comprehensive go-to-market strategies.')
bullet('Activated the Ribble Outliers Pro Team across main and team-only channels. Partnership marketing with Precision and Restrap added 8,000+ users to the email subscriber list.')
bullet('British Gravel National Championships sponsorship amplified pro sports positioning. Gravel became Ribble\'s fastest-growing category, outperforming market growth by 2pp.')
bullet('Partnered with DAS-Hutchinson-Brother UK. Delivered "Welcome to Hell" mini-documentary about their Rutland-Melton CiCLE Classic win.')
bullet('Delivered strategic presentations to the board, representing the business under PE ownership.')

story.append(Spacer(1, 4))

# motif
role('motif – AI-Powered Wealth Advisory (Fintech)', 'Fractional CMO (ESOP Holder)', '2024 – Present')
context('Originally an advisory board role. Small team, small budget — full marketing mandate. Regular travel to Zurich (3 days/month). motif is being built using Claude Code — actively involved in product feature development.')
bullet('Full marketing ownership: brand and website development, contract hosting, website updates, and social media management.')
bullet('Pivoted to B2B outreach, contacting 1,000+ fintech organisations to develop the sales pipeline.')
bullet('Generated a qualified "under-negotiation" phase of over £150M in assets under management across seven entities.')
bullet('Built a total pipeline of approximately 30 prospects in varying stages.')

story.append(Spacer(1, 4))

# Classified
role('Classified Cycling – Cycling Component Manufacturer', 'Head of Marketing and Communications', 'Jun 2024 – Nov 2024')
bullet('Led the process of researching, validating, documenting and integrating the brand and product positions.')
bullet('Spearheaded global product launches, including the Vistar // Powershift drivetrain, resulting in over 160 media placements at Eurobike.')
bullet('Led the adoption of AI / Machine Learning technology into the business to support cross-department improvements.')
bullet('Managed significant industry events such as Eurobike, Sea Otter, and Taichung Bike Week.')
bullet('Developed high-impact content strategies that significantly increased web traffic and engagement.')
bullet('Supported the Digital Asset Management platform (Bynder) for IBDs and Distributors.')

story.append(Spacer(1, 4))

# Muuvr
role('Muuvr – Web3 Move to Earn Application', 'CMO', 'Jan 2023 – May 2024')
bullet('Led and developed Muuvr\'s brand and visual identity.')
bullet('Designed and implemented AI strategies to support product, marketing and financial decision making.')
bullet('Oversaw GTM strategy for product launches, driving user base growth and market share.')
bullet('Procured and managed agency partnerships in creative, performance marketing, and PR.')
bullet('Contributed to a successful fundraising effort, securing $4.5M USD in investment.')
bullet('Led development of key gamification strategies. Facilitated HubSpot setup and business training.')

story.append(Spacer(1, 4))

# Wahoo
role('Wahoo Fitness – Multi-faceted Indoor Training Platform', 'Head of Marketing (Subscription Services)', 'Apr 2022 – Jan 2023')
bullet('Led strategic development and execution of Wahoo X\'s integrated marketing strategy.')
bullet('Directed go-to-market, PR, partnerships, product innovation, and multi-channel marketing.')
bullet('Managed global product launches and expanded RGT retail presence to 500+ retailers.')
bullet('Led the Wahoo X GTM Fall 2022 campaign, securing media coverage in 20 top publications.')

story.append(Spacer(1, 4))

# RGT
role('RGT Cycling – Indoor Cycling Platform', 'Chief Marketing Officer (2021–2022) · Head of Brand &amp; Marketing (2019–2021)', '2019 – 2022')
bullet('Co-founded RGT Cycling. Drove register-to-ride conversions from 20% to 45% within 12 months.')
bullet('Grew subscribers from 0 to 10K and registered users from 100 to 450K. MOU/WAU increased ~3,000%.')
bullet('Directed content strategy generating over 2.2M sessions from ~1M users.')
bullet('Improved prompted brand recall from 2 to 95 and unprompted from 0 to 75.')
bullet('Defined GTM flywheel utilising partnerships with over 100 brands. Elevated NPS from -65 to +45.')
bullet('Played critical role in corporate strategy and due diligence during acquisition by Wahoo Fitness.')

story.append(Spacer(1, 4))

# Wattbike
role('Wattbike – Indoor Training Bike', 'PR &amp; Marketing Manager', '2018 – 2019')
bullet('Spearheaded comprehensive PR and marketing strategies driving brand and commercial growth.')
bullet('Delivered significant growth through events across the UK, Europe, and Africa.')
bullet('Built ambassador marketing framework. Shifted media perceptions of the Wattbike Atom, improving mid-funnel retention.')

story.append(Spacer(1, 4))

# Pelotan
role('Pelotan – Cycling Specific Sun Protection', 'Consultant Marketing Director', '2018 – 2020')

story.append(Spacer(1, 4))

# Ribble 1
role('Ribble – High-End D2C Bike Brand', 'Head of Brand &amp; Marketing', '2017 – 2018')
context('Developed and executed brand and marketing strategies. Led digital efforts (SEO, performance, email). Directed content creation and oversaw influencer partnerships. Analysed data to optimise campaigns and improve ROI.')

story.append(Spacer(1, 4))

# Planet X
role('Planet X Bikes – D2C Bike Brand', 'Head of Sales and Marketing', '2015 – 2017')
context('Developed and executed sales and marketing strategies driving revenue growth. Led digital marketing initiatives, optimised eCommerce, and implemented customer segmentation. Built key supplier relationships and led sales team to exceed targets.')

# ── Additional ──
section('ADDITIONAL')
story.append(Paragraph('<b>Professional Accreditations:</b> MCIM · MCPR', styles['CVSmall']))
story.append(Paragraph(
    '<b>Personal Interests:</b> Road Cycling · Gravel · 15th at National Championships 2025 · XC MTB · Travel · Adventure Sports · Sustainability · Technology · AI',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>AI Side Project:</b> Wattplan (wattplan.cc) — AI-powered endurance sports training app. Concept, development and launch.',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>Industry Network:</b> Extensive network in cycling built over almost 15 years. Deep relationships with journalists, brands, athletes, agencies, retailers, distributors, and event organisers across the UK and Europe.',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>Travel:</b> 30% possible — UK, Europe, Zurich monthly.',
    styles['CVSmall']
))

# ── Education ──
section('EDUCATION &amp; QUALIFICATIONS')
small('MCIM – Marketing · MCPR – Public Relations')
small('Higher Diploma – Fishing &amp; Fishery Sciences &amp; Management (Distinction)')
small('ISEB – BCS Requirements Engineering · ISEB – BCS Certificate in Business Analysis')
small('Information Technology Infrastructure Library (ITIL)')

# Build
doc.build(story)
print(f"PDF generated: {OUTPUT}")
