import { GET_PROPERTIES } from '../actions/actionsTypes/actionsTypes';

const initialState = {
  placeName: '',
  longTitle: '',
  list: [],
  page: 0,
  totalResults: 0,
  error: null,
};

const listingPage = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PROPERTIES}_REQUEST_SUCCESS`:
      return {
        ...state,
        placeName: action.placeName,
        longTitle: action.payload.location.longTitle,
        page: action.page,
        totalResults: action.payload.totalResults,
        list: [
          ...state.list,
          ...action.payload.properties,
        ],
      };
    default:
      return state;
  }
};

export default listingPage;