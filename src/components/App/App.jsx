import React from 'react';
import { Route, Switch } from 'react-router';
import DetailsPage from '../PropertyDetailsPage/DetailsPage';
import FavouritesPage from '../FavouritesPage/FavouritesPage';
import Header from '../Header/Header';
import './App.css';
import SearchPageContainer from '../../containers/Search/SearchPageContainer';
import { ListingPageContainer } from '../../containers/Listing/ListingPageContainer';


const App = () => (
  <div className="wrapper-app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <SearchPageContainer />
      </Route>
      <Route path="/listing" exact>
        <ListingPageContainer />
      </Route>
      <Route path="/details" exact component={DetailsPage} />
      <Route path="/favourites" exact component={FavouritesPage} />
    </Switch>
  </div>
);

export default App;
