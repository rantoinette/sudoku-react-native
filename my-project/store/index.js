import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducer";

const middlewares = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middlewares);
export default store;
