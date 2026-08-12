# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## 🛠 Tech Stack
*   **Framework:** React Native with Expo (TypeScript, Expo Development Build)
*   **State Management:** Redux (with Redux Saga for asynchronous event handling and side effects)
*   **Database:** WatermelonDB (Offline-first, backed by SQLite via `@morrowdigital/watermelondb-expo-plugin`)
*   **Styling:** React Native StyleSheet (or preferred UI library/components)
*   **Environment:** Node.js, Metro Bundler.

## 🎨 UI & Design System (Design Tokens)
The application follows a modern, clean, and highly rounded aesthetic. The agent must utilize the following design tokens when building UI components to ensure visual consistency.

### 1. Color Palette
*   **Primary Brand (Orange):** `#FF5C00` (Used for primary buttons, active icons, badges, and key highlights)
*   **Primary Brand Light (Faded Orange):** `#FFF0E5` (Used for active tab backgrounds or subtle highlights)
*   **App Background:** `#F8F9FA` (Off-white/light gray used for the main screen background to make white cards pop)
*   **Surface/Card Background:** `#FFFFFF` (Pure white for all content cards, bottom sheets, and floating elements)
*   **Text - Primary:** `#2D2D2D` (Near-black for headings and primary body text)
*   **Text - Secondary:** `#8C8C8C` (Medium gray for subtitles, placeholder text, and inactive icons)
*   **Dividers/Borders:** `#EBEBEB` (Very light gray for subtle line separators)

### 2. Typography
*   **Font Family:** `Inter`, `SF Pro Display`, or `Poppins` (Clean, geometric sans-serif).
*   **H1 (Screen Titles):** 22px - 24px, Font Weight: Bold (700)
*   **H2 (Card/Section Titles):** 16px - 18px, Font Weight: Semi-Bold (600)
*   **Body Text (Primary):** 14px, Font Weight: Medium (500)
*   **Body Text (Secondary/Subtitles):** 12px, Font Weight: Regular (400), Color: Text - Secondary
*   **Button Text:** 16px, Font Weight: Semi-Bold (600)

### 3. Spacing & Layout (Margins & Gaps)
The UI relies on generous breathing room and consistent grid spacing.
*   **Global Screen Padding:** 20px (Horizontal margins on the left and right of the screen)
*   **Section Gaps:** 24px (Vertical space between different horizontal sections, e.g., between "Offres du jour" and "Catégories")
*   **Item Gaps:** 12px to 16px (Space between individual items within a list or grid)
*   **Inner Card Padding:** 16px (Standard padding inside white surface cards)

### 4. Borders & Radii
The design features heavily rounded, friendly corners.
*   **Standard Cards/Images:** `20px` border radius
*   **Small Elements (Tags/Badges):** `8px` border radius
*   **Primary Buttons:** `999px` or `50px` (Fully rounded/pill shape)

### 5. Shadows & Elevation
Shadows are extremely soft, diffuse, and subtle to create a floating effect without looking heavy.
*   **Card Elevation:** 
    *   Y-Offset: 4px
    *   Blur: 12px
    *   Color: `rgba(0, 0, 0, 0.04)`
*   **Bottom Navigation Bar Elevation:**
    *   Y-Offset: -4px
    *   Blur: 16px
    *   Color: `rgba(0, 0, 0, 0.05)`
