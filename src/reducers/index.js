const initialState = {
  searchStatus: false,
  entryField: '',
  localStorageSave: [
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOCALITY_TO_FIELD':
      return {
        ...state,
        entryField: `${action.city}, ${action.street}`
      };
    case 'CHANGE_FIELD':
      return {
        ...state,
        entryField: action.payload
      };
    case 'GET_LOCAL_STORAGE':
      return state;
    default:
      return state;
  }
};

export {
  reducer
}