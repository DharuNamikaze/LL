"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ButtonWrapper = () => {
  return (
    <div className={styles.buttonWrapper}>
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client

    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;

      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const buttonElement = btnRef.current;
    if (buttonElement) {
      buttonElement.addEventListener("mousemove", handleMouseMove);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener("mousemove", handleMouseMove);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={styles.button}
    >
      <span className={styles.span1}>
        <p className={styles.p}>Get Access</p>
      </span>
      <span ref={spanRef} className={styles.span2} />
    </motion.button>
  );
};

export default ButtonWrapper;
