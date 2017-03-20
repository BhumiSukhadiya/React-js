import {combineReducers} from 'redux';
import initialState from './userList';
import authorData from './authorData';

const allReducers=combineReducers({
    users:initialState,
    authors:authorData
});
//console.log(allReducers)
export default allReducers;