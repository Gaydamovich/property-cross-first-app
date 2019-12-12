import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from '../actions/actionsTypes/actionsTypes';

const initialState = {
  searchStatus: true,
  entryField: '',
  recentSearches: [],
  requestStatus: false,
  data: null,
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
    case `${ASYNC_GET_LOCATIONS}_REQUEST`:
      return {
        ...state,
        requestStatus: !state.requestStatus,
      };
    case `${ASYNC_GET_LOCATIONS}_REQUEST_SUCCESS`:
      return {
        ...state,
        requestStatus: !state.requestStatus,
        recentSearches: [
          ...state.recentSearches,
          ...action.payload,
        ],
      };
    default:
      return state;
  }
};

export default searchPage;
