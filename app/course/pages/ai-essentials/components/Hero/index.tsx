import React from "react";
import styles from "./styles.module.css";
import { FaStar } from "react-icons/fa6";
import Overview from "../../../common/OverviewCard";
import Link from "next/link";
import Video from "../../../common/VideoSection";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>Artificial Intelligence Essentials & Beyond</p>
        </div>
        <div className={styles.Hstats}>
          <div className={styles.tutor}>
            <p>Sachin</p>
          </div>
          <div className={styles.star}>
            <FaStar color="#FFD600" />
          </div>
          <div className={styles.rating}>
            <p className={styles.rate}>4.9</p>
            <p className={styles.rates}>(5.2k Ratings)</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <Overview />
        </div>
        <div className={styles.video}>
          <Video
            src="/website-intro (1).mp4"
            poster="/images/thumbnail/image.png"
          />
        </div>
      </div>
      <div className={styles.con1}>
        <div className={styles.con4}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>About This Course</div>
            <p className={styles.Abtdesc}>
              The Artificial Intelligence Essentials & Beyond course is designed
              to provide a comprehensive introduction to AI concepts and
              techniques. This course covers the foundations of AI, including
              programming, mathematics for AI, and practical problem-solving.
              Students will explore topics such as Python programming, data
              structures, machine learning, deep learning, and natural language
              processing through structured training sessions and guided
              exercises.
            </p>
            <p className={styles.Abtdesc}>
              By the end of this course, students will gain a strong
              understanding of AI fundamentals and advanced topics, preparing
              them to tackle real-world challenges and build a solid foundation
              for further studies or professional opportunities in Artificial
              Intelligence.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>
              Pre-requisites for this Course
            </div>
            <p className={styles.Abtdesc}>
              This AI course is suitable for beginners and requires no prior
              experience in programming or AI concepts. However, familiarity
              with basic mathematics, such as linear algebra, calculus, and
              probability, will be advantageous for understanding advanced
              topics.
            </p>
            <p className={styles.Abtdesc}>
              Whether you are a beginner or have some experience in programming,
              this course will guide you step-by-step to master the fundamentals
              and advanced topics of Artificial Intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
