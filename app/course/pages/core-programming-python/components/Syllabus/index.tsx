"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BiMessageSquareDots } from "react-icons/bi"; // Import the icon
import { syllabusData } from "./data/syllabusData";

const Syllabus: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to determine the styles for main topic icons
  const getMainTopicIconStyle = (mainIndex: number) => {
    const styles = [
      {
        backgroundColor: "rgb(255, 221, 170)", // Light orange
        color: "rgb(255, 157, 37)", // Orange
      },
      {
        backgroundColor: "rgb(170, 255, 221)", // Light green
        color: "rgb(0, 160, 107)", // Green
      },
      {
        backgroundColor: "rgb(221, 214, 255)", // Light purple
        color: "rgb(101, 78, 163)", // Purple
      },
    ];
    return styles[mainIndex % styles.length]; // Cycle through styles
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Course Syllabus</div>
        <div className={styles.subtitle}>
          <div>10 Modules</div>
          <div className={styles.line}></div>
          <div>46 Topics</div>
          <div className={styles.line}></div>
          <div>500 problems</div>
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
                    <Icon size={35} />
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
                  {module.mainTopics.map((mainTopic, mainIndex) => {
                    const iconStyle = getMainTopicIconStyle(mainIndex); // Get styles for the icon
                    return (
                      <div key={mainIndex} className={styles.contentlist}>
                        <div className={styles.mainTopic}>
                          <div
                            className={styles.mainTopicIcon}
                            style={{
                              backgroundColor: iconStyle.backgroundColor,
                              color: iconStyle.color,
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
                                    color="blue"
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
                    );
                  })}
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
