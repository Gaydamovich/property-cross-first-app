import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ListingPage } from "../PropertyListingPage/ListingPage";
import { DetailsPage } from "../PropertyDetailsPage/DetailsPage";
import { FavouritesPage } from "../FavouritesPage/FavouritesPage";
import { Header } from "../Header/Header";
import './App.css';
import SearchPageContainer from "../../containers/SearchPageContainer";


export const App = () => {
  
  return (
    <div className='wrapper-app'>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <SearchPageContainer />
        </Route>
        <Route path='/listing' exact component={ListingPage}/>
        <Route path='/details' exact component={DetailsPage}/>
        <Route path='/favourites' exact component={FavouritesPage}/>
      </Switch>
    </div>
  )
};

