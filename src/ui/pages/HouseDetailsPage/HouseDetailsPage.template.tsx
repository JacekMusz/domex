import { House } from "./../../../store/reducers/interfaces";

export interface HouseDetailsPageTamplateProps {
  choosenHouse: null | House;
  handleRemoveHouse: Function;
}

const HouseDetailsPageTemplate = (props: HouseDetailsPageTamplateProps) => {
  const { choosenHouse, handleRemoveHouse } = props;

  return (
    <div>
      {choosenHouse && (
        <>
          <h2>Szczegóły wybranego domu:</h2>
          <ul>
            <li>address: {choosenHouse.address}</li>
            <li>createdAt: {choosenHouse.createdAt}</li>
            <li>description: {choosenHouse.description}</li>
            <li>floorsNumber: {choosenHouse.floorsNumber}</li>
            <li>id: {choosenHouse.floorsNumber}</li>
            <li>label: {choosenHouse.floorsNumber}</li>
            <li>updatedAt: {choosenHouse.updatedAt}</li>
          </ul>
          <button onClick={() => handleRemoveHouse(choosenHouse.id)}>
            usuń domek
          </button>
        </>
      )}
    </div>
  );
};

export default HouseDetailsPageTemplate;
