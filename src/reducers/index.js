import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
	login: LoginReducer,
	employee: EmployeeReducer
});
