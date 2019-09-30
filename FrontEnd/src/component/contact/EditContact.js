import React, {
	Component
} from 'react';
// import {
// 	Consumer
// } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import {
	connect
} from 'react-redux';
import {
	editContacts,
	getContact
} from '../../actions/contactActions';
// import uuid from 'uuid';
import PropTypes from 'prop-types';


class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}

	// async componentDidMount() {
	// 	const {
	// 		id
	// 	} = this.props.match.params;
	// 	const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

	// 	const contact = res.data;

	// 	this.setState({
	// 		name: contact.name,
	// 		email: contact.email,
	// 		phone: contact.phone
	// 	})

	// }

	componentWillReceiveProps(nextProps, nextState) {
		const {
			name,
			email,
			phone
		} = nextProps.contact;
		this.setState({
			name,
			email,
			phone
		});
	}

	componentDidMount() {
		const {
			id
		} = this.props.match.params;
		this.props.getContact(id);
	}

	onSubmit = (e) => {
		e.preventDefault();

		const {
			name,
			email,
			phone
		} = this.state;

		if (name === '') {
			this.setState({
				errors: {
					name: "Name is required"
				}
			})
			return;
		}
		if (email === '') {
			this.setState({
				errors: {
					email: "Email is required"
				}
			})
			return;
		}
		if (phone === '') {
			this.setState({
				errors: {
					phone: "Phone is required"
				}
			})
			return;
		}
		const {
			id
		} = this.props.match.params;
		const updContact = {
			id,
			name,
			email,
			phone
		}

		this.props.editContacts(updContact);


		// const {
		// 	id
		// } = this.props.match.params;

		// const res = await axios.put(
		// 	`https://jsonplaceholder.typicode.com/users/${id}`,
		// 	updContact);
		// dispatch({
		// 	type: 'UPDATE_CONTACT',
		// 	payload: res.data
		// });

		// Clear State
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});
		// Link back to the home page
		this.props.history.push('/');

	}

	onChange = e => this.setState({
		[e.target.name]: e.target.value
	});

	render() {

		const {
			name,
			email,
			phone,
			errors
		} = this.state;
		return (
			<div className = "card mb-3">
			<div className = "card-header">
			Edit Contact</div>
			<div className = "card-body">
			 <form onSubmit = {this.onSubmit.bind
			 	(this)}>
			 	<TextInputGroup  
			 		label = 'Name'
			 		name = 'name'
			 		placeholder = 'Enter Name'
			 		value = {name}
			 		onChange = {this.onChange}
			 		error = {errors.name}
			 	/>
				<TextInputGroup  
			 		label = 'Email'
			 		name = 'email'
			 		type = 'email'
			 		placeholder = 'Enter Email'
			 		value = {email}
			 		onChange = {this.onChange}
			 		error = {errors.email}
			 	/>
			 	<TextInputGroup  
			 		label = 'Phone'
			 		name = 'phone'
			 		placeholder = 'Enter Phone'
			 		value = {phone}
			 		onChange = {this.onChange}
			 		error = {errors.phone}
			 	/>
			 	
			 <input type = "submit"
			  value = "Update Contact"
			  className = "btn btn-light btn-block" 
			  />
			 </form>
			 </div>
		</div>
		)
	}

}

EditContact.propTypes = {
	// editContacts: PropTypes.func.isRequired,
	contact: PropTypes.object.isRequired,
	getContact: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
	contact: state.contact.contact
});

// export default EditContact;
export default connect(mapStateToProps, {
	getContact,
	editContacts
})(EditContact);