import {
	FETCH_EMPLOYEES,
	CREATE_NEW_EMPLOYEE,
	DELETE_EMPLOYEE,
	EDIT_EMPLOYEE
} from '../actions/types';

const defaultState = {
	employee: {},
	employees: [],
	error: ''
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_EMPLOYEES:
			return {
				...state,
				employees:
					action.payloads.responseCode === '1' ? action.payloads.employees : []
			};
		case CREATE_NEW_EMPLOYEE:
			if (action.payloads.responseCode === '1') {
				return {
					...state,
					employee: action.payloads.employee,
					error: ''
				};
			} else {
				return {
					...state,
					error: action.payloads.responseMessage
				};
			}

		case DELETE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.filter(
					employee => employee.nik !== action.payloads
				)
			};

		case EDIT_EMPLOYEE:
			return {
				...state,
				employees: state.employees.map(employee => {
					if (employee.nik === action.payloads.nik) {
						return {
							...employee,
							...action.payloads.data
						};
					} else {
						return employee;
					}
				})
			};

		default:
			return state;
	}
};
