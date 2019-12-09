import React from 'react';
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { SearchResults } from "../SearchResults/SearchResults";



export const SearchPage = props => {
  const { entryField, onChangeField, recentSearches, searchStatus, onClickItem } = props;
  
  return (
    <div className='wrapper-search'>
      <SearchPanel entryField={ entryField } onChangeField={onChangeField}/>
      <SearchResults
        recentSearches={ recentSearches }
        searchStatus={ searchStatus }
        onClickItem={ onClickItem }
      />
    </div>
  )
};

