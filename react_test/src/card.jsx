var React=require('react');
import $ from 'jquery';
var Card=React.createClass({
	getInitialState:function(){
		return {

		};
	},
	componentDidMount:function(){
		var component=this;
		$.get('https://api.github.com/users/'+this.props.login , function(data){
			component.setState(data);
		});
	},
	render:function(){
		return (
			<div>
			<img src={this.state.avatar_url} width="100px"/>
			<h3>{this.state.name}</h3>
			<hr/>
			</div>
		);
	}
});

var Form=React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		var loginInput=this.refs.login.value;
		this.props.addCard(loginInput);
		//console.log(loginInput);
		this.refs.login.value='';
	},
	render:function(){
		return (
			<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Enter Github login" ref="login"/>
			<button>Add</button>
			</form>
		);
	}
});
var Main=React.createClass({
	getInitialState:function(){
		return {
			logins:[]
		};
	},
	addCard:function(loginToAdd){
		this.setState({
			logins:this.state.logins.concat(loginToAdd)
		})
	},
	render:function(){
		var cards=this.state.logins.map(function(login,i){
			return (<Card login={login} key={'login_'+i}/>);
		});
		return (
			<div>
			<Form addCard={this.addCard}/>
			<br/>
			{cards}
			</div>
		);
	}
});

module.exports=Main;