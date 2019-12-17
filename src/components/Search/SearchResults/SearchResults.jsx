import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import CurrentResultsSearch from './currentResultsSearch/CurrentResultsSearch';
import RecentResultsSearch from './recentResultsSearch/RecentResultsSearch';
import SEARCH from '../../../constants/constants';


const SearchResults = (props) => {
  const {
    recentSearches, searchStatus,
    onClickItem, currentSearch, getSearchResults,
  } = props;
  useEffect(() => {
    getSearchResults(JSON.parse(localStorage.getItem(SEARCH)));
  }, []);
  const history = recentSearches
    .map((item) => <RecentResultsSearch key={item.id} onClickItem={onClickItem} item={item} />);
  const currentLocations = currentSearch
    .map((item) => <CurrentResultsSearch key={item.id} onClickItem={onClickItem} item={item} />);
  const results = history || <div>Not Found</div>;
  return (
    <div className="search-results">
      <h2 className="search-results__title">
        {searchStatus ? 'Available locations' : 'Recent searches'}
      </h2>
      <ul className="search-results__items" id={searchStatus ? 'locations' : 'recentSearches'}>
        {currentSearch.length ? currentLocations : results}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  recentSearches: PropTypes.array.isRequired,
  currentSearch: PropTypes.array.isRequired,
  searchStatus: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired,
};

export default SearchResults;
