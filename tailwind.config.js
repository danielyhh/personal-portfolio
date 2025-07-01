    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      // The 'content' array tells Tailwind which files to scan for Tailwind classes.
      // This is crucial for Tailwind's tree-shaking feature, where it only includes
      // the CSS you actually use, keeping the final stylesheet small.
      content: [
        "./index.html", // Scan the main HTML file
        "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, TSX files in the src directory
      ],
      theme: {
        extend: {
          // Define your custom colors from theme-guide.md here
          colors: {
            primaryAccent: '#007BFF', // Vibrant Blue
            secondaryAccent: '#6C757D', // Muted Gray
            bodyText: '#343A40', // Dark Gray
            headingText: '#212529', // Very Dark Gray/Near Black
            mainBg: '#F8F9FA', // Off-White/Light Gray
            cardBg: '#FFFFFF', // Pure White
            success: '#28A745', // Green
            error: '#DC3545', // Red
          },
          fontFamily: {
            // Inter as the primary and secondary font, as per theme-guide.md
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
    