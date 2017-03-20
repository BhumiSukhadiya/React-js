"use strict"
var React=require('react');

var Home=React.createClass({
	render:function(){
		return (
			<div className='jumbotron'>
				<h1>React Test</h1>
				<p>This demo is using React,React Router and flux</p>
			</div>
			);
	}
});

module.exports=Home;