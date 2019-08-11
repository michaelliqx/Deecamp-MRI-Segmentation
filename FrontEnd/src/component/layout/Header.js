import React from "react";
import PropTypes from 'prop-types';
import {
	Link
} from 'react-router-dom';
import deecamplogo from "../../imgs/deecamplogo.jpg"
import "./Header.css"
import logo from "../../imgs/logo4.png"

function Header(props) {
	// const {
	// 	branding,
	// } = props;
	
	return (
		<div>

			<nav className = "navbar navbar-expand navbar-dark mb-10 py-10" >
				<div className = "container-fluid">
				<a herf = "/" className = "navbar-brand ">
				<img className = "deecamplogo" src = {deecamplogo} height = "30px" />
				<img src = {logo} width="25%"/>
				</a>

				<div>
					<ul className = "navbar-nav mr-auto">
						<li className = "nav-item">
							<Link to = "/" className = "nav-link">
							<i className = 'fas fa-home'></i> Home
							</Link>
						</li>
						<li className = "nav-item">
							<Link to = "/test" className = "nav-link">
							<i className = 'fas fa-fire'></i> Test
							</Link>
						</li>
						<li className = "nav-item">
							<Link to = "/contact" className = "nav-link">
							<i className = 'fas fa-plus'></i> contact
							</Link>
						</li>
						<li className = "nav-item">
							<Link to = "/about" className = "nav-link">
							<i className = 'fas fa-question'></i> About
							</Link>
						</li>
						<li className = "nav-item">
							<a href = "https://github.com/michaelliqx/Deecamp-MRI-Segmentation" className = "nav-link">
							<i className = 'fas fa-key'></i> Github
							</a>
						</li>
					</ul>
				</div>

				
				</div>
			</nav>

		</div>

	);
};


// Header.defaultProps = {
// 	branding: "MRI SEGMENTATION",
// };

// Header.propTypes = {
// 	branding: PropTypes.string.isRequired,
// };


export default Header;