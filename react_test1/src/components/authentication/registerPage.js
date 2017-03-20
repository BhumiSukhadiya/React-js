import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';
import Input from '../common/input';
import {browserHistory} from 'react-router';
import axios from 'axios';

class SignUp extends Component{
	
    constructor(props){
    	super(props);
    	this.state = { showModal: true }
    	this.open=this.open.bind(this);
    	this.close=this.close.bind(this);
    	this.registerUser=this.registerUser.bind(this);
    }
    close() {
    	this.setState({ showModal: false });

	}

	 open() {
	    this.setState({ showModal: true });
	  }
	  registerUser(e){
	  	e.preventDefault();
	  	//console.log(e.target);
	  	let data={};
	  	if(e.target.upass.value !== e.target.cupass.value){
	  		alert("password does not match");
	  		return;
	  	}
	  	data['uname']=e.target.uname.value;
	  	data['umail']=e.target.umail.value;
	  	data['upass']=e.target.upass.value;
	  	//console.log(data);
	  	axios.post('http://localhost:3001/userRegister',data).then(function(response){
	  		alert(response.data);
	  		browserHistory.push('login');
	  	});

	  	//this.setState({ showModal: false });
	  }

	render(){
		return (
			<div>
			<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	<form  onSubmit={this.registerUser} name="frm_register">
            <Input type="text" name="uname"  placeholder="User Name" label="User Name" />
            <Input type="email" name="umail"  placeholder="Email" label="Email Id" />
            <Input type="password" name="upass"  placeholder="Password" label="Password" />
            <Input type="password" name="cupass"  placeholder="Confirm Password" label="Confirm Password" />
			<input type="submit" value="Sign Up" id="signup_btn" className="btn btn-primary" />
			</form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close} className="btn btn-danger">Close</button>
          </Modal.Footer>
        </Modal>
        
			</div>
			);
	}
}
export default SignUp;