import React from'react';
import Input1 from '../common/input1';
class updateAuthorForm extends React.Component {
	render() {
		return (
			<div>
				<form id="authForm" onSubmit={this.props.onUpdate}>
					<h1>Update Author</h1>
					<Input1 label="First Name" type="text" name="firstName" placeholder="First Name"  id="fn"/>
					<Input1 label="Last Name" type="text" name="lastName" placeholder="Last Name"  id="ln"/>
					<Input1 label="Age" type="number" name="age" placeholder="Age"  id="age"/>
					<label className="control-label">Profile Image</label><br/>
					<img src="" alt="profile" id="proimage" width="200" height="200"/>
					<input id="input-1" type="file" name="profile" className="file" ref="profile" accept="image/*"/>
					<br/>
					<input type="submit" value="Update" id="save_btn" className="btn btn-default" />
				</form>
			</div>
		);
	}
}

export default updateAuthorForm;