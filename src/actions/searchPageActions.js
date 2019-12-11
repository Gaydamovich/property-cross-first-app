import '@babel/polyfill';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
  CHANGE_FIELD_SEARCH_PAGE, GET_ALL_LOCATIONS,
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

export const getAllLocations = (data) => ({
  type: GET_ALL_LOCATIONS,
  title: data.title,
  placeName: data.placeName,
});

export const asyncGetLocations = (value) => async (dispatch) => {
  dispatch({ type: 'CHANGE_STATUS_REQUEST' });
  try {
    const response = await fetch(`http://localhost:3000/locations/searchByName?placeName=${value}`);
    const data = await response.json();
    data.map((el) => dispatch(getAllLocations(el)));
    dispatch({ type: 'CHANGE_STATUS_REQUEST' });
  } catch (error) {
    dispatch({ type: 'CHANGE_STATUS_ERROR', payload: error.message });
  }
};
