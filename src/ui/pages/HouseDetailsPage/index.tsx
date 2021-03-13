import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { House } from "./../../../store/reducers/interfaces";
import Template from "./HouseDetailsPage.template";

export interface HouseDetailsPageProps {
  houseIndex: number;
  housesList: House[];
}

const HouseDetailsPage: React.FC<HouseDetailsPageProps> = (props) => {
  const { houseIndex, housesList } = props;

  return <Template currentHouse={housesList[houseIndex]}></Template>;
};

const mapStateToProps = (state: any) => ({
  houseIndex: state.housesReducer.houseDetailsNumber,
  housesList: state.housesReducer.housesList,
});

export default connect(mapStateToProps)(HouseDetailsPage);
