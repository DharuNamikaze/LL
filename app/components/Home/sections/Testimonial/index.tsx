import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import Card from "./card";
import testimonials from "./data";
import styles from "./styles.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollLeft = () => {
    if (gridRef.current) {
      const newPosition = Math.max(scrollPosition - 300, 0); // Calculate new scroll position
      setScrollPosition(newPosition);

      // Use DOM `scrollBy` for smooth scrolling
      gridRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });

      updateArrowVisibility(newPosition);
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const maxScroll =
        gridRef.current.scrollWidth - gridRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 300, maxScroll); // Calculate new scroll position
      setScrollPosition(newPosition);

      // Use DOM `scrollBy` for smooth scrolling
      gridRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });

      updateArrowVisibility(newPosition);
    }
  };

  const updateArrowVisibility = (position: number) => {
    if (gridRef.current) {
      const maxScroll =
        gridRef.current.scrollWidth - gridRef.current.clientWidth;
      setShowLeftArrow(position > 0); // Show left arrow only if scrolled
    }
  };

  const title = ["Hear What Our Students Say!"];
  const description =
    "Discover inspiring feedback from our students, showcasing how LearnLogicify has transformed their learning experiences and accelerated their tech careers.";

  return (
    <main ref={descriptionRef} className={styles.main}>
      <div className={styles.body}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />
        <div className={styles.gridWrapper}>
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className={`${styles.arrowButton} ${styles.leftArrow}`}
            >
              <IoIosArrowBack />
            </button>
          )}
          <div
            ref={gridRef}
            className={styles.grid}
            onScroll={() => updateArrowVisibility(scrollPosition)} // Update visibility on manual scroll
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className={styles.cardWrapper}>
                <Card
                  image={testimonial.image}
                  feedback={testimonial.feedback}
                  name={testimonial.name}
                  role={testimonial.role}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className={`${styles.arrowButton} ${styles.rightArrow}`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </main>
  );
}
