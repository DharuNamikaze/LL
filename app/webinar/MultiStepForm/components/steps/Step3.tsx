import React from "react";
import styles from "./styles.module.css";
import styled from "styled-components";

interface Step3Props {
  data: {
    fullstack: string;
    joinWorkshop: string;
    priceRange: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      fullstack: string;
      joinWorkshop: string;
      priceRange: string;
    }>
  >;
}

const Step3: React.FC<Step3Props> = ({ data, setData }) => {
  return (
    <div className={styles.step}>
      <h2 className={styles.heading}>Workshop Interest</h2>
      <form className={styles.form}>
        <StyledLabel>
          Are you willing to learn full-stack development?
          <div className="radioGroup">
            <StyledRadio>
              <input
                type="radio"
                name="fullstack"
                value="yes"
                checked={data.fullstack === "yes"}
                onChange={() =>
                  setData((prev) => ({ ...prev, fullstack: "yes" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">Yes</span>
            </StyledRadio>
            <StyledRadio>
              <input
                type="radio"
                name="fullstack"
                value="no"
                checked={data.fullstack === "no"}
                onChange={() =>
                  setData((prev) => ({ ...prev, fullstack: "no" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">No</span>
            </StyledRadio>
          </div>
        </StyledLabel>
        <StyledLabel>
          If we organize a 30-day full-stack workshop, would you be interested?
          <div className="radioGroup">
            <StyledRadio>
              <input
                type="radio"
                name="joinWorkshop"
                value="yes"
                checked={data.joinWorkshop === "yes"}
                onChange={() =>
                  setData((prev) => ({ ...prev, joinWorkshop: "yes" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">Yes</span>
            </StyledRadio>
            <StyledRadio>
              <input
                type="radio"
                name="joinWorkshop"
                value="no"
                checked={data.joinWorkshop === "no"}
                onChange={() =>
                  setData((prev) => ({ ...prev, joinWorkshop: "no" }))
                }
              />
              <span className="custom-radio"></span>
              <span className="text">No</span>
            </StyledRadio>
          </div>
        </StyledLabel>
        <StyledLabel>
          What price range would you expect for the 30-day workshop?
          <select
            className={styles.input}
            value={data.priceRange}
            onChange={(e) =>
              setData((prev) => ({ ...prev, priceRange: e.target.value }))
            }
          >
            <option value="">Select price range</option>
            <option value="1999">₹1999</option>
            <option value="2499">₹2499</option>
            <option value="5999">₹5999</option>
          </select>
        </StyledLabel>
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

export default Step3;
