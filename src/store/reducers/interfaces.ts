export interface House {
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
