import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';
import Input from '../common/input';
import axios from 'axios'
//import {browserHistory} from 'react-router';

class LogIn extends Component{
	
    constructor(props){
    	super(props);
    	this.state = { showModal: true }
    	this.open=this.open.bind(this);
    	this.close=this.close.bind(this);
      this.loginUser=this.loginUser.bind(this);
    }
    close() {
    	this.setState({ showModal: false });
	}

	 open() {
	    this.setState({ showModal: true });
	  }
    loginUser(e){
      e.preventDefault();
      let data={};
      data['mail']=e.target.u_mail.value;
      data['pass']=e.target.u_pass.value;
      axios.post('http://localhost:3001/userLogin',data).then(function(res){
        console.log(res);
        alert(res.data.check);
        if(res.data.check){
          alert("login successfull");
        }else{
          console.log(this.refs);
          return;
        }
      })
    }

	render(){
		
		return (
			<div>
			<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.loginUser}>
            <Input type="email" name="u_mail"  placeholder="Email" label="Email Id" ref="email"/>
            <Input type="password" name="u_pass"  placeholder="Password" label="Password" ref="pass" />
            
				<input type="submit" value="Log In" id="signup_btn" className="btn btn-primary" />
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
export default LogIn;