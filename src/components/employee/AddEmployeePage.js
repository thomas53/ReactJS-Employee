import React from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { addEmployee } from '../../actions/Employee';

const AddEmployeePage = props => (
	<div>
		<h3>Add New Employee</h3>
		<EmployeeForm
			onSubmit={employee => {
				props.addEmployee(employee, () => props.history.push('/employee'));
			}}
		/>
	</div>
);
export default connect(
	null,
	{ addEmployee }
)(AddEmployeePage);
