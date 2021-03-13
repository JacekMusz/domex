import React, { useEffect } from "react";
import { connect } from "react-redux";

import { api_URL } from "./../../../api";
import Template from "./HouseListPage.template";

import {
  loadHousesList,
  setHouseDetailsNumber,
} from "./../../../store/actions/housesActions";
import { House } from "./../../../store/reducers/interfaces";

export interface HouseDetailsPageProps {
  loadHousesList: Function;
  setHouseDetailsNumber: Function;
  housesList: House[];
}

const HouseListPage: React.FC<HouseDetailsPageProps> = (
  props: HouseDetailsPageProps
) => {
  const { loadHousesList, housesList, setHouseDetailsNumber } = props;
  const handleLoadHousesList = function (resp: {
    error: boolean;
    results: any[];
  }) {
    if (!resp.error) {
      const housesList = resp.results.map((item) => {
        return {
          address: item.address,
          createdAt: item.createdAt,
          description: item.description,
          floorsNumber: item.floorsNumber,
          label: item.label,
          updatedAt: item.updatedAt,
        };
      });
      loadHousesList(housesList);
    }
  };
  useEffect(() => {
    fetch(`${api_URL}houses/all`)
      .then((res) => res.json())
      .then((resp) => handleLoadHousesList(resp))
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  return (
    <Template
      housesList={housesList}
      setHouseDetailsNumber={setHouseDetailsNumber}
    />
  );
};

const mapStateToProps = (state: any) => ({
  housesList: state.housesReducer.housesList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadHousesList: (housesList: House[]) => dispatch(loadHousesList(housesList)),
  setHouseDetailsNumber: (index: number) =>
    dispatch(setHouseDetailsNumber(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseListPage);
