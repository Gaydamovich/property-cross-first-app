import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { SearchPage } from "../SearchPage/SearchPage";
import { ListingPage } from "../PropertyListingPage/ListingPage";
import { DetailsPage } from "../PropertyDetailsPage/DetailsPage";
import { FavouritesPage } from "../FavouritesPage/FavouritesPage";
import { Header } from "../Header/Header";
import { connect } from 'react-redux';
import { actionAddLocalityToField, actionChangeField } from "../../actions/searchPageActions";
import './App.css';


class App extends Component{
  
  render() {
    const { recentSearches, searchStatus,
      entryField, addLocalityToField, changeField } = this.props;
  
    const onClickItem = (city, street) => addLocalityToField(city, street);
    const onChangeField = (value) => changeField(value);
    
    return (
      <div className='wrapper-app'>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <SearchPage
              recentSearches={recentSearches}
              searchStatu={searchStatus}
              entryField={entryField}
              onClickItem={onClickItem}
              onChangeField={onChangeField}/>
          </Route>
          <Route path='/listing' exact component={ListingPage}/>
          <Route path='/details' exact component={DetailsPage}/>
          <Route path='/favourites' exact component={FavouritesPage}/>
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    recentSearches: state.recentSearches,
    searchStatus: state.searchStatus,
    entryField: state.entryField,
  }
};

const mapDispatchToProps = {
  addLocalityToField: actionAddLocalityToField,
  changeField: actionChangeField,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)