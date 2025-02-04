"use client";

import React from "react";
import styles from "./styles.module.css";
import Header from "../components/common/HeaderDark";
import Footer from "../components/common/Footer";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const ContactForm = dynamic(() => import("./components/form"), { ssr: false });
const ReachOut = dynamic(() => import("./components/reachOut"), { ssr: false });

// Import the Lottie animation data
import animationData from "./components/lottie/Chatting.json";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Main Content Section */}
      <main className={styles.main}>
        <section className={styles.container}>
          {/* Left Section with Lottie Animation */}
          <section className={styles.left}>
            <Lottie
              animationData={animationData}
              loop={true}
              className={styles.lottie}
            />
          </section>

          {/* Right Section with Contact Form */}
          <section className={styles.right}>
            <header>
              <h1 className={styles.title}>Let&apos;s Get in Touch</h1>
              <div className={styles.content}>
                <ContactForm />
              </div>
            </header>
          </section>
        </section>

        {/* ReachOut Section */}
        <section>
          <ReachOut />
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
