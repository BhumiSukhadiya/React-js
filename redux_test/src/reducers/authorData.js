export default function (state = [], action) {
    switch(action.type){
        case "GET_DATA":
            //console.log(action.payload);
            return action.payload;

            break;
    }
    return state;

}