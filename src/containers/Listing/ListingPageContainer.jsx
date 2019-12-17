import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingPage from '../../components/PropertyListingPage/ListingPage';

const ListingPageContainer = (props) => {
  const { listingPage } = props;
  return <ListingPage listingPage={listingPage} />;
};

ListingPageContainer.propTypes = {
  listingPage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  listingPage: state.listingPage,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListingPageContainer);
