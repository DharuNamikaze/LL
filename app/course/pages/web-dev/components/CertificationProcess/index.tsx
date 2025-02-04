import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Icon from "@/app/components/common/SVG/icons/Certificate";
import { FaArrowRightLong } from "react-icons/fa6";

const CertificationProcessWebDev = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div className={styles.title}>
            Certification Process and Requirements
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Upon successfully completing the Full-Stack Web Development course,
          you will be required to take a final assessment to qualify for
          certification. This assessment evaluates your understanding of web
          development concepts, including frontend, backend, and database
          integration. It is conducted under structured guidelines to ensure
          fairness and integrity.
        </p>
        <p>
          The final assessment is for 100 marks and contributes 100% to your
          certification score. Throughout the course, students are encouraged to
          build projects and solve assignments to gain practical experience, but
          these do not contribute to the final certification score.
        </p>
        <p>
          To be eligible for the certificate, you must meet the following
          criteria:
        </p>
        <ul className={styles.customList}>
          <li>Achieve a score of 50% or more in the final assessment.</li>
        </ul>
        <p>
          If this condition is met, you will receive a certificate of completion
          for the Full-Stack Web Development course. If you do not achieve the
          required score, you will have the opportunity to retake the final
          assessment once.
        </p>
        <p>
          This structured evaluation ensures that only those who demonstrate a
          solid understanding of the course material and its applications are
          awarded the certificate, maintaining the integrity and value of the
          certification.
        </p>
      </div>
    </div>
  );
};

export default CertificationProcessWebDev;
