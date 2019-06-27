import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	render() {
		return (
			<form>
				<input type='text' name='username' placeholder='Username' />
				<br />
				<input type='password' name='password' placeholder='Password' />
				<br />
				<button>Login</button>
			</form>
		);
	}
}

export default LoginForm;
