"use client"
import React from 'react'
import styles from "./styles.module.css"
import Header from "@/app/components/common/HeaderDark";
import Description from "./Description"
import Footer from '../components/common/Footer';
import Grid from "./grid"
import dynamic from "next/dynamic";
const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  { ssr: false }
);
const CoursePage: React.FC = () => {
  return (
    <div>
      <ScrollHandler />
      <Header />
      <div className={styles.main}>
        <Description />
        <Grid />
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage
