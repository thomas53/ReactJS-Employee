import React from 'react';
import { connect } from 'react-redux';
import AppRoute, { history } from '../routers/AppRouter';

class EmployeeApraisal extends React.Component {
	state = {
		isLogin: false
	};
	componentWillReceiveProps() {
		console.log('data', this.props.login);
		const user = JSON.parse(localStorage.getItem('user'));
		console.log('user: ', user);
	}

	componentDidUpdate() {
		console.log();
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			this.setState(() => ({
				isLogin: true
			}));
			history.push('/employee');
		} else {
			this.setState(() => ({
				isLogin: false
			}));
			history.push('/');
		}
	}

	render() {
		console.log(this.props.isLogin);
		return (
			<div>
				<h1>
					<center>Employee Appraisal</center>
				</h1>
				<AppRoute isLogin={this.state.isLogin} />
			</div>
		);
	}
}

const mapsStateToProp = state => ({
	login: state.login
});

export default connect(mapsStateToProp)(EmployeeApraisal);
