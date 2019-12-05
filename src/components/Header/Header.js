import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__title' id='title' >Property Cross React</h1>
      <button className='header__btn' id='favourites' >Faves</button>
    </div>
  )
};