# HandaNaPH — Phase 1 Audit

**Phase:** 1 — Audit  
**Audit Date:** October 4, 2026  
**Project:** HandaNaPH  
**Tagline:** Know. Prepare. Respond.

---

## 1. Audit Objective

Phase 1 establishes the current state of the HandaNaPH repository before major feature development.

The purpose of this audit is to:

- Inspect the existing project structure
- Verify the current technology stack
- Review the existing UI foundation
- Identify architectural gaps
- Define the proposed content/data structure
- Identify technical, accessibility, performance, and life-safety risks
- Establish the implementation direction for Phase 2

No major feature implementation is part of this audit.

---

## 2. Current Technology Stack

### Runtime / Framework

- React 19.3
- React DOM 19.3
- Vite 8.3
- JavaScript (ES Modules)

### Libraries

- Lucide React 1.51
- React Router 8.4

### Development Tools

- ESLint 10
- Vite React plugin
- Git
- GitHub
- Vercel as planned deployment target

---

## 3. Current Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── home/
│   ├── layout/
│   │   └── Navbar.jsx
│   └── ui/
├── data/
├── layouts/
├── pages/
├── routes/
└── styles/
    └── index.css

    Current observations
App.jsx currently contains the main landing-page UI.
main.jsx is the React entry point and imports the global stylesheet.
Navbar.jsx has been created as the first reusable component but is not yet connected to the application.
data, layouts, pages, routes, and components folders exist as architectural foundations but are not yet fully implemented.
Global styles are located in src/styles/index.css.
4. Current UI Foundation

The current landing page contains:

HandaNaPH branding
Shield-based brand mark
"Know. Prepare. Respond." tagline
Learn navigation
Practice navigation
Prepare navigation
Emergency action button
Philippine-focused badge
Hero headline:
"Know what to do before it matters."
Start Learning CTA
Prepare Now CTA
Three visual concept cards:
Emergency — red
Learn — blue
Prepare — amber/yellow
Design Direction

The project will retain the current clean and modern Filipino visual identity.

Color roles:

Blue = Learning / Information
Red = Emergency / Urgent action
Amber / Yellow = Preparation / Caution
White and neutral colors = Content / readability

The interface should remain mobile-first, calm, accessible, visual, and easy to understand under stress.

5. Current Routing State

React Router is installed but is not yet actively used by the current application.

The current landing page uses hash links such as:

#learn
#practice
#prepare

The project should preserve the existing routing style unless a strong architectural reason requires a change.

Routing will be formally established during Phase 2.

6. Current Styling State

Global styling already includes:

CSS variables for primary colors
Typography definitions
Global reset
Buttons
Cards
Navbar styling
Hero styling
Responsive breakpoints
Known future improvements
Introduce semantic design tokens such as:
--color-emergency
--color-learn
--color-prepare
--color-warning
Add accessible high-contrast variants
Improve mobile-first behavior
Test explicitly at 360px width
Replace externally loaded fonts with an offline-friendly/self-hosted approach during the appropriate phase
7. Content Architecture Direction

Emergency and preparedness information should be stored as structured data rather than being hard-coded directly into UI components.

A guide should eventually contain fields such as:

{
  id: "example-guide",
  category: "first-aid",
  severity: "critical",

  title: {
    fil: "...",
    en: "..."
  },

  summary: {
    fil: "...",
    en: "..."
  },

  call911: true,

  whenToCall: {
    fil: "...",
    en: "..."
  },

  before: [],
  during: [],
  after: [],

  dos: [],
  donts: [],

  tools: [],

  sources: [],
  lastReviewed: "YYYY-MM-DD",
  reviewStatus: "draft",
  needsVerification: true,

  tags: []
}

This separates:

Content
   ↓
Data
   ↓
UI Components

and allows content to be validated independently.

8. Proposed Data Structure

Future content organization:

src/data/
├── guides/
│   ├── first-aid.js
│   ├── disasters.js
│   └── utilities.js
├── scenarios/
├── quizzes/
├── hotlines/
└── site/

Hotline records should include verification information rather than relying on unverified numbers.

9. Life-Safety Risk List
Accuracy

Emergency and medical guidance must be sourced from credible authorities.

Never invent:

Emergency numbers
Medical instructions
Medical dosages
Statistics
Official URLs
Verification

