import React from "react";
import styles from "./styles.module.css";

const steps = [
  "Personal Details",
  "Educational Details",
  "Workshop Interest",
  "Workshop Expectations",
  "Confirmation",
];


const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className={styles.progressBar}>
      {steps.map((step, index) => (
        <div key={index} className={styles.stepContainer}>
          <div className={styles.circleLineWrapper}>
            <div
              className={`${styles.circle} ${
                currentStep > index ? styles.completed : ""
              } ${currentStep === index + 1 ? styles.active : ""}`}
            >
              {currentStep > index ? "✔" : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${styles.line} ${
                  currentStep > index ? styles.completed : ""
                }`}
              ></div>
            )}
          </div>
          <div
            className={`${styles.stepLabel} ${
              currentStep === index + 1 ? styles.activeLabel : ""
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
