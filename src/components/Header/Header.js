import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
// import { history } from '../../routers/AppRouter';

const sendRedirect = () => <Redirect to='/' />;

const jsx = props => (
	<header>
		<button
			onClick={() => {
				localStorage.removeItem('user');
			}}
		>
			logout
		</button>
		<ul>
			<li>
				<NavLink to='/employee' activeClassName='is-active' exact={true}>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink to='/add' activeClassName='is-active'>
					Add New
				</NavLink>
			</li>
		</ul>
	</header>
);

const Header = props => {
	return props.isLogin ? jsx() : '';
};

export default Header;
