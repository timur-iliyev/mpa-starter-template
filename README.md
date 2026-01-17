# MPA Starter Template

This template is used for building multi-page applications (MPAs) with modern tools.

Built on the [Minista](https://minista.qranoko.jp/) static site generator framework with a **Desktop-First** responsive design approach.

## Quick Start

To create a new project from this template:

```bash
npm create mpa-starter-template@latest
```

## Table of Contents

- [What's Inside](#whats-inside)
- [Technology Stack](#technology-stack)
- [Scripts](#scripts)
- [Development Guide](#development-guide)
- [Folder Reference](#folder-reference)
- [Accessibility Features](#accessibility-features)
- [Resources & Links](#resources--links)
- [License](#license)

## What's Inside?

The template includes:

- **Minista** framework with static site generation and file-based routing
- **Vite** bundler for fast development and optimized builds
- **JSX** for component-driven UI development
- **SCSS/Sass**
- **PostCSS** with preset-env and px-to-rem conversion
- **Linting & Formatting**: ESLint, StyleLint, and Prettier pre-configured
- **CSS Normalization** for cross-browser consistency
- **Path Aliases** (`src -> @`) configured for cleaner imports
- **Pre-built Components**: 14 reusable, accessible UI components

## Technology Stack

- [Minista](https://minista.qranoko.jp/) - Static site generator with file-based routing
- [Vite](https://vite.dev/) - Next-generation frontend build tool
- [SCSS](https://sass-lang.com/) - CSS preprocessor with powerful features
- [PostCSS](https://postcss.org/) - CSS transformation tool with plugins:
  - [preset-env](https://www.npmjs.com/package/postcss-preset-env) - Modern CSS polyfills and autoprefixing
  - [pxtorem](https://www.npmjs.com/package/postcss-pxtorem) - Automatic px to rem conversion
- [ESLint](https://eslint.org/) - JavaScript linting
- [StyleLint](https://stylelint.io/) - CSS/SCSS linting
- [Prettier](https://prettier.io/) - Code formatting

### Included Dependencies

- [clsx](https://www.npmjs.com/package/clsx) - Utility for combining CSS class names conditionally
- [imask](https://www.npmjs.com/package/imask) - Input masking for phone numbers, cards, dates, etc.
- [Swiper](https://swiperjs.com/) - _Optional_ - Touch slider for carousels (install: `npm install swiper`). Is used for Slider component

## Scripts

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm start`            | Start development server with hot reload       |
| `npm run build`        | Create optimized production build              |
| `npm run preview`      | Preview production build locally               |
| `npm run lint:js`      | Check JavaScript code for issues               |
| `npm run lint:js:fix`  | Automatically fix JavaScript issues            |
| `npm run lint:css`     | Check CSS/SCSS code for issues                 |
| `npm run lint:css:fix` | Automatically fix CSS/SCSS issues              |
| `npm run format`       | Check code formatting compliance               |
| `npm run format:fix`   | Auto-format all code files                     |
| `npm run lint`         | Run all linters (JS + CSS/SCSS + format check) |
| `npm run lint:fix`     | Fix all issues (JS + CSS/SCSS + format)        |

## Development Guide

### Getting Started

1. **Run**: `npm create mpa-starter-template@latest`
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm start`
4. **Open in browser**: Navigate to `http://localhost:5173` (Vite default)

### Creating a New Page

Pages are automatically routed based on files in `src/pages/`:

```
src/pages/
├── index.jsx        → /
├── about.jsx        → /about
├── contact.jsx      → /contact
└── 404.jsx          → 404 error page
```

### Adding a New Component

1. Create folder: `src/components/ComponentName/`
2. Add files: `ComponentName.jsx`, `ComponentName.scss`, `index.js`
   Structure:
   ```
   ComponentName/
   ├── ComponentName.jsx    // Main component
   ├── ComponentName.scss   // Component styles
   ├── index.js            // Export
   └── SubComponentName/      // Optional: sub component
       └── ...
   ```
3. Export in `index.js`:
   ```javascript
   export { default } from './ComponentName'
   ```
4. Import styles in `ComponentName.jsx`:
   ```jsx
   import './ComponentName.scss'
   ```
5. Import and use created component:

   ```jsx
   import ComponentName from '@/components/ComponentName'

   <ComponentName />
   <ComponentName>...</ComponentName>
   ```

### Customizing Mixins & Functions

Edit `src/styles/helpers/` to extend SCSS functionality:

- **mixins.scss** - Add new styling patterns (e.g., `@mixin card-shadow { ... }`)
- **functions.scss** - Add custom calculations (e.g., `@function spacing($multiplier) { ... }`)
- **media.scss** - Add new breakpoints and media query helpers

### Code Style

- **BEM (Block, Element, Modifier)** is recommended: `.component`, `.component__element`, `.component--modifier`, `.is-state`
- **Import paths**: Use `@/` alias instead of relative paths (`import Button from '@/components/Button'`)
- **Classes**: Combine with `clsx` utility for conditional styling

---

## Structure

### public/

Static files that bypass the bundler and are copied directly to the build output. Examples include images, videos, and external assets that don't require processing.

---

### src/

Main source directory containing all application code.

---

### src/assets/

Project assets including images, icons, favicons, and fonts:

- `favicons/` - site favicons and related metadata files.
- `fonts/` - font files used throughout the project.
- `icons/` - SVG icons (typically used in sprite format).
- `images/` - images used across the project, organized into subdirectories by section or purpose.

---

### src/components/

Small, reusable UI components:

- **Accordion** - collapsible section component using native HTML `<details>` and `<summary>` elements. Accepts a title, unique id, optional name (for grouping), and children content. Provides semantic markup with ARIA roles (role="term", role="definition") for accessibility.

- **AccordionGroup** - wrapper component for displaying multiple Accordion components in a list (ordered or unordered). Supports multi-column layout via CSS classes. Automatically handles proper semantic structure with `<ol>` or `<ul>` tags based on the `isOrdered` prop.

- **AnimatedLink** - link component that animates each individual grapheme character on hover. Uses the `getSegmentedString` utility to split text into proper grapheme clusters (supports emoji and diacritics). Each character gets a staggered transition delay for a cascading animation effect.

- **BurgerButton** - hamburger menu button with an animated icon. Uses SVG paths with stroke-dasharray animation to create the hamburger-to-X transformation. Supports custom styling via className and extraAttributes. Typically used with OverlayMenu module.

- **Button** - flexible button component that can render as either `<button>` or `<a>` tag based on the `href` prop. Supports icon rendering (before or after text), label hiding (for icon-only buttons), multiple modes (default or transparent), and custom button types. Integrates with the Icon component.

- **Checkbox** - custom checkbox input component wrapped in a label. Auto-generates unique ID from label text if not provided. Supports required attribute and custom styling. Maintains semantic HTML structure with proper association between label and input.

- **ColorPalette** - component for displaying CSS custom properties (variables) as color swatches. Reads colors from the project's CSS variables and renders them visually with their color names for design system reference.

- **Field** - form field wrapper component for text inputs and textarea elements. Accepts label, placeholder, input type, and other HTML input attributes. Supports input masking via the `mask` prop. Automatically generates unique ID from label text. Includes error handling and validation support.

- **Icon** - SVG icon component that renders icons from a sprite or inline SVG. Accepts icon name and optional fill property. Customizable size and color via CSS variables. Used throughout components like Button and SliderNavigation.

- **Logo** - brand logo component that renders as a link to the homepage. Includes image optimization with lazy loading by default. Accessible with proper aria-label and title attributes.

- **Select** - custom dropdown select component with native HTML fallback on mobile devices. Uses a Proxy-based state system for managing dropdown open/close state, current option, and selection. Automatically positions dropdown left or right to stay within viewport. Supports native select on touch devices and custom dropdown on desktop.

- **Slider** - image carousel/slider component powered by Swiper library. Supports navigation buttons, pagination dots, and scrollbar. Accepts configuration via data-attributes. Navigation and pagination elements can be positioned externally via target element IDs. Slides are responsive and mobile-friendly. **Note:** Requires Swiper dependency to be installed (`npm install swiper`).

- **Table** - data table component with flexible column width management. Accepts headCells array for column headers and rows array for table data. Uses colgroup for proper column width distribution. Supports responsive design with horizontal scrolling on smaller screens.

- **Tabs** - tabbed interface component with full keyboard navigation support and ARIA attributes. Manages active tab state using Proxy system. Supports external navigation element positioning. Automatically handles focus management and provides Home/End/ArrowKey navigation for accessibility.

---

### src/constants/

Constants, enums, configuration objects, dictionaries, and similar static data:

- **MatchMedia.js** - defines media query breakpoint constants and responsive utility values. Returns an object with breakpoint names (mobile, tablet, laptop) and their corresponding min-width values in rem units. Should match breakpoints in `constants.scss` for consistency.

---

### src/layouts/

Structural page components that define the overall page layout:

- **Header** - top navigation layout containing the site logo, burger button for mobile menu, and main navigation menu. Uses OverlayMenu module to manage mobile menu overlay. Includes semantic `<header>` and `<nav>` elements. Responsive design with mobile-friendly overlay menu.

- **Content** - main content wrapper layout that provides a consistent container structure for page body content. Typically contains all the main sections and components of a page between Header and Footer.

- **Section** - reusable page section component with built-in title and optional description header. Centers content using a container class and provides responsive padding. Accepts arbitrary children components and supports aria-labelledby for accessibility. Used for grouping related content into logical sections.

- **Footer** - footer layout displaying site information, links, and additional metadata. Provides consistent footer structure across all pages. Can include copyright, social links, and navigation.

Layouts are responsible for page structure, not specific content.

---

### src/modules/

JavaScript modules that handle component logic, interactions, and initialization:

- **OverlayMenu.js** - manages the overlay menu behavior for mobile navigation. Handles toggle of the hamburger button state and opens/closes the native HTML dialog element. Also locks the document body when the menu is open to prevent background scrolling. Uses data-attributes to identify DOM elements and manages CSS classes for visual state changes.

- **SelectCollection.js** - initializes and manages all Select component instances on the page. Each Select instance extends BaseComponent and uses a Proxy-based state system to automatically re-render when state changes. Handles dropdown visibility, option selection, keyboard navigation, and automatically positions the dropdown (left or right) to keep it visible within the viewport.

- **SliderCollection.js** - initializes Swiper slider instances across the page. Extracts configuration parameters from data-attributes and connects Swiper modules (Navigation, Pagination, Scrollbar). Allows passing custom navigation and pagination elements via external element IDs or default nested elements.

- **TabsCollection.js** - initializes and manages all Tabs component instances on the page. Each Tabs instance extends BaseComponent and manages the active tab state using a Proxy system. Handles keyboard navigation (arrow keys, Home, End), focus management, and ARIA attributes. Allows tabs navigation to be positioned externally via target element ID.

- **InputMaskCollection.js** - initializes IMask library on all input fields marked with the data-js-input-mask attribute. Reads the mask pattern from the data attribute value and applies it to the input field for formatted user input (phone numbers, credit cards, dates, etc.).

---

### src/modules/generic/

Generic, reusable JavaScript modules designed to be shared across multiple projects:

- **BaseComponent.js** - abstract base class that provides a Proxy-based state management system for interactive components. Child classes implement a `render()` method that automatically re-renders when any state property changes. Prevents direct instantiation and throws an error if attempted. Provides the `getProxyState()` method for creating reactive state objects.

---

### src/mocks/

Sample data structures for development and testing:

- **tableData.js** - sample data structure for testing the Table component.
- **testItems.js** - test items for accordion, select, and other collection components.

---

### src/pages/

Page entry files. Minista automatically generates routing based on files in this directory, where each file represents a route/page.

Examples: `index.jsx` (homepage), `404.jsx` (error page).

---

### src/sections/

Reusable full-page sections that combine multiple components together:

- **Hero** - hero banner section typically displayed at the top of pages. Contains headline, description text, and call-to-action elements. Designed to grab attention with large typography and optional background image or color. Used to introduce page content and guide user actions.

---

### src/styles/

Global stylesheet directory containing project-wide styles.

Includes: CSS normalization, font definitions, CSS custom properties (variables), global styles, and utility classes.

#### fonts.scss

Defines font-face rules and imports web fonts used in the project.

#### globals.scss

Contains global element styles, typography settings, and base styles applied throughout the application.

#### variables.scss

Defines CSS custom properties (variables) for colors, spacing, typography, and other design tokens used across the project.

#### utils.scss

Contains utility classes for common CSS patterns:

- `.container` - centers content and sets max-width.
- `.visually-hidden` - hides elements visually but keeps them accessible to screen readers.
- `.hidden-laptop` - hides elements on laptop and smaller screens.
- `.visible-laptop` - shows elements on laptop and smaller screens.
- `.hidden-mobile` - hides elements on mobile and smaller screens.
- `.visible-mobile` - shows elements on mobile and smaller screens.
- `.hidden-mobile-s` - hides elements on small mobile screens.
- `.visible-mobile-s` - shows elements on small mobile and smaller screens.

#### normalize.scss

CSS normalization to ensure consistent styling across different browsers by resetting default styles.

#### src/styles/helpers/

Shared SCSS helper files containing reusable mixins, functions, media query definitions, and constant variables. Helpers are available across the project (configured in minista.config.js).

##### constants.scss

SCSS variables for sizes, spacing, and other constant values. NOTE: `$min-viewport-width` defines the minimum viewport width for which the project is designed (affects fluid calculations).

##### functions.scss

Custom SCSS functions for common calculations:

- `fluid($max, $min, $from: 'desktop')` - calculates fluid sizes between breakpoints. From desktop (by default) to min viewport width.
- `fluid-from-laptop($max, $min)` - calculates fluid sizes starting from laptop breakpoint to the smallest viewport width.
- `fluid-from-tablet($max, $min)` - calculates fluid sizes starting from tablet breakpoint to the smallest viewport width.
- `fluid-from-mobile($max, $min)` - calculates fluid sizes starting from mobile breakpoint to the smallest viewport width.
- `fluid-to($max, $min, $to)` - calculates fluid sizes starting from desktop to a specified breakpoint.
- `fluid-to-laptop($max, $min)` - calculates fluid sizes starting from the desktop breakpoint to the laptop breakpoint.
- `fluid-to-tablet($max, $min)` - calculates fluid sizes starting from the desktop breakpoint to the tablet breakpoint.
- `fluid-to-mobile($max, $min)` - calculates fluid sizes starting from the desktop breakpoint to the mobile breakpoint.

Fluid functions return a calculated CSS `clamp()` expression for responsive sizing.

##### media.scss

Media query mixins for responsive breakpoints (desktop-first):

- `@mixin to-laptop { ... }` - styles for laptop and larger screens.
- `@mixin to-tablet { ... }` - styles for tablet and larger screens.
- `@mixin to-mobile { ... }` - styles for mobile and larger screens.
- `@mixin to-mobile-s { ... }` - styles for small mobile and larger screens.
- `@mixin from-laptop { ... }` - styles for laptop and smaller screens.
- `@mixin from-tablet { ... }` - styles for tablet and smaller screens.
- `@mixin from-mobile { ... }` - styles for mobile and smaller screens.
- `@mixin from-mobile-s { ... }` - styles for small mobile and smaller screens.
- `@mixin hover($hasActiveEffectOnMobile: true) { ... }` - applies hover styles only on devices that support hover, with optional active effect on touch devices.

##### mixins.scss

Reusable SCSS mixins for common CSS patterns:

_Layout & Positioning:_

- `@mixin flex-center($isInline: false)` - centers content using flexbox (inline or block).
- `@mixin abs-cover` - absolute positioning that covers the entire parent element.
- `@mixin abs-center` - absolutely positions element in the center using translate.
- `@mixin abs-x` - absolutely positions element horizontally centered.
- `@mixin abs-y` - absolutely positions element vertically centered.
- `@mixin square-size($size)` - creates a square element with aspect-ratio and sets the width.

_Typography & Text:_

- `@mixin fluid-text($max, $min)` - applies fluid typography scaling between the smallest and largest viewport widths using the fluid function.

_Visibility:_

- `@mixin hide` - completely hides an element.
- `@mixin visually-hide` - visually hides an element but keeps it in the document flow.
- `@mixin visually-show` - reverses visually-hide and makes element visible.
- `@mixin visually-hidden` - screen-reader-only element. Element is hidden from view but accessible to assistive technologies.

_Accessibility & States:_

- `@mixin focus-visible` - applies keyboard focus styles with white 2px outline and 4px offset.
- `@mixin disabled` - applies disabled state styling (reduced opacity and cursor change to `not-allowed`).

---

### src/utils/

Reusable utility and helper functions used throughout the project:

- **getIdFromString.js** - generates URL-safe IDs from text strings.
- **getSegmentedString.js** - splits text into an array of individual grapheme clusters using `Intl.Segmenter`. Properly handles complex Unicode characters (emoji, diacritics, combining marks). Essential for accurate character-level animations and text processing.
- **getDataAttrNameFromSelector.js** - extracts the data attribute name from a CSS selector string (`[data-js]` => `data-js`).
- **getParams.js** - extracts and parses JSON parameters from a data attribute on a DOM element. Returns parsed object with configuration values passed via data-js attribute.
- **pxToRem.js** - converts pixel values to rem units based on the root HTML element's font size.

---

### src/global.jsx

Global layout applied to all pages.

This is a Minista feature that defines shared layouts, global styles, and common wrapper components applied to every page.

---

### src/main.js

JavaScript entry point executed in the browser.

Used for initializing modules, registering global event listeners, and managing application-wide behaviors.

---

### Root Configuration Files

- **.gitignore** - specifies files and directories that Git should ignore.
- **.prettierignore** - specifies files and directories that Prettier should skip.
- **eslint.config.js** - ESLint configuration for linting JavaScript and JSX code.
- **jsconfig.json** - path aliases (e.g., `@/src`) and IDE tooling configuration.
- **minista.config.js** - Minista framework configuration and build settings.
- **package.json** - project metadata, npm scripts, and dependency declarations.
- **package-lock.json** - locked versions of all npm dependencies for reproducible installs.
- **postcss.config.js** - PostCSS plugin configuration (preset-env, px-to-rem converter, etc.).
- **prettier.config.js** - code formatting rules for consistent code style.
- **stylelint.config.js** - Stylelint configuration for CSS/SCSS linting and style validation.
- **README.md** - project documentation and setup guide (this file).

---

## Accessibility Features

- **Semantic HTML**: All components use proper HTML5 semantic elements (`<button>`, `<label>`, `<dialog>`, etc.)
- **ARIA Attributes**: Full ARIA support for tabs, dropdowns, modals (roles, labels, expanded states)
- **Keyboard Navigation**: All interactive components support keyboard navigation (Tab, Enter, Arrow Keys, Escape)
- **Focus Management**: Proper focus handling and visible focus indicators (see `@mixin focus-visible`)
- **Reduced Motion**: `prefers-reduced-motion` media query support built-in (see `variables.scss`)

---

## Resources & Links

### Documentation

- [Minista Documentation](https://minista.qranoko.jp/) - Static site generator framework
- [Vite Documentation](https://vitejs.dev/) - Next-generation frontend build tool
- [SCSS Guide](https://sass-lang.com/guide) - CSS preprocessor documentation

### Build & Development Tools

- [PostCSS](https://postcss.org/) - CSS transformation tool
- [ESLint](https://eslint.org/) - JavaScript linting
- [StyleLint](https://stylelint.io/) - CSS/SCSS linting
- [Prettier](https://prettier.io/) - Code formatter

### Libraries

- [clsx](https://www.npmjs.com/package/clsx) - Utility for combining class names
- [imask](https://www.npmjs.com/package/imask) - Input masking library
- [Swiper](https://swiperjs.com/) - Touch slider library
- [Intl.Segmenter API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) - Grapheme segmentation

### Accessibility & Standards

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) - ARIA guidelines
- [Web Accessibility Standards (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility checklist

### Methodologies

- [BEM (Block, Element, Modifier)](https://bem.info/) - CSS naming convention

---

## License

MIT
