import { connect } from 'react-redux';
import { FavouritesPage } from '../../components/FavouritesPage/FavouritesPage';
import { getPropertyById } from '../../actions/detailsPageActions';

const mapStateToProps = (state) => ({
  favouritesPage: state.favouritesPage,
});

const mapDispatchToProps = {
  getPropertyById,
};

export const FavouritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
