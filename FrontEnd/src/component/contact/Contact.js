import React, {
	Component
} from 'react'
import PropTypes from 'prop-types';
import {
	Link
} from 'react-router-dom';
import {
	connect
} from 'react-redux';
import {
	deleteContacts
} from '../../actions/contactActions';
import "./Contact.css"


class Contact extends Component {
	state = {
		showContactInfo: false
	};

	render() {
		const {
			id,
			name,
			email,
			photo,
			university,
			detail,
		} = this.props.c;
		const {
			showContactInfo
		} = this.state;


		return (
			<div className = "card card-body mb-3">
			<h4>
				{name} {' '}
				<i 
				// onClick = {this.onShowClick }
				onClick = {() => this.setState({
				showContactInfo: !this.state.showContactInfo
				})}
				className = "fas fa-sort-down" 
				style = {{cursor:'pointer'}}/>

			</h4>
		 	


			{/* {showContactInfo ? ( */}
		
				<div class="media" >
				<img  src={photo} />
				  <div class="media-head">
					  <div>Email:{email}</div>
					  <div>University:{university}</div>
					  <div>Detail:{detail}</div>
				  </div>
			   </div>

				{/* ) : null} */}
			
			</div>

		)
	}
}


Contact.propTypes = {
	c: PropTypes.object.isRequired,
};


// export default Contact
export default connect(null, {
	deleteContacts
})(Contact);