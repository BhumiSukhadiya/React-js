export const USER_SELECTED="USER_SELECTED";
export function selectUser(user){
    console.log('You clicked on:' + user.first);
    return {
        type: "USER_SELECTED",
        data: user
    }
}
