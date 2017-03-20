import {USER_SELECTED} from "../actions/index"

export default function (state = null, action) {
    switch(action.type){
        case USER_SELECTED:
            //console.log(action.data);
            return action.data;

            break;
    }
    return state;

}