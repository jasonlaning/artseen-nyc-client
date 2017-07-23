import React from 'react';
import { connect } from 'react-redux';

import './about.css';

export const About = (props) => (
	<div id="about" >
		<section>
			<div className="wrapper">
				<h1>Discuss art, join a community.</h1>
		        <p>ArtSeen NYC is a platform for discussing current art exhibitions and connecting with{ " " } 
		        art patrons in New York City:</p>
		  		<ol>
		  			<li>
		  				<h4>Search Exhibitions</h4>
		  				<p>Find current art exhibitions by searching our listings (powered by New York Art Beat).{ " " } 
		  				Start a discussion by posting a comment. Exhibitions that have at least one comment{ " " }
		  				move to the “Discussions” feed.</p>  
		  			</li>
		  			<li>
		  				<h4>Discussions and Comments</h4>
		  				<p>Discussions are sorted with the most recently active at the top.{ " " }
		  				Click on an individual discussion to view comments and add your own.</p>
		  			</li>
		  			<li>
		  				<h4>View User Profiles and Follow Your Favorites</h4>
		  				<p>Click on user profile images or usernames on either the Discussions feed or { " " }
		  				Community feed to view another user's profile image, location, and “about” section.{" "}
		  				Follow or unfollow other users to add or remove them from your Community Activity feed.</p> 
		  			</li>
		  			<li>
		  				<h4>Community Activity feed</h4>
		  				<p>Community Activity displays the most recent comments from users you've followed.{ " " } 
		  				This includes your own comments, so you can keep track of what you've posted.</p>
		  			</li>
		  			<li>
		  				<h4>User Settings</h4>
		  				<p>Update your profile photo, location, or “about” section to control what others see{ " " } 
		  				when they view your profile.</p>
		  				<h4 className="about-sign-up">
		  				<a href="https://artseen-nyc-api.herokuapp.com/signup">Sign up</a>,{ " " }
		  				or try a <a href="https://artseen-nyc-api.herokuapp.com/demo">Demo</a></h4>
		  			</li>
		  		</ol>
		    </div>		
		</section>	
	</div>
);


export default connect()(About);