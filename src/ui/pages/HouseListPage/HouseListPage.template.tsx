import { House } from "./../../../store/reducers/interfaces";
import { Link } from "react-router-dom";

export interface HouseListPageTamplateProps {
  housesList: House[];
  setHouseDetailsNumber: Function;
}

const HouseListPageTemplate = (props: HouseListPageTamplateProps) => {
  const { setHouseDetailsNumber, housesList } = props;
  return (
    <div>
      <h2>ListDomów:</h2>
      {housesList &&
        housesList.map((house, index) => {
          return (
            <li key={house.createdAt}>
              <p>{house.createdAt}</p>{" "}
              <Link
                to={"/houseDetails"}
                onClick={() => {
                  setHouseDetailsNumber(index);
                }}
              >
                get more details
              </Link>
            </li>
          );
        })}
    </div>
  );
};

export default HouseListPageTemplate;
