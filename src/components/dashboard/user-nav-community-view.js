import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getDiscussions} from '../../actions';

const UserNavCommunityView = (props) => {

	const onClickDiscussions = e => {
		e.preventDefault();
		props.dispatch(getDiscussions());
		props.history.push('/dashboard/discussions');
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="active">Community Activity</h2>
			<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="inactive">Discussions</h2></a>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(withRouter(UserNavCommunityView));