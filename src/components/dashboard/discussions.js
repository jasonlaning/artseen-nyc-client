import React from 'react';
import { connect } from 'react-redux';
import DiscussionsItem from './discussions-item';
import { getMoreDiscussions } from '../../actions';

import './discussions.css';

export const Discussions = (props) => {

	const discussions = props.discussions.map((item, index) =>
		<DiscussionsItem key={index} id={item.id} {...item} />
	)

	let loadMoreDisabled = true;
	let buttonText = 'No More Discussions to Load';

	if ((props.buttonsDisabled.indexOf('discussions') === -1) 
			&& (props.discussions.length > 9)) {
		loadMoreDisabled = false;
		buttonText = 'Load More Discussions';
	} 

	return(
		<section className="discussions">
			<div className="wrapper">
				<ul>	
					{discussions}
				</ul> 
			</div> 
			<button disabled={loadMoreDisabled} onClick={(e) => {
				e.preventDefault();
				props.dispatch(getMoreDiscussions(props.discussions.length))
			}}>{buttonText}</button>
		</section>
	);
}

const mapStateToProps = (state, props) => ({
	discussions: state.discussions,
	buttonsDisabled: state.buttonsDisabled
})

export default connect(mapStateToProps)(Discussions);