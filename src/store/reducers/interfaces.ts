export interface House {
  id: string;
  address: string;
  createdAt: string;
  description: string;
  floorsNumber: number;
  label: string;
  updatedAt: string;
}
export interface InitialState {
  housesList: null | House[];
  houseDetailsNumber: number | null;
}

export interface Action {
  type: string;
  housesList?: House[];
  id: string;
  index: number;
}
