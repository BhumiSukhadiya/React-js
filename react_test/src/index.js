var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List');
var Clock=require('./clock');
var MapTest=require('./maptest');
var Image=require('./image');
var DispDataApp=require('./dispdata');
var ComponentAPI=require('./Component_api');
var FormTest=require('./form.jsx');
var Com=require('./todoapp.jsx');
var Main=require('./card.jsx');
var Game=require('./playnine.jsx');
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import $ from 'jquery';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var Test = React.createClass({
  render: function () {
   
      return (
         <div>
            <ul className="header">
               <li><Link to="/List">List</Link></li>
               <li><Link to="/Clock">Clock</Link></li>
               <li><Link to="/">To Do App</Link></li>
               <li><Link to="/dispdata">Display Data</Link></li>
               <li><Link to="/maptest">Map Test</Link></li>
               <li><Link to="/card">Card</Link></li>
               <li><Link to="/playnine">Play Nine Game</Link></li>
            </ul>
          <div className="content">
           {this.props.children}
           
           </div>
         </div>
      )
   
  }
});

ReactDOM.render(
  ( <Router history = {browserHistory}>
      <Route path = "/" component = {Test}>
         <IndexRoute component = {Com} />
         <Route path = "List" component = {() => (<List type="abc" />)} />
         <Route path = "Clock" component = {Clock} />
         <Route path = "Com" component = {Com} />
         <Route path = "dispdata" component = {DispDataApp} />
         <Route path = "maptest" component = {MapTest} />
         <Route path = "card" component = {Main} />
         <Route path = "playnine" component = {Game} />
      </Route>
   </Router>),
  document.getElementById('root')
);


