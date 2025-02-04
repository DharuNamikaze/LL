"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../../components/common/Animations/animation";
import Rounded from "../../../../components/common/buttons/roundButton";
import Link from "next/link";
import FadeTransition from "../../../../components/common/Animations/textFade";
const Hero = () => {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: subtitleRef, inView: issubTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursebuttonRef, inView: iscourseButtonInView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
  });
  const title = ["Where Learning Meets"];
  const titleo = ["Innovation"];
  const subtitle = `At LearnLogicify Technologies, we nurture the next generation of tech leaders through hands-on coding education and real-world projects. Our mission is to inspire creativity, foster collaboration, and build confidence in every student we mentor. Join us in shaping a future driven by innovation and excellence!
    `;
  return (
    <main className={styles.main}>
      <div className={styles.cont}>
        <div className={styles.left}>
          <div ref={descriptionRef} className={styles.description}>
            <div className={styles.body}>
              <div className={styles.header}>
                <SlideUpWord
                  title={title}
                  isInView={isInView}
                  className={styles.tit}
                />
                <SlideUpWord
                  title={titleo}
                  isInView={isInView}
                  className={styles.tito}
                />
              </div>
              <div ref={subtitleRef} className={styles.subtitleContainer}>
                <FadeTransition
                  description={subtitle}
                  isInView={issubTitleInView}
                  className={styles.desc}
                />
              </div>
              <div ref={coursebuttonRef} className={styles.btnContainer}>
                <motion.div
                  variants={buttonReveal}
                  initial="initial"
                  animate={iscourseButtonInView ? "open" : "initial"}
                >
                  <Link href={"/course"}>
                    <Rounded className={styles.btn}>
                      <p>View Courses</p>
                    </Rounded>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.banner}
            src="/images/banner/L.png"
            alt="Banner"
            width={500}
            height={300}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
