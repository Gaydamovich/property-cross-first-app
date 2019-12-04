import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import SearchPage from "../pages/search_page/SearchPage";
import { ListingPage } from "../pages/property_listing_page/ListingPage";
import DetailsPage from "../pages/property_details_page/DetailsPage";
import FavouritesPage from "../pages/favourites_page/FavouritesPage";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className='wrapper-app'>
        <Switch>
          <Route path='/' exact component={SearchPage}/>
          <Route path='/listing' exact component={ListingPage}/>
          <Route path='/details' exact component={DetailsPage}/>
          <Route path='/favourites' exact component={FavouritesPage}/>
        </Switch>
      </div>
    )
  }
}

export default App