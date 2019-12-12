const fetchApiMiddleware = () => (dispatch) => async (action) => {
  if (action.request) {
    dispatch({ type: `${action.type}_REQUEST_STARTED` });
    let newAction;
    try {
      const response = await action.payload;
      const data = await response.json();
      newAction = {
        ...action,
        type: `${action.type}_REQUEST_SUCCESS`,
        payload: data,
      };
    } catch (error) {
      newAction = {
        ...action,
        type: `${action.type}_REQUEST_FAILED`,
        payload: error.message,
      };
    }
    return dispatch(newAction);
  }
  return dispatch(action);
};

export default fetchApiMiddleware;
