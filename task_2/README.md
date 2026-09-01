# Skyscanner Ad Platform UI/UX Design & Jira Tickets (Task 2)

A comprehensive redesign and user-experience specification for Skyscanner's Partner Advertising Platform. This project transforms a complex internal advertising tool into an intuitive, high-converting interface for external partners (airlines, hoteliers, car rental companies).

---

## 📂 Deliverables Overview

```
task_2/
├── ad-platform/                         # Interactive High-Fidelity Web Prototype
│   ├── index.html                       # 3 Interactive views (Creation, Analytics, Survey)
│   ├── styles.css                       # Skyscanner Design System & Components
│   └── app.js                           # Real-time state management, preview sync & telemetry
├── JIRA_TICKETS.md                      # 3 Production-ready Jira tickets for Front-End Devs
├── FIGMA_DESIGN_SPECS.md                # Design tokens, component specs & Figma setup guide
└── README.md                            # Project overview and strategic documentation
```

---

## 🚀 How to Run & Preview the Interactive Prototype

1. Open [`task_2/ad-platform/index.html`](file:///c:/Users/acer/Downloads/skyscanner-dropwizard-microservice/skyscanner-dropwizard-microservice/task_2/ad-platform/index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).
2. **Explore the 3 Core Views**:
   - **Ad Creation**: Click between Text, Image & Text, and Video Ad cards. Type in the form fields to watch the live Skyscanner search result mockup update in real time.
   - **Performance Analytics**: Toggle date filters (7d, 30d, 90d) to see dynamic KPI metric adjustments, explore the interactive trend graphs, and filter campaigns by status.
   - **User Feedback Survey**: Interact with the 5-question evaluation flow, rating scales, character counters, and submit to view the completion confirmation.

---

## 🎯 Strategic Risk Mitigations

| Risk Factor | Strategy & Design Decision |
| :--- | :--- |
| **Value Risk** *(Partner Appeal)* | Integrated a **Live Real-time Preview** card that allows partners to visualize their brand appearing in Skyscanner's premium search results immediately before committing ad spend. |
| **Usability Risk** *(Ease of Use)* | Replaced complex configuration matrices with **3 visual format cards** (Text, Image+Text, Video) and streamlined 2-step form validation with intuitive helper guidance. |
| **Feasibility Risk** *(Buildability)* | Utilized standard responsive component primitives (12-column grid, ConstraintLayout-aligned structures, standard HTML5/CSS3) and standard chart libraries. |
| **Business Risk** *(ROI Justification)* | Added high-visibility **ROAS (Return on Ad Spend)** and CTR conversion metrics in the Analytics dashboard to clearly demonstrate campaign profitability to partners. |

---

## 📑 Included Documentation

- 📋 [**Jira Developer Tickets** (`JIRA_TICKETS.md`)](file:///c:/Users/acer/Downloads/skyscanner-dropwizard-microservice/skyscanner-dropwizard-microservice/task_2/JIRA_TICKETS.md): Full acceptance criteria and user stories for Tickets 1, 2, and 3.
- 🎨 [**Figma Design System Specifications** (`FIGMA_DESIGN_SPECS.md`)](file:///c:/Users/acer/Downloads/skyscanner-dropwizard-microservice/skyscanner-dropwizard-microservice/task_2/FIGMA_DESIGN_SPECS.md): Color tokens, typography hierarchy, component states, and step-by-step recreation guide.
