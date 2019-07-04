import {
	FETCH_EMPLOYEES,
	CREATE_NEW_EMPLOYEE,
	DELETE_EMPLOYEE,
	FETCH_EMPLOYEE_DETAIL,
	EDIT_EMPLOYEE
} from './types';

const getToken = () => {
	if (localStorage.getItem('user')) {
		return JSON.parse(localStorage.getItem('user')).token;
	} else {
		return '';
	}
};

export const fetchEmployee = () => dispatch => {
	fetch('http://localhost:8080/employee', {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + getToken()
		}
	})
		.then(res => res.json())
		.then(data =>
			dispatch({
				type: FETCH_EMPLOYEES,
				payloads: data
			})
		);
};

export const addEmployee = (data, cb) => dispatch => {
	fetch('http://localhost:8080/employee', {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + getToken(),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: CREATE_NEW_EMPLOYEE,
				payloads: data
			});
			if (data.responseCode === '1') {
				cb();
			}
		});
};

export const deleteEmployee = nik => dispatch => {
	fetch('http://localhost:8080/employee/' + nik, {
		method: 'DELETE',
		headers: {
			Authorization: 'Bearer ' + getToken()
		}
	})
		.then(res => res.json())
		.then(data =>
			dispatch({
				type: DELETE_EMPLOYEE,
				payloads: nik
			})
		);
};

export const fetchDetailEmployee = nik => dispatch => {
	fetch('http://localhost:8080/employee/' + nik, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + getToken()
		}
	})
		.then(res => res.json())
		.then(data =>
			dispatch({
				type: FETCH_EMPLOYEE_DETAIL,
				payloads: data
			})
		);
};

export const editEmployee = (data, cb) => dispatch => {
	fetch('http://localhost:8080/employee/' + data.nik, {
		method: 'PUT',
		headers: {
			Authorization: 'Bearer ' + getToken(),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: EDIT_EMPLOYEE,
				payloads: data
			});
			cb();
		});
};
