"use client";
import { useRef, useState } from "react";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";

const Certificate: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: containerRef, inView: isContainerInView } = useInView({
    triggerOnce: false, // Ensures animation triggers every time it's in view
    threshold: 0.2,
  });

  const title = ["About Your Trainer"];

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div ref={descriptionRef} className={styles.description}>
          <div className={styles.body}>
            <SlideUpWord
              title={title}
              isInView={isInView}
              className={styles.tit}
            />
          </div>
        </div>
      </div>
      <motion.div
        ref={containerRef}
        className={styles.container}
        initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
        animate={
          isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
        } // Slide up when in view
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
      >
        <div className={styles.certificate}>
          <Image
            className={styles.image}
            src="/images/team/sachin-mentor.png"
            alt="Sachin Nandha Sabarish J"
            width={600} // Replace with the actual width of the image
            height={400} // Replace with the actual height of the image
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Sachin Nandha Sabarish J</div>
          <div className={styles.subtitle}>
            Founder & CEO, LearnLogicify Technologies
          </div>
          <div className={styles.desc}>
            <p>
              Hi there! I’m Sachin, the Founder and CEO of LearnLogicify
              Technologies. Over the last 5 years, I’ve been dedicated to
              helping students unlock their potential in technology. For me,
              coding isn’t just about learning syntax, it’s about creating
              solutions and thinking outside the box. In this workshop, I’m
              excited to share my knowledge and guide you in mastering Git and
              GitHub. Whether you’re just starting or refining your skills, I’m
              here to help you make the most of this experience. Let’s dive in
              and grow together!
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Certificate;
