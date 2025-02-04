"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import ProStar from "../SVG/icons/ProStar";
import Link from "next/link";
import LogoIcon from "../SVG/logo/ComanyIcon";
import Sparkle from "@/app/components/common/buttons/sparkleBtn";

const Probanner = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        className={styles.banner}
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={styles.title}
        >
          <p className="bg-white bg-[radial-gradient(100%_140%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            Ultimate Git & Github Workshop
          </p>
          <div className={styles.star}>
            <ProStar />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.desc}
        >
          <p>
            Take your coding skills to the next level with our 2-day hands-on
            Git & GitHub workshop. Dive deep into version control, collaboration
            workflows, branching, and repository management. Learn to track
            changes, work in teams seamlessly, and manage projects like a pro.
            Perfect for developers of all levels looking to sharpen their skills
            and boost productivity!
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className={styles.btn}
        >
          <Link href="/webinar/ultimate-webinar-on-mastering-git-&-github">
            <Sparkle />
          </Link>
        </motion.div>
        <motion.div
          className={styles.circle_1}
          initial={{ y: -200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className={styles.circle_2}
          initial={{ y: 200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className={styles.icon}
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <LogoIcon />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Probanner;
