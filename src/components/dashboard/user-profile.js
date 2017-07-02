import React from 'react';

import './user-profile.css';

const UserProfile = (props) => (
	<section className="user-profile">
		<div className="wrapper">
			<img src="/blank-profile-pic.png" alt="profile" />
	        <h1>Username</h1>
	        <p>[User location]</p>
	        <p>[About user] My aesthetic interests center around post-conceptual blah blah blah.</p>
        </div>
    </section>
);

export default UserProfile;