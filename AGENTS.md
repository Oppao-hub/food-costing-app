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

## 📱 Screens & Components Architecture
**File:** `screens_and_components.md`  
**Purpose:** Defines the UI component hierarchy, ensuring DRY (Don't Repeat Yourself) principles, consistent styling based on the design tokens, and a logical directory structure.

---

### 📁 Directory Structure
```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── atoms/       # Base UI elements (Buttons, Inputs, Typography)
│   ├── molecules/   # Simple groupings (Form Fields, List Rows)
│   └── organisms/   # Complex layouts (Cards, Modals)
├── navigation/      # Stack and Tab navigators
└── screens/         # Full screen views
```

### 🧩 Reusable Components (DRY Principle)
To maintain consistency and minimize redundant code, these components must be built first and reused across all screens. They should strictly inherit styles from the defined Design Tokens.

#### Atoms
*   **Typography:** A wrapper text component accepting props for variant (h1, h2, bodyPrimary, bodySecondary) to enforce standard font sizes and weights.
*   **PrimaryButton:**
    *   Background: `#FF5C00`
    *   Border Radius: 999px (Pill)
    *   Text: 16px, Semi-Bold, White.
*   **SecondaryButton:**
    *   Background: `#FFF0E5`
    *   Text Color: `#FF5C00`
*   **IconButton:** Circular button with a soft shadow for actions like edit, delete, or back.
*   **Card:**
    *   Background: `#FFFFFF`
    *   Border Radius: 20px
    *   Padding: 16px
    *   Elevation: Y-4px, Blur 12px, `rgba(0,0,0,0.04)`

#### Molecules
*   **InputField:** Combines a label (Typography secondary) and a text input field. Needs states for default, active/focused (orange border), and error.
*   **SelectDropdown:** Specifically for selecting Units (g, mL, pieces) or Target Margins.
*   **DataRow:** A flexible row component for displaying key-value pairs (e.g., "Total Cost" on the left, "₱56.55" on the right).
*   **ListItem:** Used in inventory and OPEX lists. Contains a title, optional subtitle (supplier), and right-aligned action icons or price.

#### Organisms
*   **FormModal:** A bottom sheet modal (using the 20px top border radius) to quickly add new OPEX items or ingredients without leaving the current screen.
*   **RecipeCard:** Displays the Recipe Name, Selling Price, and Profit/Order prominently.

### 📱 Screens & Views

#### 1. Main Navigation (Bottom Tabs)
*   **Behavior & Styling:** 
    *   **Inactive State:** Use an outline (line) icon.
    *   **Active State:** Use a filled icon with the Primary Brand color (`#FF5C00`).
    *   **Labels:** Display a text label below the icon.
    *   **Animation:** Include a smooth animation (e.g., subtle scale, spring, or fade) when navigating between tabs.
*   **Dashboard** (Home Icon)
*   **Inventory** (Box/Package Icon)
*   **Recipes** (Chef Hat/Menu Icon)
*   **OPEX** (Receipt/Calculator Icon)

#### 2. Screen Specifications
*   **DashboardScreen.tsx**
    *   **Purpose:** The business overview and breakeven tracker.
    *   **Components Used:**
        *   Card (for the Top KPI Trackers: Gross Revenue, Gross Profit, Monthly OPEX, Net Profit).
        *   SectionHeader ("Breakeven Analysis").
        *   ListItem (mapping over recipes to show extra orders needed).

*   **InventoryScreen.tsx (Top-Tabbed)**
    *   **Purpose:** Manage raw materials. Contains top tabs to switch between "Ingredients" and "Packaging".
    *   **Components Used:**
        *   ListItem (renders the database rows).
        *   Floating Action Button (FAB): Large `#FF5C00` button fixed at the bottom right (+ icon) to trigger the ItemFormScreen.

*   **ItemFormScreen.tsx (Stack View or Modal)**
    *   **Purpose:** Data entry for new ingredients/packaging.
    *   **Components Used:**
        *   InputField (Name, Supplier, Package Price, Qty, Shipping).
        *   SelectDropdown (Unit selection).
        *   PrimaryButton ("Save Item").

*   **OpexScreen.tsx**
    *   **Purpose:** Manage fixed monthly costs.
    *   **Components Used:**
        *   Card (Summary block showing Monthly OPEX and 5% Contingency).
        *   ListItem (Iterating through expenses).
        *   PrimaryButton ("Add Expense").

*   **RecipeListScreen.tsx**
    *   **Purpose:** Grid or list of all created recipes.
    *   **Components Used:**
        *   RecipeCard mapping.
        *   FAB to create a new recipe.

*   **RecipeDetailScreen.tsx**
    *   **Purpose:** The heavy-lifting calculator view.
    *   **Components Used:**
        *   Typography (H1 for Recipe Name).
        *   Two Card organisms: One for "Ingredients Needed" and one for "Packaging Needed".
        *   DataRow (For the Pricing & Margin block: Subtotals, VAT, Selling Price, Profit).
        *   SecondaryButton ("Apply PWD/Senior Discount").

### 🖼 Required Assets

#### 1. Vector Icons (SVG / react-native-vector-icons)
Ensure icons have a consistent stroke width (usually 1.5px or 2px) and rounded caps to match the UI style.
*   `icon-home` (Dashboard)
*   `icon-box` (Inventory)
*   `icon-receipt` (OPEX)
*   `icon-book` (Recipes)
*   `icon-plus` (For FABs and add buttons)
*   `icon-chevron-right` / `icon-chevron-left` (Navigation)
*   `icon-edit` / `icon-trash` (Management actions)
*   `icon-search` (For finding ingredients quickly)

#### 2. Static Images / Illustrations
*   `empty-inventory.png`: A soft, friendly illustration (e.g., an open empty box) for when the database has no ingredients yet.
*   `empty-recipes.png`: An illustration (e.g., a blank recipe card or plate) for the initial state of the Recipe screen.
