import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../../actions/Employee';
import { Link } from 'react-router-dom';

const EmployeeListItem = props => (
	<tr>
		<td>{props.employee.nik}</td>
		<td>{props.employee.dateOfBirth}</td>
		<td>
			<Link to={`/edit/${props.employee.nik}`}> {props.employee.name}</Link>
		</td>
		<td>{props.employee.pointNumber}</td>
		<td>{props.employee.pointAlphabet}</td>
		<td>
			<button onClick={() => props.deleteEmployee(props.employee.nik)}>
				x
			</button>
		</td>
	</tr>
);

export default connect(
	null,
	{ deleteEmployee }
)(EmployeeListItem);
