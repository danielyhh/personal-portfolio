Phase Plan: Personal Portfolio Website
This document outlines an actionable phase plan with clear checklists for developing the personal portfolio website. Each phase is designed to result in a working application, building incrementally on the previous one, and includes integrated testing steps.

Phase 1: Setup (All Technical Foundation)
Goal: Establish the core development environment and project structure. Result: A runnable, empty React application with basic file structure and styling setup.

Checklist:
Project Initialization:

[ ] Create a new project folder for the portfolio.

[ ] Open the project folder in Cursor IDE.

[ ] Initialize a new React TypeScript project (e.g., using Vite or Create React App, though Vite is recommended for speed).

Documentation Setup:

[ ] Create the _docs folder within the project root.

[ ] Move project-overview.md, user-flow.md, tech-stack.md, theme-guide.md, ui-rules.md, project-rules.md (this document), and phase-plan.md into the _docs folder.

Version Control:

[ ] Initialize a Git repository in the project root.

[ ] Create a .gitignore file based on typical React/Node.js projects.

[ ] Make the initial commit to Git.

Styling Configuration (Tailwind CSS):

[ ] Install Tailwind CSS, PostCSS, and Autoprefixer.

[ ] Configure tailwind.config.js and postcss.config.js.

[ ] Include Tailwind directives in src/styles/globals.css.

TypeScript Configuration:

[ ] Verify tsconfig.json is set up correctly for React and absolute imports (as per project-rules.md).

Initial Components & Pages:

[ ] Create App.tsx and main.tsx (or index.tsx for CRA).

[ ] Create src/pages/index.tsx for the homepage shell.

[ ] Create src/components/layout/Header.tsx and Footer.tsx shells.

[ ] Integrate Header, Footer, and page content into App.tsx.

Basic Theming:

[ ] Apply primary background color from theme-guide.md to the main application body.

[ ] Set up basic font family from theme-guide.md in global CSS.

Testing Steps (Phase 1):
[ ] Run the development server (npm run dev or npm start).

[ ] Verify the application loads in the browser without errors.

[ ] Inspect element to confirm Tailwind CSS is loaded and applied.

[ ] Check console for any warnings or errors.

Phase 2: MVP (Minimum Working Version)
Goal: Implement the core functionality to showcase projects and provide contact, delivering the essential user flow. Result: A publicly accessible website with About, Projects showcase (basic cards), and a functional contact form.

Checklist:
Core Layout Components:

[ ] Fully implement Header.tsx with navigation links (Home, About, Projects, Contact) using Tailwind for styling and responsiveness as per ui-rules.md and theme-guide.md.

[ ] Fully implement Footer.tsx with basic copyright and relevant links/social icons.

Homepage Content (src/pages/index.tsx):

[ ] Create the Hero section with a headline/tagline and an introductory paragraph.

[ ] Add calls to action (e.g., "Learn More," "View Projects").

[ ] Incorporate subtle animations (e.g., fade-in) as per theme-guide.md.

About Section (src/pages/about.tsx):

[ ] Develop the About page with an introduction, skills list, and brief experience/education highlights.

[ ] Use appropriate typography and spacing from theme-guide.md.

Project Showcases (src/pages/projects.tsx & src/components/projects/ProjectCard.tsx):

[ ] Create src/pages/projects.tsx to list projects.

[ ] Develop a reusable ProjectCard.tsx component following ui-rules.md (under 500 lines, with props for title, description, image, links).

[ ] Populate projects.tsx with 3 mock project data entries, each rendered using ProjectCard.

[ ] Apply subtle shadow styles and border radius from theme-guide.md to project cards.

Contact Form (src/pages/contact.tsx & src/components/forms/ContactForm.tsx):

[ ] Create src/pages/contact.tsx page.

[ ] Develop src/components/forms/ContactForm.tsx with Name, Email, and Message fields.

[ ] Integrate a client-side email service (e.g., EmailJS) for form submission.

