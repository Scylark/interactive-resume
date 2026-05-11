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

import os
OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "James-Vickers-CV.pdf")

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

# -- Header --
story.append(Paragraph('James Vickers MCIM MCPR', styles['CVName']))
story.append(Paragraph('Sheffield / Lincoln, UK - 1.5hrs from London - 07897714630 - james@manual-focus.co.uk', styles['CVContact']))
story.append(Paragraph(
    'Senior Marketing Professional and operator of an autonomous AI business. 10+ years driving growth '
    'across cycling, fitness tech, fintech and Web3 - now founder of Aster (live GPS tracking, shipped '
    'iOS and Android) and Wattplan (AI training app), both built and run by orchestrated AI agents with '
    'me as the human in the loop. A working answer to "how much business can one operator run when AI '
    'handles the stack?" Track record in brand repositioning, complex campaigns, team leadership and '
    'embedding AI/ML across marketing, product and finance.',
    styles['CVSummary']
))

# -- Skills --
section('KEY SKILLS &amp; EXPERTISE')
story.append(Paragraph(
    'Leadership - Business Development - Strategy - Funding - Investor Relations - Budgeting - '
    'Brand Development - Campaign Management - PR and Editorial - Digital Planning and Purchasing - '
    'Event Management - Sponsorships &amp; Partnerships - Ambassador &amp; Influencer Marketing - '
    'CRM and Email Marketing - AI &amp; Machine Learning - AI Agent Orchestration - '
    'Autonomous Business Operations',
    styles['CVSkills']
))

# -- Career --
section('CAREER HIGHLIGHTS')

# Aster - autonomous AI business
role('Aster - Watch the Dot - Live GPS Tracking Platform', 'Founder / Operator (Autonomous AI Business)', '2025 - Present')
context('A vibe-created, fully autonomous AI business shipped to iOS and Android. Orchestrated AI agents (Hermes, Paperclip and supporting models) run the back office - business analysis, product, engineering requirements, market research, development, testing, marketing and content. I am the human in the loop for an otherwise self-running operation.')
bullet('Founder, brand, strategy and operator of a live GPS-tracking platform for ultra-endurance cycling.')
bullet('Designed AI agent workflows that handle BA, product, engineering, QA, marketing and content end-to-end.')
bullet('Native iOS and Android apps via Capacitor; React PWA, Node/Fastify API, Postgres, Mapbox live maps and real-time leaderboard.')
bullet('Four non-negotiable rider-safety rules driving product design: offline start/finish, never auto-logout, tracking persists, never lose a ping.')
bullet('A working proof of the Brand-to-Platform thesis - a cycling brand operating as a software platform, run by a single operator with AI handling the rest.')

story.append(Spacer(1, 4))

# Wattplan
role('Wattplan - AI-Powered Endurance Training App', 'Founder', '2025 - Present')
context('A personal experiment in AI readiness - concept, brand, full-stack development and launch all delivered with AI throughout the stack.')
bullet('Full-stack solo build using Claude Code: front-end, back-end and AI integrations.')
bullet('Owned marketing, GTM, brand and product design end-to-end.')
bullet('Live at wattplan.cc.')

story.append(Spacer(1, 4))

# Ribble 2
role('Ribble Cycles - High-Performance D2C Bike Brand', 'Marketing Consultant (currently 3 days/week advisory)', 'Nov 2024 - Present')
context('Budget responsibility: £1.2M. Landed 2024/2025 budget under at £920,000.')
bullet('Reshaped the marketing team - reorganised roles and responsibilities across the department.')
bullet('Built organisational structure - processes, planning, and a new task management platform.')
bullet('Day-to-day management of marketing team, retail stakeholders, and agencies.')
bullet('Onboarded Shift Active Media (PR) and Commute Films (creative video production).')
bullet('Board-level impact - strategic presentations to the board as part of the SMT to PE Owners.')
bullet('Built strategic PR process - managed product-to-journalist pipeline on schedule. Secured BBC and ITV TV coverage in 2025.')
bullet('Coverage growth - articles 135 to 196, est. views 1.89M to 4.42M, potential audience 117M to 327M.')
bullet('Brand repositioning - shifted perception from "budget heritage" to "high-performance technical" - ULTRA-RACE compared to Colnago rather than Planet X or Dolan.')
bullet('Ribble Outliers - thought leadership on LinkedIn alongside B2C content. Partnership marketing with Precision and Restrap added 8,000+ email subscribers.')
bullet('Presenting Partner, British Gravel Championships - digital and physical rights negotiation, planning, and execution.')
bullet('Gravel category growth - Ribble\'s fastest-growing segment, +2pp above market, taking competitor share.')
bullet('The Original Outliers rebrand - worked with FreshBritain on repositioning tone of voice and visual language.')
bullet('2025 strategic objectives - grow gravel market share, increase regional penetration (NE and South), launch four new bikes.')
bullet('Led NPD marketing - market gap analysis, sign-off documents, and GTM strategies.')
bullet('Smurfit Westrock &amp; Cyclist magazine - "Welcome to Hell" mini-documentary on the CiCLE Classic win.')

story.append(Spacer(1, 4))

# motif
role('motif - AI-Powered Wealth Advisory (Fintech)', 'Fractional CMO (ESOP Holder)', '2024 - Present')
context('Originally an advisory board role. ESOP holder handling the full marketing mandate with a small team and budget. motif is being built using Claude Code - actively involved in product feature development.')
bullet('Full marketing ownership: brand and website development, hosting, updates, and social media management.')
bullet('Pivoted to B2B outreach, contacting 1,000+ fintech organisations to develop the sales pipeline.')
bullet('Generated a qualified "under-negotiation" phase of over £150M in assets under management across seven entities.')
bullet('Built a pipeline of approximately 30 prospects in varying stages.')
bullet('AI product development - actively involved in building features within the motif app using Claude Code.')

