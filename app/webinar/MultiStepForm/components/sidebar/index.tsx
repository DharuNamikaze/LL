import React from "react";
import ProgressBar from "./progressBar";
import styles from "./styles.module.css";
import Image from "next/image";
const Sidebar = ({ currentStep }: { currentStep: number }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/SVG/logo/logo-icon.svg"
            alt="Logo"
            width={50}
            height={50}
            className="h-10 w-10"
          />
        </div>
        <h3 className={styles.title}>Create account</h3>
      </div>
      <ProgressBar currentStep={currentStep} />
    </aside>
  );
};

export default Sidebar;
