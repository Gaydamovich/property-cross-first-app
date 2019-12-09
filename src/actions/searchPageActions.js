import {
  ADD_LOCALITY_TO_FIELD,
  CHANGE_FIELD
} from "./actionsTypes/actionsTypes";



export const addLocalityToField = (city, street) => {
  return {
    type: ADD_LOCALITY_TO_FIELD,
    city,
    street
  }
};

export const changeField = (value) => {
  return {
    type: CHANGE_FIELD,
    payload: value
  }
};
