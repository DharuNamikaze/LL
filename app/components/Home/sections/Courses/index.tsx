"use client";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs"; // Import arrow icon from react-icons
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Slide up animation for the title
import FadeTransition from "../../../common/Animations/textFade"; // Fade transition animation for the description
import styles from "./styles.module.css"; 
import Grid from "./grid";
import Link from "next/link"; 

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Explore Our Popular Courses"];
  const description =
    "Explore some of the top courses we provide, designed to kickstart your tech journey. Whether you are looking to master problem-solving, coding essentials, or industry-specific skills, we have got you covered. This is just a glimpse of what we offer click below to view our full range of courses and find the perfect one for you!";

  // Filter only available courses (first 4)


  // Animation variants for the grid
  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the card animations by 0.2 seconds
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (hidden and moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final state (fade in and move up)
  };

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        {/* Title animation */}
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <Grid/>
        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />

        {/* View All Courses Button */}
        <Link href="/courses" className={styles.viewAllLink}>
          View All Courses <BsArrowRight className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
}
