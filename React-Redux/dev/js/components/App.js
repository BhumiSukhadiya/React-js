import React,{Component} from 'react';
require("../../scss/style.scss");
import UserList from "../containers/user-list";
import UserDetails from "../containers/user-detail";

class App extends Component {
    render() {
        return (
            <div>
                <h2>Username List:</h2>
                <UserList/>
                <hr/>
                <h2>User Profile</h2>
                <UserDetails/>
            </div>
        );
    }
}

export default App;