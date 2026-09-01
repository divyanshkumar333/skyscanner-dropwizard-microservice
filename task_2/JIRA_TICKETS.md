# Skyscanner Ad Platform - Jira Developer Tickets

These three Jira tickets provide the complete technical specifications, field validations, UI/UX interaction models, and acceptance criteria for the front-end development team to implement the Skyscanner Ad Platform.

---

## 📋 Ticket 1: Ad Creation Platform

| Field | Value |
| :--- | :--- |
| **Issue Type** | Story / Feature |
| **Project** | Skyscanner Partner Portal (SKY-ADV) |
| **Summary** | Develop Ad Creation UI - Multi-Type Ad Selection & Form |
| **Priority** | High (P1) |
| **Assignee** | Front-End Engineering Team |
| **Components** | UI / Ad Creation / Partner Portal |

### 📖 User Story
> **As a** travel marketing partner (hotelier, airline, car rental agency),  
> **I want** an intuitive, visual ad creation interface with format selection, budget controls, and live mockup preview,  
> **So that** I can launch high-converting advertising campaigns across Skyscanner without requiring specialized technical training.

---

### 🛠️ Technical Requirements

#### 1. Multi-Type Ad Selection Cards (Component Set)
- Render three selectable format cards in a 3-column responsive grid:
  1. **Text Ad**: Icon (`DocumentText`), Headline, Description ("Simple text-based advertisement inside flight search results"), Tag (`Fast Setup`).
  2. **Image & Text Ad** (*Default Selected*): Icon (`Image`), Headline, Description ("Combine rich destination visuals with high-converting copy"), Tag (`Recommended`).
  3. **Video Ad**: Icon (`PlayVideo`), Headline, Description ("Engaging cinematic video content on inspiration feeds"), Tag (`High CTR`).
- **Interactive States**:
  - `Default`: Subtle border (`#E2E8F0`), white background.
  - `Hover`: Border transition to `#A3C9FA`, elevation lift `translateY(-2px)`.
  - `Selected`: 2px Skyscanner Sky Blue border (`#0770E3`), light tint background (`#F4F8FE`), active radio fill.

#### 2. Campaign Details & Form Configuration
- **Ad Title / Headline**: Required text input (max 100 chars) with floating label.
- **Ad Description**: Required multi-line textarea (max 300 chars).
- **Target Audience Selector**: Single select dropdown (`All Global Travelers`, `Hoen Archipelago Searchers`, `Budget Explorers`, `Luxury & Resort Travelers`, `Family Vacations`).
- **Call-to-Action (CTA) Label**: Single select dropdown (`Explore Deals`, `Book Now`, `View Hotels`, `Rent a Car`).
- **Daily Budget Input**: Currency prefix (`$`), min `$10`, max `$10,000`. Dynamically calculates and displays estimated daily reach (`reach = budget * 230 - 340`).
- **Placement Channel**: Dropdown selector (`Flight & Hotel Search Results`, `Homepage Carousel`, `Destination Guide`).
- **Date Range Schedule**: HTML5 date pickers for Start Date and End Date with minimum date validation (`endDate >= startDate`).

#### 3. Real-Time Live Mockup Preview
- Sticky right-side panel showing a realistic Skyscanner search result card:
  - Updates dynamically as the user types headline, description, changes CTA label, or alters audience format.
  - Toggles media container visibility based on format: hidden for Text Only, hero image for Image & Text, video overlay for Video Ad.
  - Displays "Sponsored Partner" tag, star rating, pricing snippet, and themed CTA button.

---

### ✅ Acceptance Criteria
- [x] All 3 ad format cards are rendered with distinct icons, descriptions, and interactive selection states.
- [x] Selecting an ad format updates the live preview layout and specifications in real time.
- [x] Form fields enforce validation rules (required fields, budget boundaries, valid date ranges).
- [x] Live preview synchronizes seamlessly on every input change without page reload or lag.
- [x] "Save Draft" displays a success confirmation toast and preserves form state.
- [x] Form submission validates inputs and transitions user to the Analytics Dashboard.
- [x] Meets WCAG AA contrast ratios (4.5:1 for body copy, 3:1 for large headings) and supports full keyboard tab navigation.

---

<br>

---

## 📋 Ticket 2: Ad Performance Analytics Dashboard

| Field | Value |
| :--- | :--- |
| **Issue Type** | Story / Feature |
| **Project** | Skyscanner Partner Portal (SKY-ADV) |
| **Summary** | Develop Analytics Dashboard - Ad Performance Tracking & Visual Telemetry |
| **Priority** | High (P1) |
| **Assignee** | Front-End Engineering Team |
| **Components** | UI / Analytics / Data Visualization |

### 📖 User Story
> **As an** advertising partner managing multiple active campaigns,  
> **I want** a clear performance dashboard with high-level KPI tiles, interactive trend charts, and a granular breakdown table,  
> **So that** I can assess return on investment (ROAS) and optimize underperforming campaigns.

---

### 🛠️ Technical Requirements

#### 1. KPI Summary Cards (Top Tier)
- Render 5 responsive KPI metric cards with icons and period-over-period trend badges:
  1. **Total Impressions**: e.g., `1,248,500` (`+14.2% vs last period`).
  2. **Total Clicks**: e.g., `68,420` (`+8.5% vs last period`).
  3. **Average CTR**: e.g., `5.48%` (`+1.2% benchmark`).
  4. **Total Spend**: e.g., `$12,350.00` (`Within allocated budget`).
  5. **Conversions & ROAS**: e.g., `3,180` with a `4.2x ROAS` green pill badge (`+18.7% conversions`).

