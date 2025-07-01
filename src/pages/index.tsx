    // src/pages/index.tsx
    import React from 'react';

    /**
     * Homepage with Hero section.
     * Includes headline, intro, and calls to action.
     * Styled according to theme-guide.md and ui-rules.md.
     */
    const HomePage: React.FC = () => (
      // Section for the hero area. It's a flex column, centered, with min height
      // and padding. Uses the main background color from the theme.
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16 bg-mainBg">
        {/* Main headline: responsive font sizes, bold, mb-4 for margin,
            and primary accent color from theme-guide.md. */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primaryAccent">Full-Stack Developer passionate about user experience</h1>
        {/* Introductory paragraph: responsive font sizes, body text color,
            mb-8 for margin, and max-width for readability. */}
        <p className="text-lg md:text-xl text-bodyText mb-8 max-w-2xl">
          Welcome! I build clean, modern, and responsive web applications that delight users and solve real-world problems. Explore my work and get in touch!
        </p>
        {/* Call to action buttons: responsive flex layout, gap between buttons. */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* "Learn More" button: primary accent background, white text, rounded, shadow, hover effect. */}
          <a href="#about" className="px-6 py-3 bg-primaryAccent text-white rounded shadow-sm font-medium hover:bg-[#0056b3] transition-colors">Learn More</a>
          {/* "View Projects" button: white background, primary accent text and border, rounded, shadow, hover effect. */}
          <a href="#projects" className="px-6 py-3 bg-white text-primaryAccent border border-primaryAccent rounded shadow-sm font-medium hover:bg-mainBg transition-colors">View Projects</a>
        </div>
      </section>
    );

    export default HomePage;
    