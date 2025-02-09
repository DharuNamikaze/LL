import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.certificate}>
        <Image
          className={styles.image}
          src="/images/certificate/c-1.png"
          alt="Certificate of the course"
          width={600} // Specify the width of the image
          height={400} // Specify the height of the image
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Certificate of the course</h3>
        </div>
        <div className={styles.desc}>
          <p>
            Upon successfully completing the course, you will be awarded the
            prestigious Certificate of Excellence from LearnLogicify
            Technologies. This certificate is a testament to your dedication and
            mastery of the subject, showcasing your commitment to continuous
            learning and your ability to apply advanced skills. It will be a
            valuable addition to your professional portfolio, helping you stand
            out to potential employers and opening doors to new career
            opportunities.
          </p>
        </div>
        <div>
          <Link href="/images/certificate/c-1.png" passHref>
            <div className={styles.btn}>
              View Certificate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
