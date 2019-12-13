import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addLocalityToField, changeField,
  getLocations, checkLocalStorage,
} from '../../actions/searchPageActions';
import SearchPage from '../../components/Search/SearchPage/SearchPage';

const SearchPageContainer = (props) => {
  const { searchPage } = props;
  const onClickItem = (city, street) => props.addLocalityToField(city, street);
  const onChangeField = (value) => props.changeField(value);
  const getLocation = (name) => props.getLocations(name);
  const check = () => {
    const data = [];
    if (localStorage.length) {
      const keys = Object.keys(localStorage);
      keys.forEach((item) => {
        if (!item.includes('webpack')) {
          data.push(JSON.parse(localStorage.getItem(item)));
        }
      });
    }
    props.checkLocalStorage(data);
  };
  return (
    <SearchPage
      recentSearches={searchPage.recentSearches}
      currentSearch={searchPage.currentSearch}
      searchStatus={searchPage.searchStatus}
      entryField={searchPage.entryField}
      onClickItem={onClickItem}
      onChangeField={onChangeField}
      getLocation={getLocation}
      check={check}
    />
  );
};

SearchPageContainer.propTypes = {
  searchPage: PropTypes.object.isRequired,
  addLocalityToField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  checkLocalStorage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchPage: state.searchPage,
});

const mapDispatchToProps = {
  addLocalityToField,
  changeField,
  getLocations,
  checkLocalStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
