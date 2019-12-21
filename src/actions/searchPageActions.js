import '@babel/polyfill';
import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from './actionsTypes/actionsTypes';
import { SEARCH } from '../constants/constants';

export const addLocalityToField = (longTitle) => ({
  type: ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
  longTitle,
});

export const changeField = (value) => ({
  type: CHANGE_FIELD_SEARCH_PAGE,
  payload: value,
});

export const getLocations = (value) => {
  const word = value.split(', ');
  const valueSearch = word.length > 1 ? word[1] : word[0];
  return {
    type: ASYNC_GET_LOCATIONS,
    request: () => fetch(`http://localhost:3000/locations/searchByName?placeName=${valueSearch}`),
    onSuccess: (data) => localStorage.setItem(SEARCH, JSON.stringify(data)),
  };
};
