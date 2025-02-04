"use client";

import React from "react";
import Styles from "./styles.module.css";
import Card from "../card";

const CardGrid = () => {
  const cardData = [
    {
      image: "/images/courseCover/ai.jpg",
      title: "AI Essentials & Beyond",
      link: "/course/pages/ai-essentials",
    },
    {
      image: "/images/courseCover/ml.png",
      title: "Machine Learning Mastery",
      link: "/course/pages/ml-mastery",
    },
    {
      image: "/images/courseCover/web.png",
      title: "Full-Stack Web Development",
      link: "/course/pages/web-dev",
    },
    {
      image: "/images/courseCover/app.png",
      title: "Next-Gen App Development",
      link: "/course/pages/app-dev",
    },
    {
      image: "/images/courseCover/DS.png",
      title: "Data Science Accelerator",
      link: "/course/pages/data-science-accelerator",
    },
    {
      image: "/images/courseCover/c++.png",
      title: "C++ Fundamentals",
      link: "/course/pages/core-programming-cpp",
    },
    {
      image: "/images/courseCover/java.png",
      title: "Java Programming",
      link: "/course/pages/core-programming-java",
    },
    {
      image: "/images/courseCover/py.png",
      title: "Python Programming",
      link: "/course/pages/core-programming-python",
    },
  ];

  return (
    <div className={Styles.grid}>
      {cardData.map((data, index) => (
        <div key={index} className={Styles.row}>
          <Card image={data.image} title={data.title} link={data.link} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
