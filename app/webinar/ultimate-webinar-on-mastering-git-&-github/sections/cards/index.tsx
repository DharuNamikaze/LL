import React from 'react'
import Card from './card'
import styles from "./styles.module.css"
const cards = () => {
    const card1 = {
      title: "Master Git & GitHub",
      description:
        "Perfect for anyone looking to boost their version control and collaboration skills. Learn the essentials of Git and GitHub in just 2 days!",
      features: [
        "Hands-on Practice",
        "Learn Git Basics & GitHub Features",
        "Real-World Project Examples",
        "Expert Guidance",
        "Beginner to Advanced in 2 Days",
      ],
    };

    const card2 = {
      title: "Workshop Perks",
      description:
        "Gain practical knowledge and valuable credentials with our comprehensive workshop.",
      features: [
        "Flexible Timing Options",
        "Certified Completion Certificate",
        "Lifetime Access to Resources",
        "Live Q&A Sessions",
        "Networking with Industry Experts",
      ],
    };
  return (
    <div>
      <div className={styles.cardsContainer}>
        <Card
          title={card1.title}
          description={card1.description}
          features={card1.features}
        />
        <Card
          title={card2.title}
          description={card2.description}
          features={card2.features}
        />
      </div>
    </div>
  );
}

export default cards
