import {
  LOAD_HOUSES_LIST,
  REMOVE_HOUSE,
  HOUSE_DETAILS,
} from "./../actions/housesActions";
import { InitialState } from "./interfaces";

const initialState: InitialState = {
  housesList: null,
  houseDetailsNumber: null,
};

const usersRecuder = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_HOUSES_LIST:
      return { ...state, housesList: action.housesList };
    case REMOVE_HOUSE:
      return { ...state };
    case HOUSE_DETAILS:
      console.log(action);
      return { ...state, houseDetailsNumber: action.index };

    default:
      return state;
  }
};

export default usersRecuder;
