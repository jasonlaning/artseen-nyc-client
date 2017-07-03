import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DiscussionsItem from './discussions-item';

import './discussions.css';

const Discussions = (props) => {

	const discussions = props.discussions.map((item, index) =>
		<DiscussionsItem key={index} index={index} {...item} />
	)

	return(
		<section className="discussions">
			<div className="wrapper">
				<ul>	
					{discussions}
			             </ul> 
	      		</div> 
	    	</section>
	);
}

const mapStateToProps = (state, props) => ({
	discussions: state.discussions
})

export default connect(mapStateToProps)(Discussions);