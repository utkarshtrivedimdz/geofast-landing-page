import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollHandler component to handle hash navigation
export const InternalLinksHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle initial scroll
    const handleInitialScroll = () => {
      // Get the hash from the URL
      const hash = location.hash;

      if (hash) {
        // Remove the '#' symbol
        const sectionId = hash.slice(1);

        // Find the element with the matching ID
        const element = document.getElementById(sectionId);

        if (element) {
          // Delay the scroll slightly to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Handle scroll on initial load
    handleInitialScroll();
  }, [location]); // Only run when location changes

  return null;
};
