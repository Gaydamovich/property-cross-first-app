import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import CurrentResultsSearch from './currentResultsSearch/currentResultsSearch';
import RecentResultsSearch from './recentResultsSearch/recentResultsSearch';


class SearchResults extends React.Component {
  UNSAFE_componentWillMount() {
    const { check } = this.props;
    check();
  }

  render() {
    const {
      recentSearches, searchStatus, onClickItem, currentSearch,
    } = this.props;
    const history = recentSearches
      .map((item) => <RecentResultsSearch key={item.id} onClickItem={onClickItem} item={item} />);
    const currentLocations = currentSearch
      .map((item) => <CurrentResultsSearch key={item.id} onClickItem={onClickItem} item={item} />);
    return (
      <div className="search-results">
        <h2 className="search-results__title">
          {searchStatus ? 'Available locations' : 'Recent searches'}
        </h2>
        <ul className="search-results__items" id={searchStatus ? 'locations' : 'recentSearches'}>
          {/* eslint-disable no-nested-ternary */}
          {currentSearch.length ? currentLocations
            : (recentSearches.length ? history : <div>Not Found</div>)}
        </ul>
      </div>
    );
  }
}

SearchResults.propTypes = {
  recentSearches: PropTypes.array.isRequired,
  currentSearch: PropTypes.array.isRequired,
  searchStatus: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
};

export default SearchResults;
