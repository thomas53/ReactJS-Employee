import React from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../../actions/Employee';

class EmployeeForm extends React.Component {
	constructor(props) {
		super(props);
		console.log('lalalala: ', props);
		this.state = {
			employee: {
				nik: props.employee ? props.employee.nik : '',
				name: props.employee ? props.employee.name : '',
				dob: props.employee ? props.employee.dob : Date(),
				pointNumber: props.employee ? props.employee.pointNumber : 0
			},
			error: ''
		};
	}

	componentWillReceiveProps() {
		console.log('test');
	}

	onChangeHandler = e => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState(prevState => ({
			employee: {
				...prevState.employee,
				[name]: value
			}
		}));
	};

	onSubmitHandler = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.employee);
	};

	render() {
		return (
			<div className='employee-form'>
				{this.props.error && <p>{this.props.error}</p>}
				<form onSubmit={this.onSubmitHandler}>
					<input
						type='text'
						name='nik'
						placeholder='NIK'
						value={this.state.employee.nik}
						onChange={this.onChangeHandler}
					/>
					<br />
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={this.state.employee.name}
						onChange={this.onChangeHandler}
					/>
					<br />
					<input
						type='date'
						name='dob'
						placeholder='Date of Birth'
						value={this.state.employee.dob}
						onChange={this.onChangeHandler}
					/>
					<br />
					<input
						type='text'
						name='pointNumber'
						placeholder='Point'
						value={this.state.employee.pointNumber}
						onChange={this.onChangeHandler}
					/>
					<br />
					<button type='submit' className='btn-submit'>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const mapsStateToProps = state => ({
	error: state.employee.error
});

export default connect(
	mapsStateToProps,
	{ addEmployee }
)(EmployeeForm);
