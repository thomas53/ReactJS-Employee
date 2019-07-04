import { AUTH_LOGIN } from '../actions/types';

const defaultState = {
	username: '',
	password: '',
	token: '',
	error: ''
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			if (!action.payload.status) {
				return {
					...state,
					...action.payload,
					error: ''
				};
			}

		default:
			return state;
	}
};
