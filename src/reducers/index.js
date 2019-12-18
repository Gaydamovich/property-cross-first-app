import { combineReducers } from 'redux';
import searchPage from './reducerSearchPage';
import listingPage from './reducerListingPage';

export default combineReducers({
  searchPage,
  listingPage,
});
