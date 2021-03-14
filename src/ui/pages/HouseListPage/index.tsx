import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { api_URL } from "./../../../api";
import Template from "./HouseListPage.template";

import {
  loadHousesList,
  setHouseDetailsNumber,
  removeHouse,
} from "./../../../store/actions/housesActions";
import { House } from "./../../../store/reducers/interfaces";

export interface HouseDetailsPageProps {
  loadHousesList: Function;
  setHouseDetailsNumber: Function;
  housesList: House[];
  removeHouse: Function;
}

const HouseListPage: React.FC<HouseDetailsPageProps> = (
  props: HouseDetailsPageProps
) => {
  const {
    loadHousesList,
    housesList,
    setHouseDetailsNumber,
    removeHouse,
  } = props;
  const [fetchingDataInfo, setFetchingDataInfo] = useState<string>("");

  const handleLoadHousesList = function (resp: {
    error: boolean;
    results: any[];
  }) {
    if (!resp.error) {
      setFetchingDataInfo("");
      const housesList = resp.results.map((item) => {
        return {
          id: item._id,
          address: item.address,
          createdAt: item.createdAt,
          description: item.description,
          floorsNumber: item.floorsNumber,
          label: item.label,
          updatedAt: item.updatedAt,
        };
      });
      loadHousesList(housesList);
    } else {
      setFetchingDataInfo("Coś poszło nie tak!");
    }
  };

  const handleRemoveHouse = function (id: string) {
    removeHouse(id);
  };

  useEffect(() => {
    setFetchingDataInfo("Pobieranie danych");
    if (housesList === null)
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
      fetchingDataInfo={fetchingDataInfo}
      handleRemoveHouse={handleRemoveHouse}
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
  removeHouse: (id: string) => dispatch(removeHouse(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseListPage);
