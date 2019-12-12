import '@babel/polyfill';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from './actionsTypes/actionsTypes';

export const addLocalityToField = (city, street) => ({
  type: ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
  city,
  street,
});

export const changeField = (value) => ({
  type: CHANGE_FIELD_SEARCH_PAGE,
  payload: value,
});

export const asyncGetLocations = (value) => ({
  request: true,
  type: ASYNC_GET_LOCATIONS,
  payload: fetch(`http://localhost:3000/locations/searchByName?placeName=${value}`),
});
