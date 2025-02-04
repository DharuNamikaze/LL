import React from "react";
import styles from "./styles.module.css";
import Character from "./character";

const paragraph =
  "LearnLogicify Technologies is a leading coding education company empowering students with essential tech skills through hands-on training in frontend, backend, databases, and full-stack development. With an industry-focused curriculum and practical workshops, we bridge the gap between learning and real-world application, helping students turn their coding aspirations into successful careers.";

const Desc = () => {
  return (
    <div
      className={`flex justify-center pt-[50px] pb-[50px] ${styles.container}`}
    >
      <div className={`${styles.character}`}>
        <Character paragraph={paragraph} useGradient={false} />
      </div>
      <div className={`${styles.defaultParagraph}`}>{paragraph}</div>
    </div>
  );
};

export default Desc;
