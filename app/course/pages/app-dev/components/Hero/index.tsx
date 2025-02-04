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
          <p>Next-Gen App Development</p>
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
              The Full-Stack Mobile App Development course is designed to equip
              students with the skills and knowledge required to build complete,
              robust, and scalable mobile applications. This course covers
              essential topics such as frontend and backend development,
              database management, and app deployment, using modern tools and
              frameworks like React Native, Firebase, and REST APIs.
            </p>
            <p className={styles.Abtdesc}>
              Students will explore a wide range of topics, including UI/UX
              design with Figma, mobile app architecture, real-time database
              integration, and advanced debugging techniques. By the end of the
              course, participants will have the expertise to design, develop,
              and deploy mobile applications that meet real-world demands.
            </p>
          </div>
        </div>
        <div className={styles.con3}>
          <div className={styles.about}>
            <div className={styles.AbtTitle}>
              Pre-requisites for this Course
            </div>
            <p className={styles.Abtdesc}>
              This Full-Stack Mobile App Development course is suitable for
              beginners with a passion for creating mobile applications. No
              prior programming experience is required, although familiarity
              with basic programming concepts, such as HTML and CSS, can be
              helpful.
            </p>
            <p className={styles.Abtdesc}>
              Whether you are a beginner or have some experience in app
              development, this course provides a step-by-step guide to
              mastering the skills needed to develop modern, scalable mobile
              applications for iOS and Android platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
