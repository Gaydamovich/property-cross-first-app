import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header__title" id="title">Property Cross React</h1>
    <button type="submit" className="header__btn" id="favourites">Faves</button>
  </div>
);

export default Header;
