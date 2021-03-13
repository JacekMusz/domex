import { House } from "./../../../store/reducers/interfaces";

export interface HouseDetailsPageTamplateProps {
  currentHouse: null | House;
}

const HouseDetailsPageTemplate = (props: HouseDetailsPageTamplateProps) => {
  const { currentHouse } = props;

  return (
    <div>
      {currentHouse !== null && (
        <>
          {" "}
          details:
          <li> createdAt: {currentHouse.createdAt}</li>
          <li>updatedAt: {currentHouse.updatedAt}</li>
        </>
      )}
    </div>
  );
};

export default HouseDetailsPageTemplate;
