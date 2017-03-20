import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component{
    createListItem() {
        return this.props.users.map((user) => {
            return (
                <li key={user._id} >{user.first} {user.last}</li>
            );
        });
    }
    render(){
        return (
            <ul>
                {this.createListItem()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps)(App);