#### 2. Interactive Data Visualizations
- **Performance Trends Over Time**:
  - Dual-line/area chart showing daily Impressions (Sky Blue `#0770E3`) and Clicks (Teal `#00A698`).
  - Gradient area fill beneath the impressions curve.
  - Hover tooltips displaying exact date and metric values.
- **Conversions by Ad Type**:
  - Horizontal progress bar comparison across `Image & Text Ads`, `Video Ads`, and `Text Only Ads`.
  - Device share breakdown: Mobile App (64%), Desktop Web (31%), Tablet (5%).

#### 3. Granular Campaign Performance Data Table
- Filterable and sortable table listing all campaigns:
  - Columns: *Campaign Name (with ID and Target Audience)*, *Format Badge*, *Status Chip (Active / Paused / Completed)*, *Impressions*, *Clicks*, *CTR*, *Spend*, *Conversions*, *ROAS*, *Action Menu*.
- **Interactive Controls**:
  - Real-time text search filter by campaign name or ID.
  - Dropdown filter by status (`All`, `Active`, `Paused`, `Completed`).
  - Date Range Dropdown (`Last 7 Days`, `Last 30 Days`, `Last 90 Days`, `Year to Date`).
  - "Export CSV" button triggering download of campaign dataset.
  - "Refresh" button triggering live synchronization with ad server.

---

### ✅ Acceptance Criteria
- [x] All 5 KPI tiles render with accurate currency formatting, percentage trends, and semantic icons.
- [x] Changing the Date Range selector dynamically updates the KPI card numbers and chart telemetry.
- [x] Performance trend chart renders cleanly on all desktop screen resolutions (1024px to 1920px).
- [x] Table search and status dropdown filter rows instantaneously in client state.
- [x] Status chips display appropriate color styles (Green for Active, Amber for Paused, Gray for Completed).
- [x] Export button generates and downloads a structured `.csv` file of active campaigns.
- [x] Layout is responsive and preserves readability across desktop, tablet, and mobile viewports.

---

<br>

---

## 📋 Ticket 3: User Feedback Survey

| Field | Value |
| :--- | :--- |
| **Issue Type** | Story / Feature |
| **Project** | Skyscanner Partner Portal (SKY-ADV) |
| **Summary** | Develop User Feedback Survey Form - 5-Question Evaluation Flow |
| **Priority** | Medium (P2) |
| **Assignee** | Front-End Engineering Team |
| **Components** | UI / User Research / Feedback |

### 📖 User Story
> **As the** Skyscanner Product Team,  
> **We want** to collect structured partner feedback on onboarding ease, dashboard clarity, and feature requests,  
> **So that** we can continuously iterate and improve the platform based on empirical user satisfaction data.

---

### 🛠️ Technical Requirements

#### 1. Survey Container & Progress Tracking
- Centered card layout (`max-width: 780px`) with branded Skyscanner feedback header.
- Dynamic visual progress bar (0% to 100%) that fills as questions are completed.
- Step indicator text: e.g., `"3 of 5 answered (60%)"`.

#### 2. Five Structured Question Blocks
1. **Ease of Ad Creation** (Required):
   - 1 to 5 Pill-based Rating Scale with labels (`1: Very Hard`, `2: Difficult`, `3: Neutral`, `4: Easy`, `5: Very Easy`).
2. **Feature Improvement Suggestions** (Optional):
   - Multi-line textarea with real-time character counter (`0 / 500`).
   - Placeholder guidance text highlighting examples (e.g. A/B testing, deeper targeting).
3. **Analytics Dashboard Satisfaction** (Required):
   - 1 to 5 Star Rating Pills with labels (`★1 Poor` to `★5 Excellent`).
4. **Challenges Encountered** (Optional):
   - Multi-select interactive chip selection group (`Budgeting Complexity`, `Media Asset Uploads`, `Audience Targeting`, `Custom Reporting`, `None / Seamless`).
5. **Partner Recommendation / NPS** (Required):
   - Binary toggle: `Yes, Definitely` (Teal with Checkmark) vs `Not at this time` (Coral with X).
   - Follow-up input for primary reason statement.

#### 3. Submission Flow & Success State
- "Submit Feedback" button (Primary Skyscanner Sky Blue) with airplane/paper plane icon.
- "Skip Survey" option routing users back to the dashboard.
- On successful submission, smoothly transition to a **Thank You Confirmation State** featuring a completion graphic, acknowledgement message, and "Return to Analytics Dashboard" CTA.

---

### ✅ Acceptance Criteria
- [x] All 5 question types render with appropriate input controls (Rating pills, Textarea, Checkbox chips, Radio toggle).
- [x] Real-time character counter for Question 2 updates on every keystroke and enforces 500-char limit.
- [x] Answering each question immediately updates the header progress bar and completion percentage.
- [x] Submitting the form validates required questions (Q1, Q3, Q5) and displays validation errors if incomplete.
- [x] Successful submission displays the animated thank-you state and toast confirmation.
- [x] "Skip Survey" and "Return to Analytics Dashboard" properly switch navigation views.
- [x] Fully compliant with accessibility standards (ARIA labels, keyboard navigation, clear error states).
