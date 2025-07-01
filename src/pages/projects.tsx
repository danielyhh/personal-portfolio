    // src/pages/projects.tsx
    import React from 'react';
    import ProjectCard from '../components/projects/ProjectCard'; // Make sure this import path is correct!

    /**
     * Projects page listing project showcases.
     * Uses placeholder data for now, rendered using the ProjectCard component.
     * Styled according to theme-guide.md and ui-rules.md.
     */
    const projects = [
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my skills, projects, and contact information. Built with modern web technologies.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      },
      {
        title: 'Task Manager App',
        description: 'A productivity application for managing daily tasks, featuring add, edit, delete, and filter functionalities. Designed for a clean user experience.',
        technologies: ['React', 'TypeScript', 'State Management'],
      },
      {
        title: 'E-commerce Store Concept',
        description: 'A conceptual online store demonstrating product listings, shopping cart interactions, and a simulated checkout process.',
        technologies: ['React', 'API Integration', 'UI/UX Design'],
      },
    ];

    const ProjectsPage: React.FC = () => (
      // Section for project showcase. Max-width, centered, with padding.
      // The id="projects" is used for navigation links.
      <section className="max-w-screen-lg mx-auto py-16 px-4" id="projects">
        {/* Section heading: text-3xl, bold, mb-8, primary accent color, centered. */}
        <h2 className="text-3xl font-bold mb-8 text-primaryAccent text-center">My Projects</h2>
        {/* Grid for project cards: responsive columns, gap between cards. */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Map through the projects array to render each project card using the ProjectCard component */}
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx} // Unique key for list rendering
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    );

    export default ProjectsPage;
  