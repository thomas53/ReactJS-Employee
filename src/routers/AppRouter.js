import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/Header/Header';
import AddEmployeePage from '../components/employee/AddEmployeePage';
import EmployeeList from '../components/employee/EmployeeList';
import EditEmployeePage from '../components/employee/EditEmployeePage';
import LoginPage from '../components/login/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = props => {
	console.log('Is Login : ', props.isLogin);
	return (
		<div>
			<Router history={history}>
				<Header isLogin={props.isLogin} />
				<Switch>
					<Route path='/' component={LoginPage} exact={true} />
					<Route path='/employee' component={EmployeeList} />
					<Route path='/add' component={AddEmployeePage} />
					<Route path='/edit/:nik' component={EditEmployeePage} />
					<Route path='*' component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default AppRouter;
