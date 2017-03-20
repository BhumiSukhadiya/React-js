var React=require('react');
var ReactDOM=require('react-dom');
var FormTest=React.createClass({
	getInitialState:function(){
		return {
			data:'Initial Data...',
			 
		}
	},
	updateState:function(e){
		this.setState({
			data:e.target.value,	
		})
	},
	clearData:function(){
		this.setState({
			data:'',
			
		});
		
	},
	render:function(){
		return (
			<div>
			<Content propData={this.state.data} propEvent={this.updateState} clearButton={this.clearData} buttonVal={this.state.a} />
			</div>
		)
	}
});

var Content=React.createClass({
	render:function(){
		return (
			<div>
			<h3>FormTest Component</h3>
			<input type="text" onChange={this.props.propEvent} value={this.props.propData}  />
			<button onClick={this.props.clearButton}>Clear</button>
			<br/>
			<p>{this.props.propData}</p>
			</div>
		);
	}
});
module.exports=FormTest;