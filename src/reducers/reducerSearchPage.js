import {
  ADD_LOCALITY_TO_FIELD_SEARCH_PAGE, ASYNC_GET_LOCATIONS,
  CHANGE_FIELD_SEARCH_PAGE,
} from '../actions/actionsTypes/actionsTypes';
import { SEARCH } from '../constants/constants';

const initialState = {
  searchStatus: false,
  entryField: '',
  recentSearches: JSON.parse(localStorage.getItem(SEARCH)) || [],
  currentSearch: [],
  loading: false,
  error: null,
};

const searchPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCALITY_TO_FIELD_SEARCH_PAGE:
      return {
        ...state,
        entryField: `${action.longTitle}`,
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
        error: null,
        currentSearch: [
          ...action.payload,
        ],
      };
    case `${ASYNC_GET_LOCATIONS}_REQUEST_FAILED`:
      return {
        ...state,
        entryField: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchPage;
