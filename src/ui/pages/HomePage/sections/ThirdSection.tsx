import React from "react";
import styled from "styled-components";

const ThirdSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: lightblue;
  min-height: 100vh;
  padding: 20%;
  h1 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 5%;
  }
`;

export interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = () => {
  return (
    <ThirdSectionContainer>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </ThirdSectionContainer>
  );
};

export default ThirdSection;
