import React from'react';
import {Link} from 'react-router'
class Header extends React.Component{
	render(){
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<a href='/' className='navbar-brand'>
						<img src='/pic1.jpg' height='30' width='30' alt='logo'/>
					</a>
					<ul className='nav navbar-nav'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/authors">Authors</Link></li>
					<li><Link to="/addAuthor">Add Author</Link></li>
					<li><Link to="/test">Test</Link></li>
					<li><Link to="/image">Image Upload</Link></li>
					<li><Link to="/signup">Sign Up</Link></li>
					<li><Link to="/login">Log In</Link></li>
					</ul>
				</div>

			</nav>
			);
	}
}

export default Header;