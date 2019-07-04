import { AUTH_LOGIN, AUTH_LOGOUT } from './types';

// authenticate login
export const authLogin = data => dispatch => {
	fetch('http://localhost:8080/authenticate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(userData => {
			dispatch({
				type: AUTH_LOGIN,
				payload: userData
			});
			if (userData.token) {
				localStorage.setItem('user', JSON.stringify(userData));
			}
		});
};

export const logout = () => dispatch => {
	dispatch({
		type: AUTH_LOGOUT
	});
};
