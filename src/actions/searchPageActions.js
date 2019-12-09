import {
  ADD_LOCALITY_TO_FIELD,
  CHANGE_FIELD
} from "./actionsTypes/actionsTypes";



export const actionAddLocalityToField = (city, street) => {
  return {
    type: ADD_LOCALITY_TO_FIELD,
    city,
    street
  }
};

export const actionChangeField = (value) => {
  return {
    type: CHANGE_FIELD,
    payload: value
  }
};
