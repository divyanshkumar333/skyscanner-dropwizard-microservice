# Skyscanner Ad Platform - Figma UI/UX Design Specifications

This guide contains the design system tokens, component architecture, layout grids, and step-by-step instructions for creating and presenting the Skyscanner Ad Platform in Figma.

---

## 🎨 Design System Tokens

### 1. Color Palette

| Token Name | HEX Code | RGB | Semantic Role |
| :--- | :--- | :--- | :--- |
| `color-primary` | `#0770E3` | `rgb(7, 112, 227)` | Skyscanner Sky Blue (Primary CTA, Active Tabs, Highlights) |
| `color-primary-hover` | `#0062E3` | `rgb(0, 98, 227)` | Darker Sky Blue for hover states |
| `color-primary-light` | `#EBF4FE` | `rgb(235, 244, 254)` | Light Sky Blue tint for card backgrounds & badges |
| `color-navy` | `#02122C` | `rgb(2, 18, 44)` | Skyscanner Midnight Navy (Header, Dark Accents) |
| `color-teal` | `#00A698` | `rgb(0, 166, 152)` | Growth Teal (Clicks KPI, Success tags, Verified icons) |
| `color-teal-light` | `#E8F8F5` | `rgb(232, 248, 245)` | Light Teal tint for ROAS badges |
| `color-coral` | `#FF7B59` | `rgb(255, 123, 89)` | Warm Coral (Alerts, New badges, Video Ad icon) |
| `color-purple` | `#7047EB` | `rgb(112, 71, 235)` | Violet (CTR KPI, Text Ad icon background) |
| `bg-canvas` | `#F1F2F8` | `rgb(241, 242, 248)` | Off-white canvas background |
| `bg-card` | `#FFFFFF` | `rgb(255, 255, 255)` | Pure white card surfaces |
| `text-primary` | `#111236` | `rgb(17, 18, 54)` | Dark Navy body copy and primary headlines |
| `text-secondary` | `#68697F` | `rgb(104, 105, 127)` | Muted gray for subheadings and helpers |
| `border-subtle` | `#E2E8F0` | `rgb(226, 232, 240)` | Clean structural borders |

---

### 2. Typography Hierarchy (Font: *Inter* or *Skyscanner Circular*)

| Style Name | Font Size | Line Height | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Page Title** | 30px (`1.85rem`) | 38px | 800 (Bold) | `-0.025em` | Main page view titles |
| **Heading 1** | 24px (`1.5rem`) | 32px | 700 (Bold) | `-0.02em` | Section headers, Survey title |
| **Heading 2** | 20px (`1.25rem`) | 28px | 700 (Bold) | `-0.015em` | Form section titles, Modal headings |
| **Heading 3** | 16px (`1.0rem`) | 24px | 700 (Bold) | `0em` | Card titles, Table header titles |
| **Body Default** | 14px (`0.875rem`) | 22px | 500 (Regular) | `0em` | Form inputs, Table rows, Descriptions |
| **Body Small / Helper** | 12px (`0.75rem`) | 18px | 400 (Regular) | `+0.01em` | Field helpers, Timestamps, Subtitles |
| **Hero Numeric (KPI)** | 26px (`1.65rem`) | 32px | 800 (ExtraBold) | `-0.02em` | Large KPI metrics numbers |
| **Badge / Tag** | 11px (`0.685rem`) | 14px | 700 (Bold) | `+0.04em` | All-caps tags (`RECOMMENDED`, `LIVE`) |

---

### 3. Layout Grid & Spacing Scale

- **Canvas Size**: `1920 × 1080 px` (or `1440 × 900 px` standard desktop).
- **Layout Grid**: 12 Columns, Container `1440px`, Margins `48px`, Gutters `24px`.
- **Spacing Increments**: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `48px`.
- **Corner Radii**:
  - `Small`: `6px` (Badges, Buttons, Mini icons)
  - `Medium`: `10px` (Inputs, Ad selection cards, KPI tiles)
  - `Large`: `16px` (Main surface cards, Mockup preview)
  - `Pill`: `999px` (Status badges, Chip selections)

---

## 🧩 Figma Component Set Architecture

### 1. `Ad Type Card` Component
- **Properties**:
  - `Format`: `Text` | `Image & Text` | `Video`
  - `State`: `Default` | `Hover` | `Selected`
- **Layers**:
  - Card Frame (`AutoLayout`, Padding: `16px`, Gap: `12px`, Radius: `10px`)
  - Icon Frame (`44 × 44 px`, Radius: `10px`, background tint)
  - Title Text (`15px Bold`)
  - Description Text (`12px Regular`)
  - Format Tag (`10px Bold Uppercase`)
  - Radio Indicator Circle (`18 × 18 px`)

### 2. `KPI Metric Tile` Component
- **Properties**:
  - `Metric`: `Impressions` | `Clicks` | `CTR` | `Spend` | `Conversions`
  - `Trend`: `Positive` | `Neutral` | `Negative`
- **Layers**:
  - Metric Header (Title + Colored Icon Badge)
  - Numeric Value Display (`26px ExtraBold`)
  - Trend Indicator (Upward Arrow + `+14.2% vs last period`)

### 3. `Survey Rating Pill` Component
- **Properties**:
  - `Score`: `1` | `2` | `3` | `4` | `5`
  - `State`: `Default` | `Hover` | `Selected`
- **Layers**:
  - Pill Container (Height: `64px`, Width: `100px`, Border: `2px solid`)
  - Score Number (`16px Bold`)
  - Label (`10px Medium`, e.g., "Very Easy", "Difficult")

---

## 🛠️ Step-by-Step Instructions to Create in Figma

1. **Setup File**:
   - Create a new Figma file named **"Skyscanner Ad Platform Redesign"**.
   - Create 3 Pages in the left sidebar:
     - `1. Ad Creation`
     - `2. Analytics Dashboard`
     - `3. User Feedback Survey`

2. **Setup Icons & Plugins**:
   - Install **Eva Icons** or **Feather Icons** plugin.
   - Install **Chart** or **Data Pop** plugin for generating sample vector graphs.

3. **Page 1: Ad Creation**:
   - Create a `1440 × 900` Frame.
   - Insert Top Navbar (`Height: 70px`, Fill: `#02122C`).
   - Draw 2-column layout (Left: `720px Form Card`, Right: `440px Sticky Preview Card`).
   - Place the 3 Ad Type Cards side-by-side with Eva icons.
   - Add the input form fields with clean labels, budget slider, and CTA dropdown.
   - Build the Search Result Preview card on the right with a "Sponsored Partner" tag and "Explore Deals" CTA button.

4. **Page 2: Analytics Dashboard**:
   - Add 5 KPI cards in a 5-column grid at the top.
   - Add the Dual-line performance trend chart (Impressions in `#0770E3`, Clicks in `#00A698`).
   - Add the Conversion comparison horizontal bar chart.
   - Insert the Campaign Performance Data Table with status chips (`Active`, `Paused`, `Completed`).

5. **Page 3: User Feedback Survey**:
   - Create centered `780px` survey card.
   - Add the progress bar at the top (fill: gradient `#0770E3` to `#00A698`).
   - Add the 5 question blocks with rating pills, textarea character counter, chips, and Yes/No toggle.
   - Include "Submit Feedback" and "Skip Survey" buttons.

6. **Sharing Settings**:
   - Click **Share** (top-right of Figma).
   - Set to **"Anyone with the link can view"**.
   - Copy the shareable link for inclusion in your Jira tickets.
