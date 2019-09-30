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
import dog1 from "../../imgs/dog1.jpg"
import dog2 from "../../imgs/dog2.jpeg"
import dog3 from "../../imgs/dog3.jpeg"
import kongya from '../../imgs/kongya.png'
import yuanzhe from '../../imgs/yuanzhe.png'
import yanbai from '../../imgs/yanbai.jpeg'
import zhiming from '../../imgs/zhiming.jpeg'
import kaixiang from '../../imgs/kaixiang.jpeg'
import yuanfang from '../../imgs/yuanfang.jpeg'

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	
	render() {


		return (
			// <div className = "card card-body mb-3">
			// <h4>
			// 	{name} {' '}
			// 	{/* <i 
			// 	// onClick = {this.onShowClick }
			// 	onClick = {() => this.setState({
			// 	showContactInfo: !this.state.showContactInfo
			// 	})}
			// 	className = "fas fa-sort-down" 
			// 	style = {{cursor:'pointer'}}/> */}
			// </h4>
		 	
			// {/* {showContactInfo ? ( */}
		
				// {/* <div class="media" >

			//    </div> */}

				<div className ='container-fluid'>
					<div className='row'>
						<div className='col-3'>
							<img  src={dog1} width='20%' />
							<div>姓名:res</div>
							<div>邮箱:543045137@qq.com/lqx1996@bu.edu</div>
							<div>学校:波士顿大学</div>
							<div>介绍:hello world</div>
						</div>
						
					</div>
				</div>
			
			// </div>

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