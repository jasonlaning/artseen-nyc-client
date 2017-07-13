import React from 'react';
import {connect} from 'react-redux';
import SearchResult from './search-result';
import {toggleModal, getExhibitionsForSearch} from '../../actions';
import './search-modal.css';

export const SearchModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSearchSubmit = (e) => {
		e.preventDefault();
		props.dispatch(getExhibitionsForSearch(e.target['search-exhibitions'].value));
	}

	const showSearchResults = () => {
		if (props.searchResults.length > 0) {
			const results = props.searchResults.map((item, index) =>
				<SearchResult key={index} {...item} />
			)
			return (
				<div className="search-results">
			       	<p>Search results ({props.searchResults.length}): </p>
			       		<ul>
			       			{results}
			       		</ul>
		       	</div>
			)
		}
	}

	return (
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showSearchModal')} >
			</div>      
			<form className="search-form modal-form" onSubmit={e => onSearchSubmit(e)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showSearchModal')} > </a>
				<div>
					<label htmlFor="search-exhibitions">Current Art Exhibitions in NYC</label>
					<input type="text" name="search-exhibitions" id="search-exhibitions" autoComplete="off"
						autoFocus placeholder="artist, exhibition, title, media, etc..." required />{/*
					*/}<button type="submit">Search</button>
					<div>
			        		<p className="modal-message">{props.message}</p>
			        	</div>
				</div>
			</form>
		       {showSearchResults()}
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	message: state.message,
	loggedIn: state.loggedIn,
	exhibitions: state.exhibitions,
	searchResults: state.searchResults
});

export default connect(mapStateToProps)(SearchModal);