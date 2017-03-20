var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';



class DispDataApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], name: '',email:'',number:''};
  }

  render() {
    return (
      <div>
        <h3>Enter Data below:</h3>
        <form onSubmit={this.handleSubmit.bind(this)} id='myForm'>
        <table>
        <tbody>
          <tr>
            <td className='formlabel'>Name:</td>
            <td><input type="text" name="c_name" className='inpdata' /></td>
          </tr>
          <tr>
            <td className='formlabel'>Email:</td>
            <td><input type="email" name="c_email" className='inpdata'/></td>
          </tr>
          <tr>
            <td className='formlabel'>Phone:</td>
            <td><input type="number" name="c_number" className='inpdata'/></td>
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
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById('tabEle').style.display = 'inline-block'
    var data = ($('#myForm').serializeArray());

    var a=[];
    $.each(data, function(i, field){
      a[field.name]=field.value;
     });
    document.getElementById("myForm").reset();
    //console.log(data);
    var newItem = {
      name: a['c_name'],
      email:a['c_email'],
      number:a['c_number'],
      id: new Date()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
    }));
  }
}

class DispDataList extends React.Component {
  render() {
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
        {this.props.items.map((item,i) => (
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
}

module.exports=DispDataApp;

