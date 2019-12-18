import { connect } from 'react-redux';
import ListingPage from '../../components/PropertyListingPage/ListingPage/ListingPage';
import { getProperties } from '../../actions/lisingPageActions';


const mapStateToProps = (state) => ({
  listingPage: state.listingPage,
});

const mapDispatchToProps = {
  getProperties,
};

const ListingPageContainer = connect(mapStateToProps, mapDispatchToProps)(ListingPage);

export { ListingPageContainer };
