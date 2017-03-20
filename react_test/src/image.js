var React = require('react');
var ReactDOM = require('react-dom');
var im= require('./pic1.jpg');
var Image=React.createClass({
  render(){
    return <img src={im} style={{width:'100%',height:300,padding:0}}/>;
  }
})

module.exports=Image;
