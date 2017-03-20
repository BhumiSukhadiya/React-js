import React, {Component} from'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'

import {Provider} from 'react-redux';
import store from './store'
import List from './components/userList';
import axios from 'axios';
import Header from './components/header';
import About from './components/aboutPage';
import Home from './components/homePgae'
import AuthorPage from './containers/authorPageContainer';
import InsertAuthor from './containers/insertAuthor';
import './index.css';
const style = {
    position:"relative",
    bottom:0,
    width:"100%",
    height:60,
    backgroundColor:"#aabbcc"
};
//console.log(store.getState());
class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    {this.props.children}
                </div>
               {/* <footer style={style}>
                    <div><p>Footer text</p></div>
                </footer>*/}
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="AuthorList" component={AuthorPage}/>
                <Route path="insertAuthor/:action" component={InsertAuthor}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);

store.dispatch((dispatch)=>{
    /*dispatch({type:"FETCH_DATA"});*/
    axios.get('http://localhost:3001/getData')
        .then((response) => {
            //console.log(response.data)
            store.dispatch({type:"GET_DATA",payload:response.data})
        });
});