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
          <p>Machine Learning Mastery</p>
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
              The Machine Learning Mastery course is designed to provide
              students with a comprehensive understanding of machine learning
              concepts, techniques, and applications. This course covers
              foundational topics such as Python programming, statistics, and
              data visualization, as well as advanced topics like supervised and
              unsupervised learning, deep learning, and natural language
              processing (NLP).
            </p>
            <p className={styles.Abtdesc}>
              Through practical training and real-world projects, students will
              learn to build and optimize machine learning models, work with
              popular frameworks like TensorFlow and Scikit-Learn, and gain
              hands-on experience in solving real-world problems using
              data-driven techniques.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>Who Should Take This Course?</div>
            <p className={styles.Abtdesc}>
              This Machine Learning Mastery course is designed for beginners
              with a keen interest in learning how machines learn from data.
              Whether you are new to programming or looking to specialize in
              machine learning, this course will guide you step-by-step through
              the fundamentals and advanced techniques of machine learning.
            </p>
            <p className={styles.Abtdesc}>
              By the end of this course, students will have the skills and
              confidence to design, develop, and deploy machine learning models,
              preparing them for real-world applications and further career
              opportunities in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
