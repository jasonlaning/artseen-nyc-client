import React from 'react';
import {connect} from 'react-redux';
import SearchResult from './search-result';
import {toggleModal, getExhibitionsForSearch, getSearchResultsSuccess} from '../../actions';
import searchExhibitions from '../search-exhibitions';
import './search-modal.css';

export const SearchModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSearchSubmit = (e) => {
		e.preventDefault();
		console.log(e.target['search-exhibitions'].value);
		if (props.exhibitions.length < 1) {
			props.dispatch(getExhibitionsForSearch(e.target['search-exhibitions'].value));
		} else {
			const searchResults = searchExhibitions(e.target['search-exhibitions'].value, props.exhibitions);
			props.dispatch(getSearchResultsSuccess(searchResults, props.exhibitions));
			console.log(searchResults);
		}	
	}

	const showSearchResults = () => {
		if (props.searchResults.length > 0) {
			return props.searchResults.map((item, index) =>
				<SearchResult key={index} {...item} />
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
			        {showSearchResults()}
				</div>
			</form>
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