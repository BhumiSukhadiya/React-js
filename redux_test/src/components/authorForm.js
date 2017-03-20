import React, {Component} from 'react';
import Input from './Input';

class AuthorForm extends Component {


    render() {
        return (

            <div>

                <div style={{width: "700px"}}>
                    <form id="authForm" onSubmit={this.props.onSave} name="frm">
                        <h1>Add Author</h1>
                        <center>
                            <img src={this.props.imagePreview} alt="use" height="200px" width="200px"
                                 style={{borderRadius: "50%"}}/>
                            <br/>
                            <div className="fileUpload btn btn-danger">
                                <span className="glyphicon glyphicon-upload"></span>
                                <span> Upload User Profile</span>
                                <input type="file" className="upload" name="profile"
                                       onChange={(e) => this.props.onChangeImage(e)}/>
                            </div>
                        </center>

                        <Input type="text" name="firstName" placeholder="First Name" label="First Name"
                               value={this.props.author.firstName}/>
                        <Input type="text" name="lastName" placeholder="Last Name" label="Last Name"
                               value={this.props.author.lastName}/>
                        <Input type="number" name="age" placeholder="Age" label="Age" value={this.props.author.age}/>
                        {/*<label className="control-label">Upload Profile Image</label>
                         <input id="input-1" type="file" name="profile" className="file" ref="profile" accept="image/*"/>
                         <br/>*/}
                        <input type="submit" value="Save" id="save_btn" className="btn btn-default"/>

                    </form>
                </div>

            </div>

        );
    }
}

export default AuthorForm;