import React from 'react';
import {Link} from 'react-router-dom';

import './community-activity.css';

const CommunityActivity = (props) => (
	<section className="community-activity">
  	<div className="wrapper">
  		  <ul>
            <li>
              <h2>1 hour ago</h2>
              <p><Link to="/:userId" className="user-profile-link">Ozzy Osbourne</Link> commented on 
              <Link to="/:discussionId" className="discussion-link"> Miguel Calderon: Caida libre (Free fall)</Link></p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation...</p>
            </li>
            <li>
              <h2>3 hours ago</h2>
              <p><b>Ozzy Osbourne</b> commented on <i>Miguel Calderon: Caida libre (Free fall)</i></p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation...</p>
            </li>
            <li>
              <h2>Yesterday</h2>
              <p><b>Ozzy Osbourne</b> commented on <i>Miguel Calderon: Caida libre (Free fall)</i></p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation...</p>
            </li>
            <li>
              <h2>2 months ago</h2>
              <p><b>Ozzy Osbourne</b> commented on <i>Miguel Calderon: Caida libre (Free fall)</i></p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation...</p>
            </li>
        </ul>
  	</div>
	</section>
);

export default CommunityActivity;