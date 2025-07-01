    // src/components/projects/ProjectCard.tsx
    import React from 'react';

    /**
     * Interface for the props of the ProjectCard component.
     * Defines the structure of data each project card will display.
     */
    interface ProjectCardProps {
      title: string;
      description: string;
      technologies: string[];
      // In a later phase, you might add:
      // imageUrl?: string;
      // liveDemoLink?: string;
      // githubLink?: string;
    }

    /**
     * ProjectCard component: Displays a single project with its title, description,
     * and a list of technologies used.
     * Styled according to theme-guide.md and ui-rules.md.
     */
    const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => {
      return (
        // Card container: white background, rounded corners, subtle shadow, padding.
        // Uses cardBg from theme-guide.md.
        <div className="bg-cardBg rounded-lg shadow-md p-6 flex flex-col transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
          {/* Project title: text-xl, semi-bold, mb-2, heading text color. */}
          <h3 className="text-xl font-semibold mb-2 text-headingText">{title}</h3>
          {/* Project description: body text color, mb-4. */}
          <p className="text-bodyText mb-4 flex-grow">{description}</p> {/* flex-grow ensures description takes available space */}
          {/* Technologies section: mt-auto pushes it to the bottom of the card,
              flex-wrap for responsive tags. */}
          <div className="mt-auto">
            <span className="block text-sm font-medium text-secondaryAccent mb-1">Technologies:</span>
            <ul className="flex flex-wrap gap-2">
              {/* Map through technologies to create individual tags */}
              {technologies.map((tech) => (
                <li key={tech} className="bg-mainBg px-2 py-1 rounded text-xs text-primaryAccent border border-gray-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    export default ProjectCard;
    