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
/*var listItems = strings.map(function(string,i){
  return <li key={"string_"+i}>{string}</li>;
});*/


// ReactDOM.render goes here:
var MapTest=React.createClass({
	var listItems = contacts.map(fnction(contact)){
		return (
				<li key={contact.id}>{contact.name} {contact.phone}</li>
			)
	}
  render(){
    return <ul>{listItems}</ul>;
  }
})

module.exports=MapTest;
