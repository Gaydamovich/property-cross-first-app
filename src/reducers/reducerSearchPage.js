import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
  CHANGE_FIELD_SEARCH_PAGE,
  GET_ALL_LOCATIONS,
} from '../actions/actionsTypes/actionsTypes';

const initialState = {
  searchStatus: true,
  entryField: '',
  recentSearches: [],
};

const searchPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCALITY_TO_FIELD_SEARCH_PAGE:
      return {
        ...state,
        entryField: `${action.city}, ${action.street}`,
      };
    case CHANGE_FIELD_SEARCH_PAGE:
      return {
        ...state,
        entryField: action.payload,
      };
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        recentSearches: [
          ...state.recentSearches,
          {
            id: Date.now(),
            city: action.title,
            street: action.placeName,
          },
        ],
      };
    default:
      return state;
  }
};

export default searchPage;
