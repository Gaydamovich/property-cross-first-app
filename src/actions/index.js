const actionGetHouses = (houses) => {
  return {
    type: 'GET_HOUSES',
    payload: houses
  }
};

export {
  actionGetHouses
}