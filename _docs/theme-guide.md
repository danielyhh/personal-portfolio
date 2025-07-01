Theme Guide: Personal Portfolio Website
This document outlines the visual theme and design principles for the personal portfolio website, ensuring a cohesive and modern aesthetic.

1. Design Style
Style Choice: Minimalist with Modern Cleanliness.

Description: Focus on simplicity, clarity, and functionality. Use ample white space (or negative space) to make content stand out. Emphasize clear hierarchy, sharp lines, and subtle interactions. Avoid clutter and unnecessary ornamentation. The goal is a professional, understated elegance that highlights the content (your projects and information) rather than distracting from it.

2. Color Palette
Primary Accent Color (for highlights, buttons, links):

Hex: #007BFF (Vibrant Blue - professional, trustworthy)

Secondary Accent Color (for subtle emphasis, secondary actions):

Hex: #6C757D (Muted Gray - sophisticated, neutral)

Text Colors:

Body Text: #343A40 (Dark Gray - highly readable)

Headings: #212529 (Very Dark Gray/Near Black - strong contrast)

Background Colors:

Main Background: #F8F9FA (Off-White/Light Gray - clean, spacious)

Card/Section Background: #FFFFFF (Pure White - crisp, provides contrast against main background)

Success/Accent (for form submission success):

Hex: #28A745 (Green)

Error/Accent (for form submission errors):

Hex: #DC3545 (Red)

3. Typography Choices
Primary Font (Headings & Key Information):

Font Family: 'Inter', sans-serif (modern, highly readable, clear at all sizes).

Usage: For all headings (H1 to H6), important calls to action, and navigation links.

Secondary Font (Body Text & Paragraphs):

Font Family: 'Inter', sans-serif (consistent with primary for a unified look, but with appropriate weights/sizes).

Usage: All paragraph text, list items, form field labels, and descriptions.

Font Weights:

Regular (400) for body text

Medium (500) for subtle emphasis

Semi-bold (600) for subheadings

Bold (700) for main headings

4. Spacing System (using a 4-point or 8-point base)
Base Unit: We will primarily use a rem or px based spacing system, scalable, but conceptually aligning to an 8-point grid for consistency.

Small Spacing: 8px (0.5rem) - e.g., between icon and text, small inline elements.

Medium Spacing: 16px (1rem) - e.g., padding inside buttons, small margins between paragraphs.

Large Spacing: 24px (1.5rem) - e.g., padding inside cards, sections.

Extra Large Spacing: 32px (2rem) to 64px (4rem) - e.g., vertical spacing between major sections, large container padding.

Responsive Spacing: Utilize Tailwind CSS's responsive spacing utilities (sm:, md:, lg:) to adjust padding and margin based on screen size.

5. Border Radius Standards
Small (Buttons, Tags): rounded (default Tailwind, typically 4px) - subtly soft edges for interactive elements.

Medium (Cards, Images): rounded-md or rounded-lg (typically 6px or 8px) - for contained elements like project cards or image borders.

None (Sharp Edges): rounded-none - for elements that require strict angularity (use sparingly).

6. Shadow Styles
Subtle Lift (for interactive elements, cards):

shadow-sm or shadow-md (Tailwind classes). A soft, barely-there shadow to give a sense of elevation without being heavy.

Example: box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); (similar to Tailwind's default small shadows).

Hover Effect (for buttons, links): A slightly more pronounced shadow on hover to indicate interactivity.

shadow-lg (on hover)

No harsh, dark, or multi-directional shadows. Keep them minimal and consistent.

7. Animation Preferences
Subtle & Fast: Animations should be quick, smooth, and enhance the user experience without being distracting or slowing down the interface.

Transition Types: Prefer ease-in-out for smooth starts and stops.

Common Animations:

Hover Effects: Smooth color changes or subtle scale/shadow shifts on buttons, links, and cards.

Navigation: Smooth scroll to sections (if implemented).

Form Feedback: Fading in/out of success or error messages.

Loading States: Simple, non-intrusive loading spinners or skeleton screens.

Duration: Most transitions should be 150ms to 300ms.

This theme guide provides a robust framework for the visual design of your personal portfolio website, ensuring it is cohesive, modern, and professional.
