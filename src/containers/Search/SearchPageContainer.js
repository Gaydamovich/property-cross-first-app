import React from 'react';
import { connect } from 'react-redux';
import { addLocalityToField, changeField } from "../../actions/searchPageActions";
import { SearchPage } from "../../components/Search/SearchPage/SearchPage";

const SearchPageContainer = props => {
  const { searchPage, addLocalityToField, changeField } = props;
    
  const onClickItem = (city, street) => addLocalityToField(city, street);
  const onChangeField = (value) => changeField(value);
    
  return <SearchPage
    recentSearches={searchPage.recentSearches}
    searchStatu={searchPage.searchStatus}
    entryField={searchPage.entryField}
    onClickItem={onClickItem}
    onChangeField={onChangeField}
  />
};


const mapStateToProps = state => {
  return {
    searchPage: state.searchPage,
  }
};

const mapDispatchToProps = { addLocalityToField, changeField };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer)