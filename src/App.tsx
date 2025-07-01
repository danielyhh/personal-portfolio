// src/App.tsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact'; // Import the new ContactPage

function App() {
  // The main container for the application.
  // It sets up a flex column layout, minimum screen height,
  // and applies the main background and text colors from theme-guide.md.
  return (
    <div className="flex flex-col min-h-screen bg-mainBg text-bodyText">
      {/* The Header component for navigation */}
      <Header />
      {/* The main content area. flex-1 makes it grow to fill available space. */}
      <main className="flex-1">
        {/* Render the HomePage component as the main landing content */}
        <HomePage />
        {/* Render the AboutPage component */}
        <AboutPage />
        {/* Render the ProjectsPage component */}
        <ProjectsPage />
        {/* Render the ContactPage component */}
        <ContactPage /> {/* Added ContactPage here */}
        {/* Note: For a single-page portfolio, we render all sections.
            Later, we might implement routing for larger applications. */}
      </main>
      {/* The Footer component for site-wide footer content */}
      <Footer />
    </div>
  );
}

export default App;
