import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocalityToField, changeField } from "../actions/searchPageActions";
import { SearchPage } from "../components/SearchPage/SearchPage";



class SearchPageContainer extends Component{
  
  render() {
    const { searchPage, addLocalityToField, changeField } = this.props;
    
    const onClickItem = (city, street) => addLocalityToField(city, street);
    const onChangeField = (value) => changeField(value);
    
    return <SearchPage
      recentSearches={searchPage.recentSearches}
      searchStatu={searchPage.searchStatus}
      entryField={searchPage.entryField}
      onClickItem={onClickItem}
      onChangeField={onChangeField}
    />
  }
}


const mapStateToProps = state => {
  return {
    searchPage: state.searchPage,
  }
};

const mapDispatchToProps = {
  addLocalityToField: addLocalityToField,
  changeField: changeField,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer)