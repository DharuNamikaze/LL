import React from "react";
import styles from "./styles.module.css";

interface Step2Props {
  data: {
    yearOfStudy: string;
    graduationYear: string;
    collegeName: string;
    department: string;
    address: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      yearOfStudy: string;
      graduationYear: string;
      collegeName: string;
      department: string;
      address: string;
    }>
  >;
}

const Step2: React.FC<Step2Props> = ({ data, setData }) => {
  return (
    <div className={styles.step}>
      <h2 className={styles.heading}>Educational Details</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Year of Study:
          <select
            className={styles.input}
            value={data.yearOfStudy}
            onChange={(e) =>
              setData({ ...data, yearOfStudy: e.target.value })}
          >
            <option value="">Select your year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </label>
        <label className={styles.label}>
          Graduation Year:
          <input
            className={styles.input}
            type="number"
            placeholder="Enter your graduation year"
            value={data.graduationYear}
            onChange={(e) =>
              setData({ ...data, graduationYear: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          College Name:
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your college name"
            value={data.collegeName}
            onChange={(e) =>
              setData({ ...data, collegeName: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          Department:
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your department"
            value={data.department}
            onChange={(e) =>
              setData({ ...data, department: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          Address:
          <textarea
            className={styles.input}
            placeholder="Enter your address"
            rows={3}
            value={data.address}
            onChange={(e) =>
              setData({ ...data, address: e.target.value })}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default Step2;
