import { GET_PROPERTY_BY_ID } from '../actions/actionsTypes/actionsTypes';

const initialState = {
  property: {},
  location: {},
  errors: null,
};

export const detailsPage = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PROPERTY_BY_ID}_REQUEST_SUCCESS`:
      return {
        ...state,
        errors: null,
        property: {
          ...action.payload,
        },
        location: {
          ...action.payload.location,
        },
      };
    case `${GET_PROPERTY_BY_ID}_REQUEST_FAILED`:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
