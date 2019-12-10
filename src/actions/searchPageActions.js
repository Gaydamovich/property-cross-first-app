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

export const asyncGetLocations = (placeName) => (dispatch) => {
  fetch(`http://localhost:3000/locations/searchByName?placeName=${placeName}`)
    .then((response) => response.json())
    .then((data) => data.map((el) => dispatch(getAllLocations(el))));
};
