import React from 'react';
import {connect} from 'react-redux';

import './user-profile.css';

const UserProfile = (props) => (
	<section className="user-profile">
		<div className="wrapper">
			<img src={props.user.profilePicURL} alt="profile" />
	        <h1>{props.user.username}</h1>
	        <p>{props.user.location}</p>
	        <p>{props.user.about}</p>
        </div>
    </section>
);

const mapStateToProps = (state, props) => ({
	user: state.user
})

export default connect(mapStateToProps)(UserProfile);