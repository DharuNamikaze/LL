import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        <label className="label">
          <input
            type="radio"
            id="value-1"
            defaultChecked
            name="value-radio"
            defaultValue="value-1"
          />
          <p className="text">Designer</p>
        </label>
        <label className="label">
          <input
            type="radio"
            id="value-2"
            name="value-radio"
            defaultValue="value-2"
          />
          <p className="text">Student</p>
        </label>
        <label className="label">
          <input
            type="radio"
            id="value-3"
            name="value-radio"
            defaultValue="value-3"
          />
          <p className="text">Teacher</p>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radio-input * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .radio-input label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
  }

  .radio-input label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
  }
  .radio-input label:hover::before {
    transition: all 0.2s ease;
    background-color: #2a2e3c;
  }

  .radio-input .label:has(input:checked)::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
  }
  .radio-input .label .text {
    color: #fff;
  }

  .radio-input .label input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .radio-input .label input[type="radio"]:checked {
    background-color: #435dd8;
    -webkit-animation: puls 0.7s forwards;
    animation: pulse 0.7s forwards;
  }

  .radio-input .label input[type="radio"]:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
  }

  .radio-input .label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

export default Radio;
