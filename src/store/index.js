import { createStore, applyMiddleware } from "redux";
import { reducerSearchPage } from "../reducers/reducerSearchPage";
import thunk from "redux-thunk";

const store = createStore(reducerSearchPage, applyMiddleware(thunk));


export {
  store
}