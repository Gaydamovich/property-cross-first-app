import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1 className="header__title" id="title">Property Cross React</h1>
    <button
      type="submit"
      className="header__btn"
      id="favourites"
    >
      <Link to="/favourites">
        Faves
      </Link>
    </button>
  </div>
);

export default Header;
