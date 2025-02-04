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
          <p>Data Science Accelerator</p>
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
              The Data Science Accelerator course is designed to equip students
              with the knowledge and skills required to analyze, process, and
              interpret data effectively. This course covers foundational topics
              such as Python programming, statistics, and data visualization, as
              well as advanced topics like data wrangling, machine learning, and
              big data tools such as Hadoop and Spark.
            </p>
            <p className={styles.Abtdesc}>
              Through hands-on projects and real-world datasets, students will
              learn to manipulate and visualize data, build predictive models,
              and derive actionable insights. By the end of this course,
              participants will have the expertise to tackle real-world
              challenges in data science and analytics, preparing them for
              professional opportunities in the field.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>
              Pre-requisites for this Course
            </div>
            <p className={styles.Abtdesc}>
              This Data Science Accelerator course is suitable for beginners and
              requires no prior experience in data science. However, familiarity
              with basic programming concepts and mathematics, such as linear
              algebra, calculus, and probability, will be advantageous for
              understanding advanced topics.
            </p>
            <p className={styles.Abtdesc}>
              Whether you are a beginner or have some programming experience,
              this course will guide you step-by-step to master the fundamentals
              and advanced techniques of data science, empowering you to solve
              complex data-driven problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
