import React from "react";
import styles from "./styles.module.css";

interface ProgressBarProps {
  currentStep: number; // The current step (1, 2, 3, etc.)
  totalSteps: number; // Total number of steps
  stepTitles: string[]; // Titles for each step
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
}) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.stepInfo}>
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className={styles.stepTitle}>{stepTitles[currentStep - 1]}</div>
      <div className={styles.progressBar}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`${styles.progressSegment} ${
              index < currentStep ? styles.completed : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
