'use client'
import { useEffect } from "react";
const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current vertical scroll position
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document
      const viewportHeight = window.innerHeight; // Height of the visible viewport
      const threshold = documentHeight * 0.05; // 5% of total height
      // Check if the scroll position is greater than the threshold
      if (scrollPosition > threshold) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    // Call the function immediately on mount
    handleScroll();
  }, []);
};
export default ScrollToTop;