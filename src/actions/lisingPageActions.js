import { GET_PROPERTIES } from './actionsTypes/actionsTypes';

export const getProperties = (placeName) => ({
  type: GET_PROPERTIES,
  placeName,
  request: () => fetch(`http://localhost:3000/locations/${placeName}/properties`),
});
