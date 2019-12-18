import { GET_PROPERTIES } from '../actions/actionsTypes/actionsTypes';

const initialState = {
  placeName: '',
  longTitle: '',
  list: [],
  error: null,
};

const listingPage = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PROPERTIES}_REQUEST_SUCCESS`:
      return {
        ...state,
        placeName: action.placeName,
        longTitle: action.longTitle,
        list: [
          ...action.payload.properties,
        ],
      };
    default:
      return state;
  }
};

export default listingPage;
