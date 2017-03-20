import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers=combineReducers({
    users:UserReducer,
    activeUser:ActiveUserReducer
});
//console.log(allReducers)
export default allReducers;