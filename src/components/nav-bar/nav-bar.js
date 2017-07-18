import React from 'react';
import { Link } from 'react-router-dom';
import { toggleModal } from '../../actions';
import { connect } from 'react-redux';

import './nav-bar.css';

export const NavBar = (props) => {

	const toggleBurger = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	let menuClass = '';
	let buttonOpenClass = 'burger-button-visible';
	let buttonCloseClass = 'burger-button-hide';

	if (props.modals.burgerModal) {
		menuClass = 'nav-items-open';
		buttonOpenClass = 'burger-button-hide';
		buttonCloseClass = 'burger-button-visible';
	} 

	const getOverlay = () => {
		if (props.modals.burgerModal) {
			return (
				<div className="modal-overlay burger-overlay" onClick={e => toggleBurger(e, 'burgerModal')} >
				</div>
			)
		}
	} 
		
	return (
		<nav>
			<div className="nav-bar-wrapper">
				<div className="nav-site-title">
					<p><Link to="/" >ArtSEEN NYC</Link></p>
				</div>
					<img className={`burger-button ${buttonOpenClass}`} src='/burger-open.png' alt="close modal" 
						onClick={(e) => toggleBurger(e, 'burgerModal')} />
					<img className={`burger-button ${buttonCloseClass}`} src='/burger-close.png' alt="close modal" 
						onClick={(e) => toggleBurger(e, 'burgerModal')} />
				{getOverlay()}
				<div className={`nav-items-container ${menuClass}`}>
					{props.children}
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = (state, props) => ({
	modals: state.modals
})

export default connect(mapStateToProps)(NavBar);