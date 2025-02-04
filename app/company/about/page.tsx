"use client"
import React from "react";
import styles from "./styles.module.css";
import Hero from "./components/HeroSection"
import Header from "@/app/components/common/HeaderDark";
import OurVision from "./components/OurVision";
import OurServices from "./components/OurServices";
import Footer from "@/app/components/common/Footer";
import Desc from "./components/desc"
import dynamic from "next/dynamic";
const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  { ssr: false }
);
const AboutPage: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <div className={styles.main}>
        <Header />
        <Hero />
        <Desc />
        <OurVision />
        <OurServices />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
