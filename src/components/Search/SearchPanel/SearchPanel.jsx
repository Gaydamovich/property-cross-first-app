import React from 'react';
import PropTypes from 'prop-types';
import './SearchPanel.scss';

const SearchPanel = ({ entryField, onChangeField, getLocation }) => {
  const changeField = (event) => onChangeField(event.target.value);
  const clickToGetLocation = () => getLocation(entryField);
  return (
    <div className="search">
      <h1 className="search__title">Search</h1>
      <p className="search__instruction" id="instruction">
        Use the form below to search for houses to buy.
        <br />
        You can search by place-name or click &apos;My location&lsquo;,
        to search in your current location!
      </p>
      <input
        className="search__entry-field"
        type="text"
        onChange={changeField}
        value={entryField}
      />
      <div className="wrapper-btn">
        <button
          type="submit"
          className="search__btn search__btn_go"
          id="go"
          onClick={clickToGetLocation}
        >
          GO
        </button>
        <button type="submit" className="search__btn search__btn_location" id="myLocation">My location</button>
      </div>
    </div>
  );
};

SearchPanel.propTypes = {
  entryField: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
};

export default SearchPanel;
