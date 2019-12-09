import { ADD_LOCALITY_TO_FIELD, CHANGE_FIELD } from "../actions/actionsTypes/actionsTypes";

const initialState = {
  searchStatus: true,
  entryField: '',
  recentSearches: [
    {
      id: 1,
      city: 'London',
      street: 'Piccadilly'
    },
    {
      id: 2,
      city: 'London',
      street: 'Oxford Street'
    },
    {
      id: 3,
      city: 'London',
      street: 'Baker Street'
    }
  ]
  
};

const searchPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCALITY_TO_FIELD:
      return {
        ...state,
        entryField: `${action.city}, ${action.street}`
      };
    case CHANGE_FIELD:
      return {
        ...state,
        entryField: action.payload
      };
    default:
      return state;
  }
};

export {
  searchPage
}