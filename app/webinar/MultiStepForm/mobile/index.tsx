import React from "react";
import styles from "./styles.module.css";
import ProgressBar from "./components/progressbar";

interface MobileViewProps {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  renderStep: () => React.ReactNode;
}

const MobileView: React.FC<MobileViewProps> = ({
  currentStep,
  totalSteps,
  setCurrentStep,
  renderStep,
}) => {
  return (
    <main className={styles.main}>
      <ProgressBar
        currentStep={currentStep} // Use the actual currentStep value
        totalSteps={totalSteps} // Use the totalSteps value from props
        stepTitles={[
          "Personal Details",
          "Educational Details",
          "Workshop Interest",
          "Workshop Expectations",
          "Confirmation",
        ]}
      />

      <div className={styles.container}>
        {renderStep()}
        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          {/* Hide "Previous" button in Step 5 */}
          {currentStep > 1 && currentStep < totalSteps && (
            <button
              className={styles.prevButton}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps && (
            <button
              className={styles.nextButton}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default MobileView;
