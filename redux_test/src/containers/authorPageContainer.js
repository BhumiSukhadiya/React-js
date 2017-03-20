import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../store';
import AuthorPage from '../components/authorPage'
class AuthorPageContainer extends Component{

    componentDidMount(){
        console.log(store.getState());
        axios.get('http://localhost:3001/getData')
            .then((response) => {
                //console.log(response.data)
                store.dispatch({type:"GET_DATA",payload:response.data})
            });
    }

    render(){
        return (<AuthorPage authors={this.props.authors}/>);
    }
}
function mapStateToProps(state) {
    return {
        authors: state.authors
    }
}


export default connect(mapStateToProps)(AuthorPageContainer);


