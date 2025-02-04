import React from "react";
import styles from "./styles.module.css";

const Card = ({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__border}></div>
      <div className={styles.card_title__container}>
        <span className={styles.card_title}>{title}</span>
        <p className={styles.card_paragraph}>{description}</p>
      </div>
      <hr className={styles.line} />
      <ul className={styles.card__list}>
        {features.map((feature, index) => (
          <li key={index} className={styles.card__list_item}>
            <span className={styles.check}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={styles.check_svg}
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className={styles.list_text}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
