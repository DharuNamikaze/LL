"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import HamburgerMenu from "../../hamburger"; // Adjust the import path if needed
import styles from "./styles.module.css";
import ScrollToTop from "@/app/components/common/buttons/scrollToTop"; // Import your ScrollToTop component

const ScrollHandler: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section")?.clientHeight || 0;

      // Toggle HamburgerMenu visibility
      if (window.scrollY > heroSectionHeight / 2) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }

      // Toggle ScrollToTop button visibility
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${styles.hamburgerMenu} ${
          showHamburger ? styles.hamburgerMenuVisible : ""
        }`}
      >
        <HamburgerMenu />
      </div>

      {/* ScrollToTop Button with Animation */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ scale: 0 }} // Initial state (zoom-out)
            animate={{ scale: 1 }} // Animate to full size (zoom-in)
            exit={{ scale: 0 }} // Animate out (zoom-out)
            transition={{
              duration: 0.3, // Animation duration
              ease: "easeInOut", // Easing
            }}
            className={styles.scrollToTopButton} // Wrapper to style
          >
            <ScrollToTop/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollHandler;
