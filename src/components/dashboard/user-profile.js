import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';

import './user-profile.css';

export const UserProfile = (props) => {

	//check for demo account to display generic 'Demo' username
	let username = props.user.username;
	let demoUser = username.slice(0, 10);
	if (demoUser === 'Demo123abc') {
		username = 'Demo'
	}

	const onClickUserSettings = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	return (
		<section className="user-profile">
			<div className="wrapper">
				<a href="/dashboard" title="Update profile image" onClick={e => 
					onClickUserSettings(e, 'profilePicModal')}><img src={props.user.profilePicURL} 
					className="profile-pic" alt="profile" /></a>
		        <h2><a href="/dashboard" title="Edit profile settings"
		        	onClick={e => onClickUserSettings(e, 'userSettingsModal')}>
		        	{username}</a></h2>
		        <p className="location">
		        	<a href="/dashboard" title="Edit profile settings"
		        		onClick={e => onClickUserSettings(e, 'userSettingsModal')}>
		        	{props.user.location}</a></p>
		        <p className="about">
		        	<a href="/dashboard" title="Edit profile settings"
		        		onClick={e => onClickUserSettings(e, 'userSettingsModal')}>
		        	{props.user.about}</a></p>
	        </div>
	    </section>
	);
}
const mapStateToProps = (state, props) => ({
	user: state.user
})

export default connect(mapStateToProps)(UserProfile);