// src/components/forms/ContactForm.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS library

/**
 * ContactForm component: Handles user input for name, email, and message.
 * Integrates with EmailJS for actual email sending.
 * Includes state management for form fields and submission status.
 * Styled using Tailwind CSS as per theme-guide.md and ui-rules.md.
 */
const ContactForm: React.FC = () => {
  // State for form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for submission status and messages
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  // EmailJS service IDs (REPLACE WITH YOUR ACTUAL IDs)
  // You'll get these from your EmailJS dashboard after setting up a service and template.
  const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_xxxxxxx'
  const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xxxxxxx'
  const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'your_public_key_xxxxxxx'

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setStatus('loading'); // Set status to loading
    setResponseMessage(''); // Clear previous messages

    // Basic validation
    if (!name || !email || !message) {
      setStatus('error');
      setResponseMessage('Please fill in all required fields.');
      return;
    }

    // Data to be sent to the EmailJS template
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Daniel', // This will be the recipient's name (your name, Daniel)
      message: message,
    };

    try {
      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setResponseMessage('Your message has been sent successfully!');
      setName(''); // Clear form fields on success
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-cardBg p-8 rounded-lg shadow-md max-w-xl mx-auto">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-bodyText text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-bodyText leading-tight focus:outline-none focus:ring-2 focus:ring-primaryAccent"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === 'loading'}
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-bodyText text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-bodyText leading-tight focus:outline-none focus:ring-2 focus:ring-primaryAccent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-bodyText text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-bodyText leading-tight focus:outline-none focus:ring-2 focus:ring-primaryAccent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={status === 'loading'}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`bg-primaryAccent hover:bg-[#0056b3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Response Messages */}
      {responseMessage && (
        <p className={`mt-4 text-center text-sm font-medium ${status === 'success' ? 'text-success' : 'text-error'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;