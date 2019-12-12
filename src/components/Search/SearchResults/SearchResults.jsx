import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import SearchResultsItem from './SearchResultsItem';

const SearchResults = (props) => {
  const {
    recentSearches, searchStatus, onClickItem, currentSearch,
  } = props;
  const history = recentSearches
    .map((item) => <SearchResultsItem key={item.id} onClickItem={onClickItem} item={item} />);
  const currentLocations = currentSearch
    .map((item) => <SearchResultsItem key={item.id} onClickItem={onClickItem} item={item} />);
  return (
    <div className="search-results">
      <h2 className="search-results__title">
        {searchStatus ? 'Available locations' : 'Recent searches'}
      </h2>
      <ul className="search-results__items" id={searchStatus ? 'locations' : 'recentSearches'}>
        {currentSearch.length ? currentLocations : (recentSearches.length ? history : <div>Not Found</div>)}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  recentSearches: PropTypes.array.isRequired,
  currentSearch: PropTypes.array.isRequired,
  searchStatus: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default SearchResults;
