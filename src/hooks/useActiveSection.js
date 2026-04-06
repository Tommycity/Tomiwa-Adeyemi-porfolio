import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    
    const handleIntersect = (entries) => {
      // Find the intersecting entry that takes up the most screen space
      let maxIntersectionRatio = 0;
      let mostlyVisibleSectionId = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostlyVisibleSectionId = entry.target.id;
        }
      });

      // Update state if we found a clearly visible section
      if (mostlyVisibleSectionId) {
         // Add a small delay to avoid flicker during fast scrolling
         setActiveSection(mostlyVisibleSectionId);
      }
    };

    // Use a margin to trigger "active" slightly before it hits the exact center
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.2, 0.5, 0.8, 1], // Check at multiple visibility points
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });

    // Check initial scroll position
    const handleInitialScroll = () => {
       const scrollPosition = window.scrollY;
       if (scrollPosition < 100) {
           setActiveSection(sectionIds[0]);
       }
    };
    handleInitialScroll();

    return () => {
      observers.forEach((element) => observer.unobserve(element));
    };
  }, [sectionIds]);

  return activeSection;
}