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
          <p>Core Programming-(Python)</p>
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
              The Core Programming - Python course is designed to introduce
              students to the fundamentals of programming using Python, one of
              the most versatile and widely used programming languages today.
              This course covers essential programming concepts, data
              structures, algorithms, and object-oriented programming with
              Python.
            </p>
            <p className={styles.Abtdesc}>
              Students will also explore advanced topics such as database
              management, operating systems, and software development
              methodologies. By the end of this course, participants will have a
              strong foundation in Python programming, equipping them to solve
              real-world problems and prepare for advanced programming
              opportunities.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>
              Pre-requisites for this Course
            </div>
            <p className={styles.Abtdesc}>
              This Core Programming - Python course is beginner-friendly and
              requires no prior programming experience. However, familiarity
              with basic mathematics, such as algebra and logic, will be helpful
              in understanding programming concepts more effectively.
            </p>
            <p className={styles.Abtdesc}>
              Whether you are a complete beginner or have some prior programming
              knowledge, this course will guide you step-by-step to master
              Python programming and its applications in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
