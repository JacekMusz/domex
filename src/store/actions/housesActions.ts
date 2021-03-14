import { House } from "../reducers/interfaces";

export const LOAD_HOUSES_LIST = "LOAD_HOUSES_LIST";
export const REMOVE_HOUSE = "REMOVE_HOUSE";
export const HOUSE_DETAILS = "HOUSE_DETAILS";

export const loadHousesList = (housesList: House[]) => ({
  type: LOAD_HOUSES_LIST,
  housesList,
});

export const setHouseDetailsNumber = (index: number) => ({
  type: HOUSE_DETAILS,
  index,
});

export const removeHouse = (id: string) => ({
  type: REMOVE_HOUSE,
  id,
});
