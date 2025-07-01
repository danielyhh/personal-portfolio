// src/pages/about.tsx
import React, { useEffect, useRef, useState } from 'react';

/**
 * About page with introduction, skills, and experience/education highlights.
 * Now includes a more pronounced fade-in animation for sections as they appear.
 * Styled according to theme-guide.md and ui-rules.md.
 */
const AboutPage: React.FC = () => {
  // Refs for each section to observe their visibility
  const introRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // State to control animation classes
  // Initialize them as false (not visible) so they start completely hidden
  const [introVisible, setIntroVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible (slightly more)
    };

    // Function to create an Intersection Observer for a specific ref and state setter
    const createObserver = (ref: React.RefObject<HTMLElement>, setVisibility: React.Dispatch<React.SetStateAction<boolean>>) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibility(true);
            observer.unobserve(entry.target); // Stop observing once visible to prevent re-triggering
          }
        });
      }, observerOptions);
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    };

    // Create and start observers for each section
    const introObserver = createObserver(introRef as React.RefObject<HTMLElement>, setIntroVisible);
    const skillsObserver = createObserver(skillsRef as React.RefObject<HTMLElement>, setSkillsVisible);
    const experienceObserver = createObserver(experienceRef as React.RefObject<HTMLElement>, setExperienceVisible);

    // Cleanup observers on component unmount to prevent memory leaks
    return () => {
      if (introRef.current) introObserver.unobserve(introRef.current);
      if (skillsRef.current) skillsObserver.unobserve(skillsRef.current);
      if (experienceRef.current) experienceObserver.unobserve(experienceRef.current);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    // Section for the about content. Max-width, centered, with padding.
    // The id="about" is used for navigation links.
    <section className="max-w-screen-md mx-auto py-16 px-4" id="about">
      {/* Section heading: text-3xl, bold, mb-6 for margin, primary accent color, centered. */}
      <h2 className="text-3xl font-bold mb-6 text-primaryAccent text-center">About Me</h2>

      {/* Introduction paragraph */}
      <p
        ref={introRef}
        // Apply initial opacity-0 (hidden) and then transition to opacity-100 (visible)
        // Duration increased to 1500ms (1.5 seconds) for a more noticeable fade
        className={`text-lg mb-6 text-bodyText transition-opacity duration-1500 ${introVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        Hi! I'm Daniel, a passionate Full-Stack Developer with a love for crafting seamless user experiences. I specialize in building modern, scalable web applications using React, TypeScript, and Tailwind CSS. I really like coding!
      </p>

      {/* Skills section */}
      <div
        ref={skillsRef}
        // Apply initial opacity-0 and then transition to opacity-100 with a delay
        // Duration increased to 1500ms, delay increased to 500ms
        className={`mb-8 transition-opacity duration-1500 delay-500 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Skills heading: text-xl, semi-bold, mb-2, heading text color. */}
        <h3 className="text-xl font-semibold mb-2 text-headingText">Skills</h3>
        {/* Skills list: responsive grid, gap, body text color. */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-bodyText">
          <li>TypeScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>HTML5 & CSS3</li>
        </ul>
      </div>

      {/* Experience & Education section */}
      <div
        ref={experienceRef}
        // Apply initial opacity-0 and then transition to opacity-100 with a longer delay
        // Duration increased to 1500ms, delay increased to 1000ms
        className={`transition-opacity duration-1500 delay-1000 ${experienceVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Heading: text-xl, semi-bold, mb-2, heading text color. */}
        <h3 className="text-xl font-semibold mb-2 text-headingText">Experience & Education</h3>
        {/* List: bullet points, body text color. */}
        <ul className="list-disc list-inside text-bodyText">
          <li>Currently: Year 10 at [The Trinity Catholic School]</li> {/* Updated for Daniel */}
          <li>Freelance Web Projects (2022–Present)</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
