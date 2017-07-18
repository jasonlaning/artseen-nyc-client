import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, createNewDemoUser } from '../../actions';

import './about.css';

export const About = (props) => {

	const onModalLinkClick = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onDemoClick = e => {
		e.preventDefault();
		props.dispatch(createNewDemoUser());
	} 

	return (
		<div id="about" >
			<section>
				<div className="wrapper">
					<h1>Discuss art, join a community.</h1>
			        <p>ArtSeen NYC is a platform for discussing current art exhibitions and connecting with{ " " } 
			        art patrons in New York City:</p>
			  		<ol>
			  			<li>
			  				<h4>Search Exhibitions</h4>
			  				<p>Find current art exhibitions by searching our listings (powered by New York Art Beat),{ " " } 
			  				then initiate a discussion by posting a comment.</p>  
			  			</li>
			  			<li>
			  				<h4>Discussions and Comments</h4>
			  				<p>Discussions are sorted with the most recently active at the top.{ " " }
			  				Click on an individual discussion to add a comment.</p>
			  			</li>
			  			<li>
			  				<h4>View User Profiles and Follow Your Favorites</h4>
			  				<p>Click on user profile images or usernames to view user profile image, location, and about section.{" "}
			  				Follow or unfollow other users to add or remove them from your Community Activity feed.</p> 
			  			</li>
			  			<li>
			  				<h4>Community Activity feed</h4>
			  				<p>Community activity displays the most recent comments from users you've followed.{ " " } 
			  				This includes your own comments, so you can keep track of what you've posted.</p>
			  			</li>
			  			<li>
			  				<h4>User Settings</h4>
			  				<p>Update your profile photo, location, or about section to control what others see{ " " } 
			  				when they view your profile.</p>
			  				<h4 className="about-sign-up">
			  				<a href="/sign-up" onClick={(e) => onModalLinkClick(e, 'signUpModal')}>Sign up</a>,{ " " }
			  				or try a <a href="/demo" onClick={(e) => onDemoClick(e)}>Demo</a></h4>
			  			</li>
			  		</ol>
			    </div>		
			</section>	
		</div>
	);
}

export default connect()(About);