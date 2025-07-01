Project Rules: Personal Portfolio Website
This document establishes the project organization rules for the personal portfolio website, ensuring a consistent, navigable, and maintainable codebase. These rules are designed to optimize collaboration, especially with AI agents.

1. File Naming Conventions
Components: PascalCase.tsx (e.g., Header.tsx, ProjectCard.tsx).

Hooks: useCamelCase.ts (e.g., useScrollDirection.ts).

Utilities/Helpers: camelCase.ts (e.g., formatDate.ts, apiClient.ts).

Constants: UPPER_CASE_SNAKE.ts (e.g., API_ENDPOINTS.ts).

Context: PascalCaseContext.tsx (e.g., ThemeContext.tsx).

Styles (if any custom CSS needed, sparingly): kebab-case.css (e.g., global-styles.css).

Documentation: kebab-case.md (e.g., project-overview.md).

2. Folder Structure (with a visual file tree)
The project will follow a modular and structured approach, making it easy to locate and understand different parts of the application.

.
├── public/                 // Static assets (images, favicon)
│   └── favicon.ico
│   └── logo.svg
├── src/                    // All application source code
│   ├── components/         // Reusable UI components
│   │   ├── common/         // Generic components (Button, Input, Modal)
│   │   │   └── Button.tsx
│   │   └── layout/         // Layout-specific components (Header, Footer, MainLayout)
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── hooks/              // Custom React Hooks
│   │   └── useWindowSize.ts
│   ├── pages/              // Top-level page components (routable)
│   │   ├── index.tsx       // Homepage
│   │   ├── about.tsx       // About page
│   │   ├── projects.tsx    // Projects listing page
│   │   └── contact.tsx     // Contact page
│   ├── styles/             // Tailwind CSS setup (and any rare custom CSS)
│   │   └── globals.css     // Main Tailwind import and base styles
│   ├── utils/              // Utility functions, helpers, constants
│   │   ├── helpers.ts      // Small, general utility functions
│   │   ├── constants.ts    // Global constants
│   │   └── types.ts        // Global TypeScript types/interfaces
│   ├── App.tsx             // Main application component
│   └── main.tsx            // Entry point for React (ReactDOM.createRoot)
├── _docs/                  // Project documentation (all .md files)
│   ├── project-overview.md
│   ├── user-flow.md
│   ├── tech-stack.md
│   ├── theme-guide.md
│   ├── ui-rules.md
│   ├── project-rules.md    // This document
│   └── phase-plan.md
├── .gitignore              // Files/folders to ignore in Git
├── package.json            // Project dependencies and scripts
├── tsconfig.json           // TypeScript configuration
├── postcss.config.js       // PostCSS configuration (for Tailwind)
└── tailwind.config.js      // Tailwind CSS configuration

3. Where Different Types of Files Go
public/: Stores static assets that are directly accessible by the browser (e.g., images, favicons).

src/components/: Contains all reusable React components.

src/components/common/: For very generic, highly reusable UI elements (e.g., Button, Input, Modal).

src/components/layout/: For components that define the overall structure or specific sections of pages (e.g., Header, Footer, Sidebar).

Specific feature components can reside directly under components/ or in a subfolder named after the feature (e.g., components/projects/ProjectCard.tsx).

src/hooks/: Custom React hooks for encapsulating reusable logic (e.g., useFormInput, useDebounce).

src/pages/: Top-level components that represent full pages of the application. These will typically align with the main routes (e.g., /, /about, /projects, /contact).

src/styles/: Contains global CSS imports, Tailwind configuration, and any minimal custom CSS.

src/utils/: Houses utility functions, constants, and global type definitions that are not specific to any single component or page.

src/App.tsx: Main application component.

src/main.tsx: Entry point for React (ReactDOM.createRoot).

_docs/: This dedicated folder stores all project documentation, including this guide, for easy AI access and project understanding.

4. Code Commenting Requirements
Functions/Components: Every significant function or React component (especially those exported) must have a JSDoc-style comment block above its definition.

Content: Briefly describe its purpose, its parameters (if any), and what it returns.

Complex Logic: Inline comments (//) should be used to explain complex or non-obvious lines or blocks of code.

Temporary Code: Use // TODO: or // FIXME: comments for temporary notes on unfinished or buggy code.

AI Optimization: Comments should be clear, concise, and accurate, providing helpful context for both human developers and AI agents trying to understand or modify the code.

5. File Size Limits (Maximum 500 lines)
Strict Adherence: No single .tsx, .ts, or .css file (excluding generated build files) should exceed 500 lines of code.

Purpose: Enforces modularity, promotes readability, simplifies debugging, and makes it easier for AI agents to process and understand individual files without losing context.

Action for Exceeding: If a file approaches or exceeds this limit, refactor it by breaking down logic or UI into smaller, more focused components or utility functions.

6. Import/Export Patterns
Absolute Imports (Recommended): Configure tsconfig.json to allow absolute imports from the src directory (e.g., import Button from 'components/common/Button'; instead of ../../components/common/Button';). This improves readability and refactoring ease.

Named Exports for Utilities: Prefer named exports for utility functions and constants (e.g., export const add = () => {}; then import { add } from 'utils/helpers';).

Default Exports for Components/Pages: Use default exports for React components and pages (e.g., export default function MyComponent() {}; then import MyComponent from 'components/MyComponent';).

Index Files for Grouped Exports: For folders containing multiple components or utilities, consider using an index.ts file to re-export them for cleaner imports (e.g., export * from './Button'; export * from './Input';). This can simplify imports from components/common to import { Button, Input } from 'components/common';.

Type Imports: Explicitly import types using import type { MyType } from './types'; for clarity.

Adhering to these project rules will ensure your personal portfolio website's codebase is well-organized, maintainable, and highly interpretable for efficient development, especially when working with AI assistance.