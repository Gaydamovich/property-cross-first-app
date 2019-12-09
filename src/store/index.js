import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers";
import thunk from "redux-thunk";

const store = createStore(combineReducers, applyMiddleware(thunk));


export {
  store
}