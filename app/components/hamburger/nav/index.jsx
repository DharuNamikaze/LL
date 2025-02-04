"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide, scale } from "../anim";
import Link from "next/link";
import Curve from "./Curve";
import Footer from "./Footer";
import LightLogo from "../../images/logo/darkLogo";
import { Icon } from "@iconify/react";

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [companySubMenuOpen, setCompanySubMenuOpen] = useState(false);

  const toggleCompanySubMenu = () => {
    setCompanySubMenuOpen(!companySubMenuOpen);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <LightLogo />
          </div>
          <motion.div
            className={styles.link}
            onMouseEnter={() => {
              setSelectedIndicator("/");
            }}
            custom={"1"}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              variants={scale}
              animate={selectedIndicator === "/" ? "open" : "closed"}
              className={styles.indicator}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div
            className={styles.link}
            onClick={toggleCompanySubMenu}
            onMouseEnter={() => {
              setSelectedIndicator("/Company");
            }}
            custom={"2"}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              variants={scale}
              animate={
                selectedIndicator.startsWith("/Company") ? "open" : "closed"
              }
              className={styles.indicator}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <div className={styles.menuItem}>
              <span>Company</span>
              <Icon
                icon="lucide:chevron-down"
                width="24"
                height="24"
                className={companySubMenuOpen ? styles.rotate : ""}
              />
            </div>
          </motion.div>
          <AnimatePresence>
            {companySubMenuOpen && (
              <motion.div
                className={styles.subMenu}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href="/company/about">About Us</Link>
                <Link href="/company/team">Team</Link>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className={styles.link}
            onMouseEnter={() => {
              setSelectedIndicator("/Courses");
            }}
            custom={"3"}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              variants={scale}
              animate={selectedIndicator === "/courses" ? "open" : "closed"}
              className={styles.indicator}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <Link href="/courses">Courses</Link>
          </motion.div>
          <motion.div
            className={styles.link}
            onMouseEnter={() => {
              setSelectedIndicator("/portal");
            }}
            custom={"4"}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              variants={scale}
              animate={selectedIndicator === "/portal" ? "open" : "closed"}
              className={styles.indicator}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
            <Link href="/portal">Portal</Link>
          </motion.div>
          <motion.div
            className={styles.link}
            onMouseEnter={() => {
              setSelectedIndicator("/Contact");
            }}
            custom={"5"}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              variants={scale}
              animate={selectedIndicator === "/contact" ? "open" : "closed"}
              className={styles.indicator}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
            <Link href="/contact">Contact</Link>
          </motion.div>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
