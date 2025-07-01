UI Rules: Personal Portfolio Website
This document outlines the user interface rules for the personal portfolio website, ensuring consistency, responsiveness, and adherence to design principles. These rules are informed by the "Theme Guide."

1. Responsive Breakpoints
Leveraging Tailwind CSS's default breakpoints to ensure optimal viewing across various devices:

Small (sm): 640px and up (for small tablets, large phones in landscape)

**Medium (md): 768px and up (for tablets, small laptops)

Large (lg): 1024px and up (for desktops)

Extra Large (xl): 1280px and up (for larger desktops)

2XL (2xl): 1536px and up (for very large screens)

All components and layouts should be designed with a mobile-first approach, applying base styles for smaller screens and then using responsive prefixes (sm:, md:, etc.) to adjust for larger viewports.

2. Component Patterns to Follow
All React components will adhere to the following patterns, keeping components under 500 lines:

Functional Components with Hooks: All components will be functional and utilize React Hooks (useState, useEffect, useRef, useContext, etc.) for state and lifecycle management.

TypeScript Interfaces: Explicit TypeScript interfaces will be defined for all component props to ensure strong typing and better code predictability.

Single Responsibility Principle: Each component should ideally have one primary purpose. Break down complex UIs into smaller, manageable components.

Styling via Tailwind CSS: All component styling will be applied directly through Tailwind CSS utility classes in the JSX. No inline styles or separate CSS files (unless absolutely necessary for complex custom animations not achievable with Tailwind).

Reusability: Design components to be as generic and reusable as possible across different parts of the application.

Clear Prop Drilling vs. Context: For passing data, favor prop drilling for direct parent-child communication. Consider React Context for global state that many components need to access.

Semantic HTML: Use appropriate semantic HTML tags (<header>, <nav>, <main>, <section>, <footer>, <button>, <form>, etc.) for better accessibility and SEO.

3. Layout Grid System
Flexbox & CSS Grid: Utilize Tailwind's flex and grid utilities for all layout structures.

Main Layout: The overall page layout (header, main content, footer) will use Flexbox or Grid.

Content Sections: Within sections (e.g., project showcase, about section), use Grid for organized, multi-column layouts, especially for responsive adjustments. Flexbox will be used for smaller, one-dimensional alignments (e.g., aligning items in a navigation bar, buttons in a row).

Container Usage: Use a main max-w-screen-xl mx-auto px-4 (or similar responsive container) to centralize content and provide consistent padding on larger screens.

4. Accessibility Requirements (WCAG 2.1 AA Guidelines)
Semantic HTML: As mentioned, use proper semantic HTML tags.

Keyboard Navigation: All interactive elements (buttons, links, form fields) must be fully navigable and operable using only the keyboard. Ensure proper focus management.

ARIA Attributes: Use ARIA attributes (aria-label, aria-describedby, role, etc.) where semantic HTML is insufficient to convey meaning to assistive technologies (e.g., custom modals, complex widgets).

Color Contrast: Ensure text and interactive elements meet WCAG AA contrast ratios, adhering to the color palette defined in the Theme Guide.

Image Alt Text: All meaningful images must have descriptive alt attributes.

Form Labels: All form fields must have associated <label> elements or aria-label for accessibility.

Focus Indicators: Ensure clear visual focus indicators for keyboard users (default browser outlines are usually sufficient with proper styling).

5. Loading States
Purpose: Provide visual feedback to the user when content is being fetched or an action is in progress.

Patterns:

Skeleton Screens: For larger content blocks (e.g., project cards loading), display a placeholder "skeleton" shape that mimics the content structure.

Spinners/Loaders: For smaller, localized actions (e.g., submitting a form, loading a specific image), use a simple, subtle spinner.

Disabled States: Disable interactive elements (buttons) while an action is pending to prevent double submissions.

Consistency: Use consistent loading indicators throughout the site.

6. Error States
Purpose: Clearly communicate to the user when something has gone wrong, and ideally, suggest a solution or next steps.

Patterns:

Form Validation Errors: Display inline error messages directly below the problematic form field when input is invalid (e.g., "Invalid email format"). Use the red color from the Theme Guide (#DC3545).

Submission Errors: For network or server-side issues after form submission, display a clear, concise error message (e.g., "Message failed to send. Please try again later.") often in a message box.

Fetch Errors (e.g., Project Data): If content fails to load, display a user-friendly message (e.g., "Failed to load projects. Please refresh the page.") instead of a blank screen.

User Guidance: Avoid technical jargon. Guide the user on what they can do next.

7. Empty States
Purpose: Provide a friendly and informative message when a section or list has no content.

Patterns:

Placeholder Text: For sections that might be empty (e.g., "No projects found yet" if it were a dynamic list).

Call to Action: If appropriate, include a call to action (e.g., "Add your first project" if the site were editable).

Tone: Maintain a helpful and encouraging tone.

These UI rules, in conjunction with the Theme Guide, will ensure a consistent, accessible, and user-friendly experience for your personal portfolio website.
