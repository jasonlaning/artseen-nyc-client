import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from './search-result';
import { toggleModal, getExhibitionsForSearch } from '../../actions';
import './search-modal.css';

export class SearchModal extends React.Component {

	componentWillUnmount() {
		if (this.props.discussionIdFromSearch) {
			this.props.history.push(`/dashboard/discussion/${this.props.discussionIdFromSearch}`);
		}
	}

	render() {
		const modal = 'searchModal'

		const onCloseModal = (e, modal) => {
			e.preventDefault();
			this.props.dispatch(toggleModal(modal));
		}

		const onSearchSubmit = (e) => {
			e.preventDefault();
			this.props.dispatch(getExhibitionsForSearch(e.target['search-exhibitions'].value));
		}

		const searchResults = () => {
			if (this.props.searchResults.length > 0) {
				const results = this.props.searchResults.map((item, index) =>
					<SearchResult key={index} {...item} />
				)
				return (
					<div className="search-results">
				       	<h4>Search results ({this.props.searchResults.length}): </h4>
				       		<ul className="result-list">
				       			{results}
				       		</ul>
			       	</div>
				)
			} else if (this.props.searchSubmitted) {
				return <div className="search-results">No results.</div>
			}
		}

		const modalTitle = 'Current NYC Art Exhibitions';
		let messageEnter = 'message-enter';
		let message = '';

		const toggleMessage = () => {
			if (this.props.message) {
				message = this.props.message
				return 'modal-title-remove'
			} else {
				messageEnter = ''
				return null
			}
		}

		return (
			<div>
				<div className="modal-overlay" onClick={e => onCloseModal(e, modal)} >
				</div>      
				<div className="modal-container search-modal">
					<form className="search-form modal-form" onSubmit={e => onSearchSubmit(e)} >
						<h3 className="modal-title">
							<span className={toggleMessage()}>{modalTitle}</span>
							<span className={`modal-message ${messageEnter}`}>{message}</span>
						</h3>
						<div className="form-container">
							<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
							<div>
								<input type="text" name="search-exhibitions" id="search-exhibitions" autoComplete="off"
									autoFocus placeholder="artist, title, media, etc..." required />{/*
								*/}<button type="submit">Search</button>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-container search-results-container">
			       {searchResults()}
			    </div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	message: state.message,
	searchResults: state.searchResults,
	discussionIdFromSearch: state.discussionIdFromSearch,
	searchSubmitted: state.searchSubmitted
});

export default connect(mapStateToProps)(withRouter(SearchModal));