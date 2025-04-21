'use client';

import { useEffect } from 'react';

const DynamicFavicon = () => {
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to update favicon based on theme
    const setFavicon = () => {
      if (darkModeMediaQuery.matches) {
        favicon.href = '/assets/dark-theme-icon/favicon.ico'; // Dark mode favicon
      } else {
        favicon.href = '/assets/light-theme-icon/favicon.ico'; // Light mode favicon
      }
    };

    // Set initial favicon based on current theme
    setFavicon();

    // Listen for theme changes
    darkModeMediaQuery.addEventListener('change', setFavicon);

    // Cleanup listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', setFavicon);
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default DynamicFavicon;
