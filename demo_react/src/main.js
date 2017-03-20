
var React=require('react');
var ReactDOM=require('react-dom');
import { Router, Route, Link, browserHistory, IndexRoute ,Redirect} from 'react-router'
var Home=require('./components/homepage');
var About=require('./components/about/aboutpage');
var Authors=require('./components/authors/authorPage');
var notFoundPage=require('./components/notFoundPage');
var App=React.createClass({
	render:function(){

		return (
			<div>
				<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<a href='/' className='navbar-brand'>
						<img src='images/pic1.jpg' height='30' width='30'/>
					</a>
					<ul className='nav navbar-nav'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/authors">Authors</Link></li>
					</ul>
				</div>
			</nav>
			<div className='container'>
					 {this.props.children}
			</div>
				
			</div>
			);
	}
});
ReactDOM.render((<Router history = {browserHistory}>
		      <Route path = "/" component = {App}>
		         <IndexRoute component = {Home} />
		         <Route path = "/" component = {Home} />
		         <Route path = "about" component = {About} />
		         <Route path = "authors" component = {Authors} />
		         <Redirect from="abt" to="about" />
		         <Redirect from="about/*" to="about" />
		         <Route path='*' component={notFoundPage} />

		      </Route>
		    </Router>),document.getElementById('app'));

