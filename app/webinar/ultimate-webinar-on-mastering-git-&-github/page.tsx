"use client"
import React from "react";
import styles from "./styles.module.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Cards from "./sections/cards";
import Syllabus from "./sections/syllabus";
import Footer from "@/app/components/common/Footer";
import VideoSection from "./sections/Videosection";
import Mentor from "./sections/CertificateSection"
const Webinar = () => {
  // Define the content for the two cards

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <VideoSection />
      <Cards />
      <Mentor />
      <Syllabus />
      <Footer />
    </div>
  );
};

export default Webinar;
