import React from 'react';
import {connect} from 'react-redux';

import {toggleModal} from '../../actions';
import './search-modal.css';

export const SearchModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSearchSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showSearchModal')} >
			</div>      
			<form className="search-form modal-form" onSubmit={e => onSearchSubmit(e)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showSearchModal')} > </a>
				<div>
					<label htmlFor="search-exhibitions">Search Exhibitions</label>
					<input type="text" name="search-exhibitions" id="search-exhibitions"
						placeholder="artist, exhibition, title, media, etc..." />
					<button type="submit">Search</button>
				</div>
			</form>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(SearchModal);