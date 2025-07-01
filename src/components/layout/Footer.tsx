// src/components/layout/Footer.tsx
import React from 'react';

/**
 * Footer component for site-wide footer content.
 * Includes copyright and social links.
 * Styled according to theme-guide.md and ui-rules.md, with responsive adjustments.
 */
const Footer: React.FC = () => (
  // Footer container: white background, top border, vertical padding, margin-top, rounded top corners.
  <footer className="bg-cardBg border-t border-gray-200 py-6 mt-8 rounded-t-lg">
    {/* Content wrapper: max-width, centered, padding.
        `flex flex-col` for vertical stacking on mobile.
        `md:flex-row` for horizontal layout on medium screens and up.
        `items-center` for vertical alignment, `justify-between` to space content. */}
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Copyright text: small font, secondary accent color. */}
      <span className="text-sm text-secondaryAccent">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</span>
      {/* Social links container: flex row, space-x for horizontal spacing.
          `mt-4 md:mt-0` adds top margin on mobile, removes it on medium screens and up. */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        {/* GitHub link: body text color, primary accent on hover, transition. */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-bodyText hover:text-primaryAccent transition-colors">
          {/* GitHub SVG icon */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
        </a>
        {/* LinkedIn link: body text color, primary accent on hover, transition. */}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-bodyText hover:text-primaryAccent transition-colors">
          {/* LinkedIn SVG icon */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
