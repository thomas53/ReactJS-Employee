import React from 'react';
import LoginForm from '../login/LoginForm';
import { connect } from 'react-redux';
import { authLogin } from '../../actions/Login';

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<LoginForm
					onSubmit={userAuth => {
						this.props.authLogin(userAuth);
						this.props.history.push('/');
					}}
				/>
			</div>
		);
	}
}

export default connect(
	null,
	{ authLogin }
)(LoginPage);
