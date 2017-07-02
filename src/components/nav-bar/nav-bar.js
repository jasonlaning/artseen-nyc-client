import React from 'react';
import {Link} from 'react-router-dom';

import './nav-bar.css';

const NavBar = (props) => (
	<nav>
		<div className="nav-site-title">
			<p><Link to="/">ArtSEEN NYC</Link></p>
		</div>
		<div className="nav-items-container">
			{props.children}
		</div>
	</nav>
);

export default NavBar;