story.append(Spacer(1, 4))

# Classified
role('Classified Cycling - Cycling Component Manufacturer', 'Head of Marketing and Communications', 'Jun 2024 - Nov 2024')
bullet('Led the research, validation, and integration of brand and product positions.')
bullet('160+ media placements - spearheaded global product launches, including the Vistar // Powershift drivetrain at Eurobike.')
bullet('Global events - managed Eurobike, Sea Otter, and Taichung Bike Week to strengthen partnerships and drive growth.')
bullet('AI/ML adoption - led adoption of AI and machine learning across departments.')
bullet('Team leadership - led the marketing team and agencies to deliver cohesive digital, PR, and social campaigns.')
bullet('Enhanced education and process for IBDs and distributors.')

story.append(Spacer(1, 4))

# Muuvr
role('Muuvr - Move-to-Earn Application', 'CMO', 'Jan 2023 - May 2024')
bullet('Brand development - led Muuvr\'s brand and visual identity from scratch, including persona work.')
bullet('AI strategy - designed and implemented AI strategies across product, marketing, and financial decision-making.')
bullet('$4.5M fundraise - contributed to a successful fundraising effort securing $4.5M in investment.')
bullet('GTM execution - oversaw go-to-market strategy, procured and managed agencies across creative, performance, and PR.')
bullet('Gamification - led development of key gamification strategies driving user engagement.')

story.append(Spacer(1, 4))

# Wahoo
role('Wahoo Fitness - Multi-faceted Indoor Training Platform', 'Head of Marketing (Subscription Services)', 'Apr 2022 - Jan 2023')
bullet('Led strategic development and execution of Wahoo X\'s integrated marketing strategy.')
bullet('Directed go-to-market, PR, partnerships, product innovation, and multi-channel marketing.')
bullet('Managed global product launches and expanded RGT retail presence to 500+ retailers.')
bullet('Led the Wahoo X GTM Fall 2022 campaign, securing media coverage in 20 top publications.')

story.append(Spacer(1, 4))

# RGT
role('RGT Cycling - Indoor Cycling Platform', 'Chief Marketing Officer (2021-2022) - Head of Brand &amp; Marketing (2019-2021)', '2019 - 2022')
bullet('Co-founded RGT Cycling. Drove register-to-ride conversions from 20% to 45% within 12 months.')
bullet('Grew subscribers from 0 to 10K and registered users from 100 to 450K. MOU/WAU increased ~3,000%.')
bullet('Directed content strategy generating over 2.2M sessions from ~1M users.')
bullet('Improved prompted brand recall from 2 to 95 and unprompted from 0 to 75.')
bullet('Defined GTM flywheel utilising partnerships with over 100 brands. Elevated NPS from -65 to +45.')
bullet('Played critical role in corporate strategy and due diligence during acquisition by Wahoo Fitness.')

story.append(Spacer(1, 4))

# Wattbike
role('Wattbike - Indoor Training Bike', 'PR &amp; Marketing Manager', '2018 - 2019')
bullet('Media perception shift - shifted perceptions of the Wattbike Atom, improving mid-funnel retention and driving conversions.')
bullet('Global events - delivered growth through events across the UK, Europe, and Africa.')
bullet('Ambassador marketing - built the framework for selecting and engaging ambassadors and high-profile talent.')
bullet('International support - provided tailored marketing materials and training for distributors and dealers.')

story.append(Spacer(1, 4))

# Pelotan
role('Pelotan - Cycling Specific Sun Protection', 'Consultant Marketing Director', '2018 - 2020')

story.append(Spacer(1, 4))

# Ribble 1
role('Ribble - High-End D2C Bike Brand', 'Head of Brand &amp; Marketing', '2017 - 2018')
context('Developed and executed brand and marketing strategies. Led digital efforts (SEO, performance, email). Directed content creation and oversaw influencer partnerships.')

story.append(Spacer(1, 4))

# Planet X
role('Planet X Bikes - D2C Bike Brand', 'Head of Sales and Marketing', '2015 - 2017')
context('Developed and executed sales and marketing strategies driving revenue growth. Led digital marketing, optimised eCommerce, and implemented customer segmentation. Built key supplier relationships.')

# -- Additional --
section('ADDITIONAL')
story.append(Paragraph('<b>Professional Accreditations:</b> MCIM - MCPR', styles['CVSmall']))
story.append(Paragraph(
    '<b>Personal Interests:</b> Road Cycling - Gravel - 15th at National Championships 2025 - XC MTB - Travel - Adventure Sports - Sustainability - Technology - AI',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>AI Side Project:</b> Wattplan (wattplan.cc) - AI-powered endurance sports training app. Concept, development and launch.',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>Industry Network:</b> Extensive network in cycling built over almost 15 years. Deep relationships with journalists, brands, athletes, agencies, retailers, distributors, and event organisers across the UK and Europe.',
    styles['CVSmall']
))
story.append(Paragraph(
    '<b>Travel:</b> 30% possible - UK, Europe.',
    styles['CVSmall']
))

# -- Education --
section('EDUCATION &amp; QUALIFICATIONS')
small('MCIM - Marketing - MCPR - Public Relations')
small('Higher Diploma - Fishing &amp; Fishery Sciences &amp; Management (Distinction)')
small('ISEB - BCS Requirements Engineering - ISEB - BCS Certificate in Business Analysis')
small('Information Technology Infrastructure Library (ITIL)')

# Build
doc.build(story)
print(f"CV generated: {OUTPUT}")
