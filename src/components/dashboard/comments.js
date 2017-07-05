import React from 'react';

import CommentItem from './comment-item';

const Comments = (props) => {

	const comments = props.comments.map((item, index) => 
		<CommentItem key={index} {...item} />
	)

	return (
		<section>
			<ul className="comments">
				{comments}
			</ul> 
		</section>
	);
}

export default Comments;