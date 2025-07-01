// src/pages/contact.tsx
import React from 'react';
import ContactForm from '../components/forms/ContactForm'; // Import the ContactForm component

/**
 * Contact page: Provides an introduction and embeds the ContactForm component.
 * Styled according to theme-guide.md and ui-rules.md.
 */
const ContactPage: React.FC = () => (
  // Section for the contact content. Max-width, centered, with padding.
  // The id="contact" is crucial for the navigation link to scroll to this section.
  <section className="max-w-screen-md mx-auto py-16 px-4" id="contact">
    {/* Section heading: text-3xl, bold, mb-6, primary accent color, centered. */}
    <h2 className="text-3xl font-bold mb-6 text-primaryAccent text-center">Get In Touch</h2>
    {/* Introduction paragraph: text-lg, mb-8, body text color, centered. */}
    <p className="text-lg mb-8 text-bodyText text-center">
      Have a project in mind, a question, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible.
    </p>
    {/* Embed the ContactForm component here */}
    <ContactForm />
  </section>
);

export default ContactPage;
