"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const HamburgerMenu: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu when the pathname changes
    setIsActive(false);
  }, [pathname]); // Only pathname is relevant here

  return (
    <>
      <div className={styles.header}>
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
