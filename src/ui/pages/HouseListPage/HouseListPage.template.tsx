import { House } from "./../../../store/reducers/interfaces";
import { Link } from "react-router-dom";

export interface HouseListPageTamplateProps {
  housesList: House[];
  setHouseDetailsNumber: Function;
  fetchingDataInfo: string;
  handleRemoveHouse: Function;
}

const HouseListPageTemplate = (props: HouseListPageTamplateProps) => {
  const {
    setHouseDetailsNumber,
    housesList,
    fetchingDataInfo,
    handleRemoveHouse,
  } = props;

  return (
    <div>
      <h2>Lista domów:</h2>
      <h4>{fetchingDataInfo}</h4>
      {housesList &&
        housesList.map((house, index) => {
          return (
            <li
              style={{
                listStyle: "none",
              }}
              key={house.createdAt}
            >
              <p>{house.createdAt}</p>{" "}
              <Link
                to={"/houseDetails"}
                onClick={() => {
                  setHouseDetailsNumber(index);
                }}
              >
                Pokaż szczegóły
              </Link>
              <button onClick={() => handleRemoveHouse(house.id)}>
                usuń domek
              </button>
            </li>
          );
        })}
    </div>
  );
};

export default HouseListPageTemplate;
