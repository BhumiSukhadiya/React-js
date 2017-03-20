var React = require('react');
var ReactDOM = require('react-dom');

var strings = ['Home', 'Shop', 'About Me'];

var contacts=[
	{
		id:1,
		name:'scott',
		phone:'555 888 777 999'
	},
	{
		id:2,
		name:'roy',
		phone:'666 888 777 999'
	},
	{
		id:3,
		name:'asdadcv',
		phone:'555 444 777 999'
	},
	{
		id:4,
		name:'lisa',
		phone:'444 888 777 222'
	},
]



// ReactDOM.render goes here:
var MapTest=React.createClass({
	getInitialState:function(){
		return {
			search:''
		};
	},
	test:function(e){
		this.setState({
			search: e.target.value
		});
		console.log(this.state.search);
	},
  render:function(){
  	var listItems = contacts.map(function(con,i){
  return <li key={con.id}>{con.name} {con.phone}</li>;
});
	var filteredContact=contacts.filter(
	(contact)=>{
		return contact.name.indexOf(this.state.search) !== -1;
	}
	);
    return ( 
    <div>
    <input type="text" value={this.state.search}  onChange={this.test}/>
    <ul>{listItems}</ul>;
    </div>
    )
  }
})

module.exports=MapTest;
