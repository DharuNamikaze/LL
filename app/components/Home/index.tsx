"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import Offer from "../offer";
import Header from "../common/HeaderDark";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import GetToKnow from "./sections/GetToKnow";
import Courses from "./sections/Courses";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonial";
import Banner from "@/app/components/common/WebinarBanner"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [offerVisible, setOfferVisible] = useState<boolean>(false); // Manage Offer visibility
  const [isDesktopView, setIsDesktopView] = useState<boolean>(true); // Track desktop view
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 840);
    };

    // Initialize on mount and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Set initial stroke state
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        strokeLinecap: "round",
      });

      // Animate the path on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <>
      {/* Render Offer component only in desktop view */}
      {isDesktopView && <Offer setOfferVisible={setOfferVisible} />}
      <main
        className={styles.main}
        style={{
          paddingTop: offerVisible && isDesktopView ? "70px" : "0px", // Adjust padding dynamically
          transition: "padding-top 0.6s ease-in-out", // Smooth transition
        }}
      >
        <Header />
        <HeroPage />
        <Description />
        <VideoSection />
        <GetToKnow />
        <AboutPortal />
        <Courses />
        <Stats />
        <Testimonials />
        <Banner /> 
      </main>
    </>
  );
};

export default HomePage;
