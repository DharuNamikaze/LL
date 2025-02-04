import React from "react";
import styles from "./styles.module.css";
import Checkbox from "./checkbox";
import styled from "styled-components";

interface Step4Props {
  data: {
    expectations: string;
    setupHelp: string;
    topics: {
      git: boolean;
      collaboration: boolean;
      pullRequests: boolean;
      actions: boolean;
    };
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      expectations: string;
      setupHelp: string;
      topics: {
        git: boolean;
        collaboration: boolean;
        pullRequests: boolean;
        actions: boolean;
      };
    }>
  >;
}

const Step4: React.FC<Step4Props> = ({ data, setData }) => {
  const handleCheckboxChange = (topic: keyof typeof data.topics) => {
    setData((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topic]: !prev.topics[topic],
      },
    }));
  };

  return (
    <div className={styles.step}>
      <h2 className={styles.heading}>Workshop Expectations</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          What do you hope to learn in this workshop?
          <textarea
            className={styles.input}
            placeholder="Enter your expectations"
            rows={3}
            value={data.expectations}
            onChange={(e) =>
              setData((prev) => ({ ...prev, expectations: e.target.value }))
            }
          ></textarea>
        </label>
        <StyledLabel>
          Do you need help with installation/setup of Git?
          <div className="radioGroup">
            <StyledRadio>
              <input
                type="radio"
                name="setupHelp"
                value="yes"
                checked={data.setupHelp === "yes"}
                onChange={() =>
                  setData((prev) => ({ ...prev, setupHelp: "yes" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">Yes</span>
            </StyledRadio>
            <StyledRadio>
              <input
                type="radio"
                name="setupHelp"
                value="no"
                checked={data.setupHelp === "no"}
                onChange={() =>
                  setData((prev) => ({ ...prev, setupHelp: "no" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">No</span>
            </StyledRadio>
          </div>
        </StyledLabel>
        <label className={styles.label}>
          Which topics are you most interested in?
          <div className={styles.checkboxGroup}>
            <Checkbox
              label="Version Control with Git"
              checked={data.topics.git}
              onChange={() => handleCheckboxChange("git")}
            />
            <Checkbox
              label="Collaboration with GitHub"
              checked={data.topics.collaboration}
              onChange={() => handleCheckboxChange("collaboration")}
            />
            <Checkbox
              label="Pull Requests"
              checked={data.topics.pullRequests}
              onChange={() => handleCheckboxChange("pullRequests")}
            />
            <Checkbox
              label="GitHub Actions"
              checked={data.topics.actions}
              onChange={() => handleCheckboxChange("actions")}
            />
          </div>
        </label>
      </form>
    </div>
  );
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const StyledRadio = styled.label`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  input[type="radio"] {
    display: none;
  }

  .custom-radio {
    width: 20px;
    height: 20px;
    border: 2px solid #3ca295;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  input[type="radio"]:checked + .custom-radio {
    background: #3ca295;
    border-color: #3ca295;
  }

  input[type="radio"]:checked + .custom-radio:after {
    content: "";
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
  }

  .text {
    font-size: 1rem;
  }
`;

export default Step4;
