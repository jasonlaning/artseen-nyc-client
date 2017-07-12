import React from 'react';
import {withRouter} from 'react-router-dom';

import './user-nav.css';

const UserNav = (props) => {

	const onClickCommunity = e => {
		e.preventDefault();
		props.history.push('/dashboard');
	}

	const onClickDiscussions = e => {
		e.preventDefault();
		props.history.push('/dashboard/discussions');
	}

	const navView = (view) => {
		if (view === 'discussions' || view === 'discussion') {
			return (
				<header className="wrapper user-nav">
					<a href="" onClick={e => onClickCommunity(e)} ><h2 className="inactive">Community Activity</h2></a>
					<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="active">All Discussions</h2></a>
				</header>
			);
		} else {
			return (
				<header className="wrapper user-nav">
					<h2 className="active">Community Activity</h2>
					<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="inactive">All Discussions</h2></a>
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

export default (withRouter(UserNav));