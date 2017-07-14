import React from 'react';
import {Link} from 'react-router-dom';

import './user-nav.css';

const UserNav = (props) => {

	const navView = (view) => {
		if (view === 'discussions' || view === 'discussion') {
			return (
				<header className="wrapper user-nav">
					<Link to='/dashboard'><h2 className="inactive">Community Activity</h2></Link>
					<Link to='/dashboard/discussions'><h2 className="active">All Discussions</h2></Link>
				</header>
			);
		} else {
			return (
				<header className="wrapper user-nav">
					<h2 className="active">Community Activity</h2>
					<Link to='/dashboard/discussions'><h2 className="inactive">All Discussions</h2></Link>
				</header>
			);
		}
	}

	return (
		<section>
		   {navView(props.userFeedView)}   
		</section>
	);
}

export default (UserNav);