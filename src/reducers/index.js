import { combineReducers } from 'redux';
import searchPage from './reducerSearchPage';
import listingPage from './reducerListingPage';
import { detailsPage } from './reducerDetailsPage';

export default combineReducers({
  searchPage,
  listingPage,
  detailsPage,
});
