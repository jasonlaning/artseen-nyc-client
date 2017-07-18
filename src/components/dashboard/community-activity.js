import React from 'react';
import {connect} from 'react-redux';
import CommunityItem from './community-item';

export const CommunityActivity = (props) => {

	const community = () => {
		if (props.community.length > 0) {
			return ( 
					props.community.map((item, index) => 
				<CommunityItem key={index} id={item.discussion.id} {...item} />
				)
			)
		} else {
			return (
				<li className="comment-item">
					<p className="snippet">You are currently following 0 users.<br/>
					View discussions, then follow other users to view activity.</p>
				</li>
			)
		}
	}

return (
	<section className="community-activity">
		<div className="wrapper">
			<ul>
			{community()}
			</ul>
		</div>
	</section>
);
}

const mapStateToProps = (state, props) => ({
	community: state.community
})

export default connect(mapStateToProps)(CommunityActivity);