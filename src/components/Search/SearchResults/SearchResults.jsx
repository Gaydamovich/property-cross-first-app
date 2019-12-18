import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import ResultsItem from './ResultsItem/ResultsItem';


const SearchResults = (props) => {
  const {
    recentSearches, searchStatus,
    onClickItem, currentSearch,
    getProperty,
  } = props;
  const history = recentSearches
    .map((item) => <ResultsItem key={item.id} onClickItem={onClickItem} item={item} />);
  const currentLocations = currentSearch
    .map((item) => <ResultsItem key={item.id} getProperty={getProperty} item={item} to="/listing" />);
  const results = history.length ? history : <div>Not Found</div>;
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
  getProperty: PropTypes.func.isRequired,
};

export default SearchResults;
