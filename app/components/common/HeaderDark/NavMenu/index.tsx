import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Button from "../button";
const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.dropdown}>
        <Link href={"/"}>
          <Button text="Company" />
        </Link>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/company/about">About Us</Link>
          </li>
          <li>
            <Link href="/company/team">Team</Link>
          </li>
        </div>
      </div>
      <div>
        <Link href={"/course"}>
          <Button text="Courses" />
        </Link>
      </div>
      <div>
        <Link href={"/portal"}>
          <Button text="LMS Portal" />
        </Link>
      </div>
      <div>
        <Link href={"/contact"}>
          <Button text="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
