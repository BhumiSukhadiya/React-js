import React from'react';
import {Link} from 'react-router'
class Header extends React.Component{
    render(){
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <a href='/' className='navbar-brand'>
                        <img src='/images/pic1.jpg' height='30' width='30' alt='logo'/>
                    </a>
                    <ul className='nav navbar-nav'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/AuthorList">Author List</Link></li>
                        <li><Link to="/insertAuthor/ins/dcfcdsgsdg" >Add Author</Link></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Header;