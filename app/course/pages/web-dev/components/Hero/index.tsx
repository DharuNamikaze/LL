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
          <p>Full-Stack Web Development</p>
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
              The Full-Stack Web Development course is designed to provide
              students with the knowledge and skills required to build complete,
              dynamic, and scalable web applications. This course covers
              essential web development topics, including frontend and backend
              development, database integration, and deployment strategies,
              using modern tools and frameworks like React, Node.js, Express,
              and MongoDB.
            </p>
            <p className={styles.Abtdesc}>
              Students will explore a variety of topics, including HTML, CSS,
              and JavaScript basics, responsive design, RESTful APIs,
              authentication, state management, and performance optimization. By
              the end of the course, participants will have the ability to
              design, develop, and deploy professional-grade web applications
              for real-world use.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>
              Pre-requisites for this Course
            </div>
            <p className={styles.Abtdesc}>
              This Full-Stack Web Development course is beginner-friendly and
              requires no prior programming experience. However, familiarity
              with basic computer operations and a keen interest in web
              technologies will be advantageous.
            </p>
            <p className={styles.Abtdesc}>
              Whether you are new to programming or already have some
              experience, this course will guide you step-by-step to master the
              skills needed to build modern and scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
