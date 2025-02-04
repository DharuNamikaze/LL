"use client";
import { useEffect, useRef, useState } from "react";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BiMessageSquareDots } from "react-icons/bi"; // Import the icon
import { syllabusData } from "./data";

const Syllabus: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["What You'll Learn,", "in This Git & GitHub Workshop"];
  const titlep = ["What You'll Learn,in This Git & GitHub Workshop"];

  useEffect(() => {
    const updateTitle = () => {
      if (window.innerWidth > 600) {
        setCurrentTitle(title);
      } else {
        setCurrentTitle(titlep);
      }
    };

    updateTitle(); // Initial check
    window.addEventListener("resize", updateTitle); // Listen for screen resize

    return () => {
      window.removeEventListener("resize", updateTitle); // Cleanup on unmount
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={descriptionRef} className={styles.description}>
        <div className={styles.body}>
          <SlideUpWord
            title={currentTitle}
            isInView={isInView}
            className={styles.tit}
          />
        </div>
      </div>
      <div className={styles.header}>
        <div className="text-[28px] bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.6))] text-transparent bg-clip-text">
          Workshop Syllabus
        </div>
        <div className={styles.subtitle}>
          <div>4 Modules -</div>
          <div className={styles.line}></div>
          <div>16 Topics -</div>
          <div className={styles.line}></div>
          <div>Hands-on Exercises</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.SyllabusArea}>
          {syllabusData.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`${styles.list} ${
                  isExpanded ? styles.expanded : ""
                }`}
              >
                <div
                  className={styles.listRow}
                  onClick={() => toggleExpand(index)}
                >
                  <div className={styles.icon}>
                    <Icon size={25} />
                  </div>
                  <div className={styles.lisContent}>
                    <div className={styles.listStats}>
                      <div className={styles.module}>{module.title}</div>
                      <div className={styles.topic}>{module.subtitle}</div>
                    </div>
                    <div className={styles.DropdownIcon}>
                      {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el;
                  }}
                  className={styles.dropdownContent}
                  style={{
                    maxHeight: isExpanded
                      ? contentRefs.current[index]?.scrollHeight
                      : 0,
                  }}
                >
                  {module.mainTopics.map((mainTopic, mainIndex) => (
                    <div key={mainIndex} className={styles.contentlist}>
                      <div className={styles.mainTopic}>
                        <div
                          className={styles.mainTopicIcon}
                          style={{
                            backgroundColor: "rgb(221, 214, 255)",
                            color: "rgb(101, 78, 163)",
                          }}
                        >
                          <mainTopic.icon size={25} />
                        </div>
                        <span>{mainTopic.title}</span>
                      </div>
                      {mainTopic.subTopics.map((subTopic, subIndex) => (
                        <div key={subIndex} className={styles.subTopics}>
                          <h4>{subTopic.title}</h4>
                          <ul>
                            {subTopic.points.map((point, pointIndex) => (
                              <li key={pointIndex}>
                                <BiMessageSquareDots
                                  color="#b53fa9"
                                  size={18}
                                  style={{ marginRight: "8px" }}
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
