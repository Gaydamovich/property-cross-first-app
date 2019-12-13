const fetchApiMiddleware = () => (dispatch) => async (action) => {
  if (typeof action.request === 'function') {
    dispatch({ type: `${action.type}_REQUEST_STARTED` });
    let newAction;
    try {
      const response = await action.request();
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
        payload: error,
      };
    }
    return dispatch(newAction);
  }
  return dispatch(action);
};

export default fetchApiMiddleware;
