import React from 'react'
import ReactDOM from 'react-dom'


var App=React.createClass({
	render:function(){
		return (
			<div>
			<div className='container'>
				hello
			</div>				
			</div>
			);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
