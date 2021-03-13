import React from "react";
import styled from "styled-components";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .firstAndSecondSections,
  .thirdAndFourthSections {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <HomePageContainer>
      <div className="firstAndSecondSections">
        <FirstSection />
        <SecondSection />
      </div>
      <div className="thirdAndFourthSections">
        <ThirdSection />
        <FourthSection />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
