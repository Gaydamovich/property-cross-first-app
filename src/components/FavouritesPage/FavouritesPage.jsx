import React from 'react';
import './FavouritesPage.scss';
import PropTypes from 'prop-types';
import { FavouriteItem } from './FavouriteItem/FavouriteItem';

export const FavouritesPage = (props) => {
  const { favouritesPage, getPropertyById } = props;
  const listFavourites = favouritesPage.favorites.map((item) => (
    <FavouriteItem key={item.id} item={item} getPropertyById={getPropertyById} />
  ));
  return (
    <div className="wrapper-favourites-page">
      <h1 className="favourites-page__title" id="title">
        Favourites
      </h1>
      <ul className="favourites-page__list-items">
        {listFavourites}
      </ul>
    </div>
  );
};

FavouritesPage.propTypes = {
  favouritesPage: PropTypes.object.isRequired,
  getPropertyById: PropTypes.func.isRequired,
};
