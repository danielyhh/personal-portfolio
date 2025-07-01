// src/components/layout/Header.tsx
import React from 'react';

/**
 * Header component for site-wide navigation.
 * Contains navigation links to Home, About, Projects, and Contact.
 * Styled according to theme-guide.md and ui-rules.md.
 */
const Header: React.FC = () => (
  // Header container: white background, subtle shadow.
  <header className="bg-cardBg shadow-sm rounded-b-lg">
    {/* Navigation bar: max-width, centered, padding, flex items, space between elements. */}
    <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Site title/logo: text-2xl, bold font, primary accent color. */}
      <a href="#" className="text-2xl font-bold text-primaryAccent">MyPortfolio</a>
      {/* Navigation links: flex row, space-x for horizontal spacing, text styles. */}
      <ul className="flex space-x-8 text-base font-medium">
        <li><a href="#" className="text-bodyText hover:text-primaryAccent transition-colors">Home</a></li>
        <li><a href="#about" className="text-bodyText hover:text-primaryAccent transition-colors">About</a></li>
        <li><a href="#projects" className="text-bodyText hover:text-primaryAccent transition-colors">Projects</a></li>
        {/* Updated href for Contact link to point to the #contact section */}
        <li><a href="#contact" className="text-bodyText hover:text-primaryAccent transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
