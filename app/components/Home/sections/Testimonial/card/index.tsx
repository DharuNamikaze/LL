// card/index.tsx
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image"; // Import the Next.js Image component
import styles from "./styles.module.css";

// Define the prop types
interface CardProps {
  image: string;
  feedback: string;
  name: string;
  role: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, feedback, name, role, rating }) => {
  return (
    <main className={styles.card}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Image
            className={styles.profile}
            src={image}
            alt={name}
            width={100} // Replace with the desired width
            height={100} // Replace with the desired height
            priority // Optional: Prioritize loading for above-the-fold images
          />
          <p className={styles.feed}>{feedback}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.rating}>
            {[...Array(rating)].map((_, i) => (
              <AiFillStar key={i} className={styles.star} />
            ))}
          </div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </main>
  );
};

export default Card;
