import { GET_PROPERTIES } from './actionsTypes/actionsTypes';

/* eslint-disable import/prefer-default-export */
export const getProperties = (placeName) => ({
  type: GET_PROPERTIES,
  placeName,
  request: () => fetch(`http://localhost:3000/locations/${placeName}/properties`),
});
