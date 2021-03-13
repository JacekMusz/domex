import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HousesListPage from "./pages/HouseListPage/index";
import HouseDetailsPage from "./pages/HouseDetailsPage/";
import AddHousePage from "./pages/AddHousePage";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1199px) {
  }
`;

export interface UIContainerProps {}

const UIContainer: React.FC<UIContainerProps> = () => {
  return (
    <AppContainer>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/housesList" component={HousesListPage} />
        <Route path="/houseDetails" component={HouseDetailsPage} />
        <Route path="/addHouse" component={AddHousePage} />
      </Router>
    </AppContainer>
  );
};

export default UIContainer;
