import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../../actions/Employee';
import EmployeeListItem from '../employee/EmployeeListItem';

class EmployeeListPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: props.token.length > 0
		};
	}

	componentWillMount() {
		this.props.fetchEmployee();
	}

	render() {
		if (this.props.employees.length <= 0) {
			return <p>Data Kosong</p>;
		}

		return (
			<div className='content'>
				<h3>List Employee</h3>
				<table className='table-employee'>
					<thead>
						<tr>
							<td>NIK</td>
							<td>Date of Birth</td>
							<td>Name</td>
							<td>Point Number</td>
							<td>Point Alphabet</td>
						</tr>
					</thead>
					<tbody>
						{this.props.employees.map(employee => (
							<EmployeeListItem key={employee.nik} employee={employee} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	employees: state.employee.employees,
	token: state.login.token
});

export default connect(
	mapStateToProps,
	{ fetchEmployee }
)(EmployeeListPage);
