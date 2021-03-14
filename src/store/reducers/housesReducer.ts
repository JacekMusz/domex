import {
  LOAD_HOUSES_LIST,
  REMOVE_HOUSE,
  HOUSE_DETAILS,
} from "./../actions/housesActions";
import { InitialState, Action } from "./interfaces";

const initialState: InitialState = {
  housesList: null,
  houseDetailsNumber: null,
};

const usersRecuder = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_HOUSES_LIST:
      return { ...state, housesList: action.housesList };
    case REMOVE_HOUSE:
      let updatedList = state.housesList?.filter((house) => {
        if (house.id !== action.id) return house;
      });
      return { ...state, housesList: updatedList };
    case HOUSE_DETAILS:
      return { ...state, houseDetailsNumber: action.index };

    default:
      return state;
  }
};

export default usersRecuder;
