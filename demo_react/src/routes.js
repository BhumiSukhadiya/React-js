var React=require('react');
var Router=require('react-router');
var IndexRoute=Router.IndexRoute;
var Route=Router.Route;
var Home=require('./components/homepage');
var Authors=require('./components/authors/authorPage');
var About=require('./components/about/aboutpage');
var App=require('./components/app');
var browserHistory=Router.browserHistory;
var routes=(
	<Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "authors" component = {Authors} />
      </Route>
	);
module.exports=routes;