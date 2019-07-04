import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeApraisal from './components/EmployeeApraisal';
import { Provider } from 'react-redux';
import store from './store/configStore';
import './styles/styles.scss';

ReactDOM.render(
	<Provider store={store}>
		<div className='body'>
			<EmployeeApraisal />
		</div>
	</Provider>,
	document.getElementById('root')
);
