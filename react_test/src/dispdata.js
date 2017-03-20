var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';

var DispDataApp=React.createClass({
  getInitialState:function(){
    return {items:[]}
  },
  render:function(){
     return (
      <div>
        <h3>Enter Data below:</h3>
        <form onSubmit={this.handleSubmit} ref='myForm'>
        <table>
        <tbody>
          <tr>
            <td className='formlabel'>Name:</td>
            <td><input type="text" name="c_name" className='inpdata' ref="c_name"/></td>
          </tr>
          <tr>
            <td className='formlabel'>Email:</td>
            <td><input type="email" name="c_email" className='inpdata' ref="c_email"/></td>
          </tr>
          <tr>
            <td className='formlabel'>Phone:</td>
            <td><input type="number" name="c_number" className='inpdata' ref="c_phone"/></td>
          </tr>
          <tr colSpan="2" >
            <td ><button className='btn'>{'Insert Data'}</button></td>
          </tr>
          </tbody>
        </table>
        </form>
        <br/>
        <DispDataList items={this.state.items} />
      </div>
    );
  },
  handleSubmit:function(e) {
    e.preventDefault();
    document.getElementById('tabEle').style.display = 'inline-block'
    //console.log(this.refs);
    var newItem = {
      name: this.refs.c_name.value,
      email:this.refs.c_email.value,
      number:this.refs.c_phone.value,
      id: new Date()
    };
    ReactDOM.findDOMNode(this.refs.myForm).reset();
    //console.log(newItem)
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
    }));
    console.log(this.refs);
    
  }
}); 


var DispDataList=React.createClass({
  render:function(){
    var items=this.props.items;
    //console.log(items);
    return (
      <table id="tabEle" style={{display:'none'}}>
      <thead>
      <tr>
      <th className='tbl_head'>Name</th>
      <th className='tbl_head'>Email</th>
      <th className='tbl_head'>Number</th>
      <th className='tbl_head'>Date</th>
      </tr>
      </thead>
      <tbody>
        {items.map((item,i) => (
          <tr key={'item_'+i}>
          <td className='tbl_col'>{item.name}</td>
          <td className='tbl_col'>{item.email}</td>
          <td className='tbl_col'>{item.number}</td>
          <td className='tbl_col'>{item.id.toUTCString()}</td>
          </tr>

        ))}
        </tbody>
      </table>
    );
  }
}); 
module.exports=DispDataApp;

