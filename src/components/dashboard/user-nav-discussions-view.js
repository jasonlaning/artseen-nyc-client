import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getCommunity, getDiscussions} from '../../actions';

const UserNavDiscussionsView = (props) => {

	const onClickCommunity = e => {
		e.preventDefault();
		props.dispatch(getCommunity());
		props.history.push('/dashboard');
	}

	const onClickDiscussions = e => {
		e.preventDefault();
		props.dispatch(getDiscussions());
		props.history.push('/dashboard/discussions');
	}

	return (
		<header className="wrapper user-nav">
			<a href="" onClick={e => onClickCommunity(e)} ><h2 className="inactive">Community Activity</h2></a>
			<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="active">Discussions</h2></a>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(withRouter(UserNavDiscussionsView));