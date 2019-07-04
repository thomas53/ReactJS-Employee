import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from '../employee/EmployeeForm';
import { editEmployee } from '../../actions/Employee';

const EditEmployeePage = props => {
	return (
		<div>
			<h3>Edit Employee</h3>
			<EmployeeForm
				employee={props.employee}
				isUpdate={true}
				employee={props.employee}
				onSubmit={update => {
					props.editEmployee(update, () => props.history.push('/employee'));
				}}
			/>
		</div>
	);
};

const mapsStateToProps = (state, props) => ({
	employee: state.employee.employees.find(
		employee => employee.nik === props.match.params.nik
	)
});

export default connect(
	mapsStateToProps,
	{ editEmployee }
)(EditEmployeePage);
