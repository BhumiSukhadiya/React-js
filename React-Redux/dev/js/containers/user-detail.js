import React, {Component} from 'react';
import {connect} from 'react-redux';
class UserDetail extends Component {
    render() {
        if(!this.props.activeUser){
            return(
                <div><h3>Select a user to see details</h3></div>
                );
        }
            return (
            <div>
                <h2>Name: {this.props.activeUser.firstName} {this.props.activeUser.lastName}</h2>
                <h3>ID: {this.props.activeUser._id}</h3>
                <h3>Age: {this.props.activeUser.age}</h3>
                </div>
        );
        
        

    }
}

function mapStateToProps(state) {
    //console.log(state.activeUser);
    return {
        activeUser: state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail);