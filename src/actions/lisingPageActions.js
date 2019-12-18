import { GET_PROPERTIES } from './actionsTypes/actionsTypes';

export const getProperties = (placeName, longTitle) => ({
  type: GET_PROPERTIES,
  placeName,
  longTitle,
  request: () => fetch(`http://localhost:3000/locations/${placeName}/properties`),
});