[ ] Implement basic success and error messages for form submission.

[ ] Add loading states (e.g., disabling button) during submission.

Basic Responsiveness:

[ ] Ensure all pages and main components adapt gracefully to sm and md breakpoints as defined in ui-rules.md.

Testing Steps (Phase 2):
[ ] Navigate through all main pages (Home, About, Projects, Contact).

[ ] Test all navigation links.

[ ] Verify responsiveness on different screen sizes (using browser developer tools).

[ ] Test the contact form submission (both success and simulate error).

[ ] Check console for any new errors.

Phase 3: Enhancement (Additional Features)
Goal: Refine existing features and add improvements to user experience and content presentation. Result: A more dynamic and engaging portfolio with detailed project views and enhanced interaction.

Checklist:
Dedicated Project Detail Pages:

[ ] Create src/pages/projects/[slug].tsx (or a similar dynamic routing structure) for individual project detail pages.

[ ] Populate each project detail page with comprehensive content (My Role, Technologies, Problem Solved, Key Features, Links).

[ ] Implement dynamic routing to fetch individual project details.

Improved Visuals & Content:

[ ] Replace mock project visuals with high-quality screenshots/GIFs (from public/ folder).

[ ] Ensure consistent image sizing and display.

Subtle Animations & Transitions:

[ ] Add more targeted animations and transitions as per theme-guide.md (e.g., card hover effects, smooth scrolling to sections).

Accessibility Review:

[ ] Conduct a basic accessibility audit.

[ ] Ensure correct ARIA attributes and keyboard navigation for interactive elements.

[ ] Verify color contrast ratios.

Code Cleanup & Refinement:

[ ] Review all components to ensure they are under the 500-line limit from project-rules.md.

[ ] Add JSDoc-style comments to all functions and components as per project-rules.md.

Testing Steps (Phase 3):
[ ] Test navigation to and from individual project detail pages.

[ ] Verify all images and visuals load correctly.

[ ] Test keyboard navigation throughout the site.

[ ] Check for consistent animation behavior across pages.

[ ] Thoroughly test the contact form again to ensure no regressions.

Phase 4: Polish (UI/UX Improvements & Deployment Preparation)
Goal: Finalize the aesthetic and user experience, and prepare for production deployment. Result: A highly polished, performant, and deployable personal portfolio website.

Checklist:
Performance Optimization:

[ ] Optimize images for web (compression, responsive sizes).

[ ] Implement lazy loading for off-screen images/components.

[ ] Audit Lighthouse scores for performance, accessibility, SEO, and best practices.

Final UI/UX Tweaks:

[ ] Review all spacing, typography, and color usage against theme-guide.md and ui-rules.md for pixel-perfect alignment.

[ ] Implement empty states where applicable (e.g., "No projects found" if it were a dynamic list).

[ ] Refine error messages and loading states.

Cross-Browser Compatibility:

[ ] Test on major browsers (Chrome, Firefox, Safari, Edge) to ensure consistent appearance and functionality.

SEO Basics:

[ ] Add appropriate meta tags (title, description, keywords).

[ ] Generate a sitemap.xml and robots.txt (if applicable for static hosting).

Deployment Setup:

[ ] Configure Vercel (or chosen hosting) for continuous deployment from GitHub.

[ ] Set up any necessary environment variables (e.g., EmailJS API keys).

[ ] Run a production build locally to catch any build errors.

Testing Steps (Phase 4):
[ ] Perform a final, comprehensive end-to-end test of the entire application.

[ ] Test on multiple real devices (mobile, tablet, desktop) if possible, beyond just browser dev tools.

[ ] Verify all external links (GitHub, live demos, LinkedIn) work correctly.

[ ] Check all form validations and submissions on the deployed version.

[ ] Monitor console for any errors after deployment.

This phase plan provides a structured approach to building your personal portfolio website, ensuring a smooth development process and a high-quality final product.