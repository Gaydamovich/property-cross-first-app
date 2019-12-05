import React from 'react';
import { Route, Switch } from 'react-router';
import SearchPage from "../SearchPage/SearchPage";
import ListingPage from "../PropertyListingPage/ListingPage";
import DetailsPage from "../PropertyDetailsPage/DetailsPage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";
import './App.css';
import {Header} from "../Header/Header";

const App = () => {
    return (
      <div className='wrapper-app'>
        <Header/>
        <Switch>
          <Route path='/' exact component={SearchPage}/>
          <Route path='/listing' exact component={ListingPage}/>
          <Route path='/details' exact component={DetailsPage}/>
          <Route path='/favourites' exact component={FavouritesPage}/>
        </Switch>
      </div>
    )
};

export default App