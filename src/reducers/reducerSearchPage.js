import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from '../actions/actionsTypes/actionsTypes';

const initialState = {
  searchStatus: false,
  entryField: '',
  recentSearches: [{
    id: 1,
    title: 'Albury',
    placeName: 'albury_ware',
  }],
  currentSearch: [],
  loading: false,
};

const searchPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCALITY_TO_FIELD_SEARCH_PAGE:
      return {
        ...state,
        entryField: `${action.city}, ${action.street}`,
        searchStatus: true,
      };
    case CHANGE_FIELD_SEARCH_PAGE:
      return {
        ...state,
        entryField: action.payload,
      };
    case `${ASYNC_GET_LOCATIONS}_REQUEST_STARTED`:
      return {
        ...state,
        loading: !state.loading,
        searchStatus: true,
      };
    case `${ASYNC_GET_LOCATIONS}_REQUEST_SUCCESS`:
      return {
        ...state,
        entryField: '',
        loading: !state.loading,
        currentSearch: [
          ...action.payload,
        ],
      };
    case 'ADD_DATA_FROM_LOCAL_STORAGE':
      return {
        ...state,
        recentSearches: [
          ...action.payload.slice(-3),
        ],
      };
    default:
      return state;
  }
};

export default searchPage;
