import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchResults from "../SearchResults/SearchResults";

class SearchPage extends Component {
  
  render() {
    const { localStorageSave, searchStatus, entryField, onClickItem, onChangeField } = this.props;
  
    console.log(this.props)
    
    return (
      <div className='wrapper-search'>
        <SearchPanel entryField={ entryField } onChangeField={onChangeField}/>
        <SearchResults
          localStorageSave={ localStorageSave }
          searchStatus={ searchStatus }
          onClickItem={ onClickItem }
        />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    localStorageSave: state.localStorageSave,
    searchStatus: state.searchStatus,
    entryField: state.entryField,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickItem: (city, street) => dispatch({ type: 'ADD_LOCALITY_TO_FIELD', city, street }),
    onChangeField: (value) => dispatch({ type: 'CHANGE_FIELD', payload: value }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);