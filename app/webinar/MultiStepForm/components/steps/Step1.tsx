import React from "react";
import styles from "./styles.module.css";

interface Step1Props {
  data: {
    fullName: string;
    email: string;
    phone: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phone: string;
    }>
  >;
}

const Step1: React.FC<Step1Props> = ({ data, setData }) => {
  return (
    <>
    <div className={styles.step}>
      <h2 className={styles.heading}>Personal Details</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Full Name:
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) =>
              setData({ ...data, fullName: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          Phone:
          <input
            className={styles.input}
            type="tel"
            placeholder="Enter your phone number"
            value={data.phone}
            onChange={(e) =>
              setData({ ...data, phone: e.target.value })}
          />
        </label>
      </form>
    </div>
    </>
    );
}
  
export default Step1;