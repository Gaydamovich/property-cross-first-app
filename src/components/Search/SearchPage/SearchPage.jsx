import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel/SearchPanel';
import SearchResults from '../SearchResults/SearchResults';

const SearchPage = (props) => {
  const {
    entryField, onChangeField, recentSearches,
    searchStatus, onClickItem, getLocation,
    currentSearch,
  } = props;
  return (
    <div className="wrapper-search">
      <SearchPanel
        entryField={entryField}
        onChangeField={onChangeField}
        getLocation={getLocation}
      />
      <SearchResults
        recentSearches={recentSearches}
        searchStatus={searchStatus}
        onClickItem={onClickItem}
        currentSearch={currentSearch}
      />
    </div>
  );
};

SearchPage.propTypes = {
  entryField: PropTypes.string.isRequired,
  searchStatus: PropTypes.bool.isRequired,
  currentSearch: PropTypes.array.isRequired,
  onClickItem: PropTypes.func.isRequired,
  recentSearches: PropTypes.array.isRequired,
  onChangeField: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
};

export default SearchPage;
