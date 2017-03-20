var React=require('react');
var ReactDOM=require('react-dom');
var FormTest=React.createClass({
	getInitialState:function(){
		return {
			data:'Initial Data',
		}
	},
	updateState:function(e){
		this.setState({
			data:e.target.value,	
		})
		
	},
	clearData:function(){
		this.setState({
			data:''
		})
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	},
	render:function(){
		return (
			<div>
			<h3>FormTest Component</h3>
			<input type="text" onChange={this.updateState} value={this.state.data} ref='myInput' />
			<button onClick={this.clearData}>Clear Data</button>
			<br/>
			<p>{this.state.data}</p>
			</div>
		)
	}
});
module.exports=FormTest;