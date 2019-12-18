import React from 'react';
import PropTypes from 'prop-types';
import './ListingPage.scss';
import { Item } from '../Item/Item';

const ListingPage = (props) => {
  const { listingPage } = props;
  const list = listingPage.list.map((item) => <Item key={item.id} item={item} />);
  return (
    <div className="wrapper-listing-page">
      <h1 className="listing-page__title" id="title">
        {listingPage.longTitle}
      </h1>
      <div className="listing-page__search">
        Displaying
        <span className="listing-page__search_count" id="visibleCount">
          &nbsp;
          {listingPage.list.length}
          &nbsp;
        </span>
        of
        <span className="listing-page__search_all-count" id="totalCount">
          &nbsp;
          {listingPage.list.length * 10}
          &nbsp;
        </span>
        items
      </div>
      <ul className="listing-page__list-items">
        {list}
      </ul>
    </div>
  );
};

ListingPage.propTypes = {
  listingPage: PropTypes.object.isRequired,
};

export default ListingPage;
