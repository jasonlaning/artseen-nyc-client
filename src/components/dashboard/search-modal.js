import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchResult from './search-result';
import {toggleModal, getExhibitionsForSearch, getSingleDiscussion} from '../../actions';
import './search-modal.css';

export class SearchModal extends React.Component {

	componentWillUnmount() {
		if (this.props.discussionIdFromSearch) {
			console.log(this.props.match.params.discussionId, this.props.discussionIdFromSearch);
			this.props.history.push(`/dashboard/discussion/${this.props.discussionIdFromSearch}`);
			if(this.props.match.params.feedView === 'discussion') {
				this.props.dispatch(getSingleDiscussion(this.props.discussionIdFromSearch));
			}
		}
	}

	render() {
		const modal = 'showSearchModal'

		const onCloseModal = (e, modal) => {
			e.preventDefault();
			this.props.dispatch(toggleModal(modal));
		}

		const onSearchSubmit = (e) => {
			e.preventDefault();
			this.props.dispatch(getExhibitionsForSearch(e.target['search-exhibitions'].value));
		}

		const showSearchResults = () => {
			if (this.props.searchResults.length > 0) {
				const results = this.props.searchResults.map((item, index) =>
					<SearchResult key={index} {...item} />
				)
				return (
					<div className="search-results">
				       	<p>Search results ({this.props.searchResults.length}): </p>
				       		<ul>
				       			{results}
				       		</ul>
			       	</div>
				)
			}
		}

		return (
			<div>
				<div className="modal-overlay" onClick={e => onCloseModal(e, modal)} >
				</div>      
				<form className="search-form modal-form" onSubmit={e => onSearchSubmit(e)} >
					<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
					<div>
						<label htmlFor="search-exhibitions">Current Art Exhibitions in NYC</label>
						<input type="text" name="search-exhibitions" id="search-exhibitions" autoComplete="off"
							autoFocus placeholder="artist, exhibition, title, media, etc..." required />{/*
						*/}<button type="submit">Search</button>
						<div>
				        		<p className="modal-message">{this.props.message}</p>
				        	</div>
					</div>
				</form>
			       {showSearchResults()}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	message: state.message,
	loggedIn: state.loggedIn,
	exhibitions: state.exhibitions,
	searchResults: state.searchResults,
	discussionIdFromSearch: state.discussionIdFromSearch,
	discussionToView: state.discussionToView
});

export default connect(mapStateToProps)(withRouter(SearchModal));