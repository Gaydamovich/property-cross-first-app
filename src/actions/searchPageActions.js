import '@babel/polyfill';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE, GET_DATA_FROM_LOCAL_STORAGE,
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

export const addResultsSearchToLocalStorage = (data) => {
  localStorage.setItem('search', JSON.stringify(data));
};

export const getLocations = (value) => ({
  type: ASYNC_GET_LOCATIONS,
  request: () => fetch(`http://localhost:3000/locations/searchByName?placeName=${value}`),
  answer: (data) => addResultsSearchToLocalStorage(data),
});

export const getDataFromLocalStorage = (data) => ({
  type: GET_DATA_FROM_LOCAL_STORAGE,
  payload: data,
});
