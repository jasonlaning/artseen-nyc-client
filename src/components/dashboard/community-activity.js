import React from 'react';
import { connect } from 'react-redux';
import CommunityItem from './community-item';
import { getMoreCommunity } from '../../actions';

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

	let loadMoreDisabled = true;
	let buttonText = 'No More Activity to Load';

	if ((props.buttonsDisabled.indexOf('community') === -1) 
			&& (props.community.length > 9)) {
		loadMoreDisabled = false;
		buttonText = 'Load More Activity';
	} 

	return (
		<section className="community-activity">
			<div className="wrapper">
				<ul>
				{community()}
				</ul>
			</div>
			<button disabled={loadMoreDisabled} onClick={(e) => {
					e.preventDefault();
					props.dispatch(getMoreCommunity(props.community.length))
				}}>{buttonText}</button>
		</section>
	);
}

const mapStateToProps = (state, props) => ({
	community: state.community,
	buttonsDisabled: state.buttonsDisabled
})

export default connect(mapStateToProps)(CommunityActivity);