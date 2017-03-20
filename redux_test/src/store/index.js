import allReducers from '../reducers';
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleware = applyMiddleware(thunk, logger());

const store = createStore(allReducers, middleware);

export default store;