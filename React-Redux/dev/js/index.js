import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios"
import allReducers from "./reducers";
const middleware=applyMiddleware(thunk,logger());

const store=createStore(allReducers,middleware);
console.log(store)
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch((dispatch)=>{
	/*dispatch({type:"FETCH_DATA"});*/
	axios.get('http://localhost:3001/api/data')
         .then((response) => {
           dispatch({type:"GET_DATA",payload:response.data})
         });
});