import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../../actions/Login';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: ''
		};
	}

	onChangeHandler = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(() => ({
			[name]: value
		}));
	};

	onSubmitHandler = e => {
		e.preventDefault();
		console.log(this.state);

		const data = {
			username: this.state.username,
			password: this.state.password
		};

		this.props.onSubmit(data);
		console.log(this.props);
	};

	render() {
		return (
			<div id='login-form'>
				<h2>Selamat Datang</h2>
				<form onSubmit={this.onSubmitHandler}>
					<input
						type='text'
						name='username'
						placeholder='Username'
						value={this.state.username}
						onChange={this.onChangeHandler}
					/>
					<br />
					<input
						type='password'
						name='password'
						placeholder='Password'
						onChange={this.onChangeHandler}
					/>
					<br />
					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default connect(null)(LoginForm);
