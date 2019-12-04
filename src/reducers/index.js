const initialState = {
  houses: [
    {
      id: 1,
      street: 'default',
      price: '200',
    },
    {
      id: 2,
      street: 'default',
      price: '300',
    },
    {
      id: 3,
      street: 'default',
      price: '500',
    },
    //...
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOSES':
      return {
        houses: action.payload
      };
    default:
      return state
  }
};

export {
  reducer
}