import React, { Component, rest } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';

const ProtectedRouter = ({ isLogin, component: Component, ...rest }) => (
	<Route
		{...rest}
		component={props =>
			isLogin ? (
				<div>
					<Header />
					<Component {...props} />
				</div>
			) : (
				<Redirect to='/' />
			)
		}
	/>
);

const mapsStateToProps = state => ({
	isLogin: !!state.login.token
});

export default connect(mapsStateToProps)(ProtectedRouter);
