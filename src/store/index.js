import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import fetchApiMiddleware from '../middlewares/fetchApiMiddleware';

const store = createStore(combineReducers, applyMiddleware(fetchApiMiddleware));

export default store;
