import React from "react";
import styled from "styled-components";

import { StyledLink } from "./../../../shared/Link";

export interface FourthSectionProps {}

const FourthSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }

  h4 {
    color: blue;
    text-align: center;
  }
  @media (min-width: 1024px) {
    width: 50%;
    padding: 5%;
  }
`;

const FourthSection: React.FC<FourthSectionProps> = () => {
  return (
    <FourthSectionContainer>
      <h1>NASZA OFERTA</h1>
      <h4>Dowiedz się wiecej</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <StyledLink to="/housesList">ZOBACZ WIĘCEJ</StyledLink>
    </FourthSectionContainer>
  );
};

export default FourthSection;