Life-critical guides require:

Sources
Last reviewed date
Review status
Verification flag
Outdated Information

Emergency procedures, hotlines, and official links may change.

The system should support tracking when information was last checked.

Offline Reliability

Core emergency functionality is intended to work without internet access.

Accessibility

The target is WCAG 2.1 AA.

Important considerations include:

Keyboard navigation
Visible focus
Sufficient contrast
Large touch targets
Reduced motion
Screen-reader support
Information not being conveyed by color alone
Mobile Emergency UX

Emergency Mode must remain usable on small mobile screens and under stressful conditions.

Content Safety

The application is an educational resource.

It does not replace:

Professional medical assistance
Emergency responders
Formal first-aid training
Official instructions from authorities
10. Performance Risks

Future requirements include:

Mobile-first design
Fast initial loading
Route-based code splitting
Lazy loading below-the-fold content
Optimized SVG/WebP assets
Offline support
Lighthouse target of 90+ for mobile Performance, Accessibility, Best Practices, and SEO

These requirements will be handled in later phases.

11. Accessibility Direction

The project should support:

Filipino / English language switching
Adjustable text size
High-contrast mode
Read Aloud
Reduced motion
Semantic HTML
Keyboard navigation
Accessible touch targets

Special experiences are planned for:

HandaKids
Senior-friendly mode
PWDs and caregivers
12. Proposed Application Architecture

Target structure:

App
│
├── Routing
│
├── Shared Layout
│   ├── Navbar
│   └── Footer
│
├── Pages
│   ├── Home
│   ├── Learn
│   ├── Guide Detail
│   ├── Practice
│   ├── Prepare
│   ├── Emergency
│   ├── Hotlines
│   └── Static Pages
│
├── Reusable Components
│   ├── UI
│   ├── Home
│   ├── Guide
│   ├── Emergency
│   └── Practice
│
└── Structured Data
    ├── Guides
    ├── Scenarios
    ├── Quizzes
    └── Hotlines
13. Development Principles

The project will be developed incrementally.

Every major phase should follow:

Plan
↓
Implement
↓
Test
↓
Review
↓
Document
↓
Commit
↓
Push

Each phase should leave the repository in a stable state.

14. Phase Roadmap
Phase 1 — Audit

Inspect repository, architecture, data direction, and risks.

Status: Complete

Phase 2 — Foundation

Planned:

Routing foundation
Shared layout
Design tokens
Language architecture
Text-size controls
Contrast controls
Data schema
Content validation
Phase 3 — Emergency Mode + Hotlines

Planned:

Emergency triage screen
Emergency quick flows
Hotline actions
CPR metronome
911 guidance card
Offline emergency access
Phase 4 — Learn Library

Planned:

Search
Categories
Filters
Guide detail template
Visual learning guides
Source-backed critical topics
Educational video embeds
Phase 5 — Practice

Planned:

Branching scenarios
Quiz engine
Feedback
Progress
Learning badges
Phase 6 — Prepare

Planned:

Go-bag builder
Family emergency plan
Home safety checklist
Printable resources
Phase 7 — Special Modes + Static Pages

Planned:

HandaKids
Senior mode
About
Terms
Privacy
Disclaimer
Sources & Credits
Contact
404
Phase 8 — PWA + Performance + SEO

Planned:

Offline support
Installable PWA
Update prompts
Performance optimization
Accessibility audit
SEO metadata
Sitemap
Manifest
Phase 9 — QA + Deployment

Planned:

Final testing
Content verification review
Production QA
README completion
Vercel deployment
15. Phase 1 Status
Completed
Repository inspected
Git history inspected
Dependencies inspected
Folder structure inspected
App.jsx inspected
main.jsx inspected
Global CSS inspected
Vite configuration inspected
ESLint configuration inspected
.gitignore verified
node_modules verified as ignored
dist verified as ignored
Data architecture proposed
Safety and technical risks identified
Development phases established
Not Yet Implemented
Full routing
Shared layout
Data schema files
Content validator
Emergency Mode
Learn library
Practice system
Prepare tools
PWA
Accessibility controls
Production deployment
16. Phase 1 Human Verification

Before publishing life-critical content, qualified human review is required for safety-sensitive instructions.

The project should not treat AI-generated emergency guidance as automatically verified.

