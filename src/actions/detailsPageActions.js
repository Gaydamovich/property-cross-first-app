import { GET_PROPERTY_BY_ID } from './actionsTypes/actionsTypes';

export const getPropertyById = (placeName, id) => ({
  type: GET_PROPERTY_BY_ID,
  request: () => fetch(`http://localhost:3000/locations/${placeName}/properties/${id}`),
});
