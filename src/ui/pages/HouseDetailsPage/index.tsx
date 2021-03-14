import React from "react";
import { connect } from "react-redux";

import { House } from "./../../../store/reducers/interfaces";
import { removeHouse } from "./../../../store/actions/housesActions";
import Template from "./HouseDetailsPage.template";

export interface HouseDetailsPageProps {
  houseIndex: number;
  housesList: House[];
  removeHouse: Function;
  history: any; //i know it bad idea
}

const HouseDetailsPage: React.FC<HouseDetailsPageProps> = (props) => {
  const { houseIndex, housesList, removeHouse, history } = props;
  console.log(props);
  const handleRemoveHouse = (id: string) => {
    history.push("/housesList");
    removeHouse(id);
  };
  return (
    <Template
      handleRemoveHouse={handleRemoveHouse}
      choosenHouse={housesList[houseIndex]}
    ></Template>
  );
};

const mapStateToProps = (state: any) => ({
  houseIndex: state.housesReducer.houseDetailsNumber,
  housesList: state.housesReducer.housesList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  removeHouse: (id: string) => dispatch(removeHouse(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetailsPage);
