import React from 'react';
import {connect} from 'react-redux';

import {toggleModal} from '../../actions';

import './follow-user-modal.css';

const FollowUserModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onFollowSubmit = e => {
		e.preventDefault();
	}
	return (
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showFollowUserModal')}>
		</div> 
			<form className="follow-user-form modal-form" onSubmit={e => onFollowSubmit(e)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showFollowUserModal')} > </a>
				<div>
					<h2>{props.userToFollow.username}</h2>
					<p><img src={props.userToFollow.profilePicURL} alt="" /></p>
					<p>{props.userToFollow.location}</p>
					<p>{props.userToFollow.about}</p>
				</div>
				<button type="submit" name="follow">Follow</button>
				<button type="submit" name="unfollow">Unfollow</button>
				</form>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	userToFollow: state.userToFollow
});

export default connect(mapStateToProps)(FollowUserModal);
