import React from "react";
import styles from "./styles.module.css";

interface Step5Props {
  onSubmit: () => void; // Function to handle submission
}

const Step5: React.FC<Step5Props> = ({ onSubmit }) => {
  const workshopFee = 199;
  const gst = 0.18 * workshopFee; // GST 18%
  const total = workshopFee + gst;

  return (
    <div className={styles.step}>
      <h2 className={styles.heading}>Payment Summary</h2>

      <div className={styles.summarySection}>
        <div className={styles.workshop}>
          <p className={styles.paragraph}>Workshop Fee:</p>
          <p>₹{workshopFee.toFixed(2)}</p>
        </div>
        <div className={styles.workshop}>
          <p className={styles.paragraph}>GST (18%):</p>
          <p> ₹{gst.toFixed(2)}</p>
        </div>
        <div className={styles.total}>
          <p className={styles.paragraph}>Total Amount: </p>
          <p className={styles.totamt}>₹{total.toFixed(2)}</p>
        </div>
      </div>

      <p className={styles.paragraph}>
        By Proceeding, you agree to the terms and conditions of the workshop.
      </p>

      <button className={styles.button} onClick={onSubmit}>
        Proceed to payment
      </button>
    </div>
  );
};

export default Step5;
