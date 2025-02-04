"use client";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./styles.module.scss";

interface ParagraphProps {
  paragraph: string;
  useGradient?: boolean;
}

export default function Character({
  paragraph,
  useGradient = true,
}: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  });

  const words = paragraph.split(" ");

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={smoothScrollYProgress}
            range={[start, end]}
            useGradient={useGradient}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  useGradient?: boolean;
}

const Word: React.FC<WordProps> = React.memo(
  ({ children, progress, range, useGradient }) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className={styles.word}>
        {children.split("").map((char, i) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char
              key={`c_${i}`}
              progress={progress}
              range={[start, end]}
              useGradient={useGradient}
            >
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
);

// ✅ Fix: Assign displayName to `Word`
Word.displayName = "Word";

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
  useGradient?: boolean;
}

const Char: React.FC<CharProps> = React.memo(
  ({ children, progress, range, useGradient }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const color = useTransform(
      progress,
      range,
      useGradient ? ["rgba(75, 0, 130, 0.4)", "white"] : ["black", "black"]
    );

    return (
      <motion.span
        style={{
          opacity,
          color,
        }}
        className={useGradient ? "gradient-text" : ""}
      >
        {children}
      </motion.span>
    );
  }
);

// ✅ Fix: Assign displayName to `Char`
Char.displayName = "Char";
