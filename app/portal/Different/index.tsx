import React from "react";
import Image from "next/image"; // Import Image from next/image
import styles from "./Styles.module.css";
import Img1 from "@/public/images/banner/in-depth.jpg";
import Img2 from "@/public/images/banner/animated-video.jpg";
import Img3 from "@/public/images/banner/assessment.jpg";

const Different = () => {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>
          What makes us
          <span className={styles.animatedGradient}> Different</span>
        </h1>
        <section className={styles.content}>
          <div className={styles.card1}>
            <h2 className={styles.cardTitle}>
              In&#45;Depth <br />
              Understanding
            </h2>
            <p className={styles.desc}>
              Explore a profound grasp of programming fundamentals, tailored to
              simplify complex concepts for effective learning.
            </p>
            <Image
              src={Img1}
              alt="In-Depth Understanding"
              className={styles.cardImage}
              width={500} // Replace with actual width of the image
              height={300} // Replace with actual height of the image
              priority // Ensures the image is loaded eagerly
            />
          </div>
          <div className={styles.card2}>
            <h2 className={styles.cardTitle}>
              Engaging <br /> animated Videos
            </h2>
            <p className={styles.desc}>
              Dive into captivating animated tutorials, bringing programming
              concepts to life and making learning a delight.
            </p>
            <Image
              src={Img2}
              alt="Engaging Animated Videos"
              className={styles.cardImage}
              width={500}
              height={300}
              priority
            />
          </div>
          <div className={styles.card3}>
            <h2 className={styles.cardTitle}>
              Weekly <br />
              Assessment
            </h2>
            <p className={styles.desc}>
              Take part in weekly assessments that measure your progress,
              solidifying your coding skills and driving continuous improvement.
            </p>
            <Image
              src={Img3}
              alt="Weekly Assessment"
              className={styles.cardImage}
              width={500}
              height={300}
              priority
            />
          </div>
        </section>
      </header>
    </main>
  );
};

export default Different;
