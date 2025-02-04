import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <StyledWrapper>
      <a className="menu__link">{text}</a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* <reset-style> ============================ */
  a {
    text-decoration: none;
  }
  /* <main-style> ============================ */
  .menu__link {
    color: #000; /* Changed to black */
    line-height: 2;
    position: relative;
  }

  .menu__link::before {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #000; /* Changed to black */
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    transition: width 0.4s;
  }

  .menu__link:hover::before {
    width: 100%;
  }
`;

export default Button;
