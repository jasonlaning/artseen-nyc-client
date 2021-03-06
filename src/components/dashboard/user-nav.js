import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { getUserSession } from '../../actions'

import './user-nav.css';

export const UserNav = (props) => {

	const onNavClick = () => {
		props.dispatch(getUserSession());
	}

	const navView = (view) => {
		if (view === 'discussions' || view === 'discussion') {
			return (
				<header className="wrapper user-nav">
					<Link to='/dashboard'><h2 className="inactive" onClick={ e => (
						onNavClick(e) )} >Community Activity</h2></Link>
					<Link to='/dashboard/discussions' onClick={ e => (
						onNavClick(e) )} ><h2 className="active" >All Discussions</h2></Link>
				</header>
			);
		} else {
			return (
				<header className="wrapper user-nav">
					<h2 className="active">Community Activity</h2>
					<Link to='/dashboard/discussions' onClick={ e => (
						onNavClick(e) ) } ><h2 className="inactive">All Discussions</h2></Link>
				</header>
			);
		}
	}

	return (
		<section className="user-nav">
			<Sticky top={50} innerZ={1} enabled={true}>
				{navView(props.userFeedView)}
			</Sticky>
		</section>
	);
}

export default connect()(UserNav);