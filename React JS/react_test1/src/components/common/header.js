"use strict"
var React=require('react');
var Header=React.createClass({
	render:function(){
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<a href='/' className='navbar-brand'>
						<img src='/pic1.jpg' width='50px' height='30px'/>
					</a>
					<ul className='nav navbar-nav'>
					<li><a href='/'>Home</a></li>
					<li><a href='/#about'>About</a></li>
					</ul>

				</div>
			</nav>
			);
	}
});

module.exports=Header;