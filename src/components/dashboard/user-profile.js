import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions';

import './user-profile.css';

const UserProfile = (props) => {

	const onClickUserSettings = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	return (
		<section className="user-profile">
			<div className="wrapper">
				<a href="" onClick={e => 
					onClickUserSettings(e, 'showProfilePicModal')}><img src={props.user.profilePicURL} 
					className="profile-pic" alt="profile" /></a>
		        <h2><a href="user_settings" onClick={e => onClickUserSettings(e, 'showUserSettingsModal')}>
		        	{props.user.username}</a></h2>
		        <p className="location">
		        	<a href="user_settings" onClick={e => onClickUserSettings(e, 'showUserSettingsModal')}>
		        	{props.user.location}</a></p>
		        <p className="about">
		        	<a href="user_settings" onClick={e => onClickUserSettings(e, 'showUserSettingsModal')}>
		        	{props.user.about}</a></p>
	        </div>
	    </section>
	);
}
const mapStateToProps = (state, props) => ({
	user: state.user
})

export default connect(mapStateToProps)(UserProfile);