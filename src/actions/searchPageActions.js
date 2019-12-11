import '@babel/polyfill';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
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

export const fetchApiMiddleware = () => (dispatch) => async (action) => {
  if (action.request) {
    dispatch({ type: 'REQUEST_STARTED' });
    let newAction;
    try {
      const response = await action.payload;
      const data = await response.json();
      newAction = {
        ...action,
        type: 'REQUEST_SUCCESS',
        payload: data,
      };
    } catch (error) {
      newAction = {
        ...action,
        type: 'REQUEST_FAILED',
        payload: error.message,
      };
    }
    return dispatch(newAction);
  }
  return dispatch(action);
};

export const asyncGetLocations = (value) => ({
  request: true,
  type: 'ASYNC_GET_LOCATIONS',
  payload: fetch(`http://localhost:3000/locations/searchByName?placeName=${value}`),
});
