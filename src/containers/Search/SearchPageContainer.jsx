import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addLocalityToField, changeField,
  getLocations,
} from '../../actions/searchPageActions';
import SearchPage from '../../components/Search/SearchPage/SearchPage';
import { getProperties } from '../../actions/lisingPageActions';

const SearchPageContainer = (props) => {
  const { searchPage } = props;
  const onClickItem = (longTitle) => props.addLocalityToField(longTitle);
  const onChangeField = (value) => props.changeField(value);
  const getLocation = (name) => props.getLocations(name);
  const getProperty = (placeName, page) => props.getProperties(placeName, page);
  return (
    <SearchPage
      recentSearches={searchPage.recentSearches}
      currentSearch={searchPage.currentSearch}
      searchStatus={searchPage.searchStatus}
      entryField={searchPage.entryField}
      error={searchPage.error}
      onClickItem={onClickItem}
      onChangeField={onChangeField}
      getLocation={getLocation}
      getProperty={getProperty}
    />
  );
};

SearchPageContainer.propTypes = {
  searchPage: PropTypes.object.isRequired,
  addLocalityToField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  getProperties: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchPage: state.searchPage,
});

const mapDispatchToProps = {
  addLocalityToField,
  changeField,
  getLocations,
  getProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
