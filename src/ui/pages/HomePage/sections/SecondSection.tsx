import React from "react";
import styled from "styled-components";

import MyImage from "./../../../../assets/images/home.jpg";

const SecondSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    background-color: blue;
    color: white;
  }
  .quotation {
    background-color: blue;
    color: black;
    padding: 20px;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  opacity: 0.7;
  max-width: 50%;
  max-height: 50%;
`;

export interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = () => {
  return (
    <SecondSectionContainer>
      <div className="logo">LOGO</div>
      <StyledImage src={MyImage} />

      <StyledImage src={MyImage} />
      <div className="quotation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </SecondSectionContainer>
  );
};

export default SecondSection;
