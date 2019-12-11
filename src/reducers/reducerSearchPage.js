import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE,
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
    // case GET_ALL_LOCATIONS:
    //   return {
    //     ...state,
    //     recentSearches: [
    //       ...state.recentSearches,
    //       {
    //         id: Date.now(),
    //         city: action.title,
    //         street: action.placeName,
    //       },
    //     ],
    //   };
    case 'CHANGE_STATUS_REQUEST':
      return {
        ...state,
        requestStatus: !state.requestStatus,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
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
