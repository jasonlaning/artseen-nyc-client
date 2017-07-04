import React from 'react';

const CommentItem = (props) => (
	<li>
	    <h3>{props.date}</h3>
	    <p><b>{props.author}</b> wrote:</p>
	    <p className="snippet">{props.text}</p>
	</li>
);

export default CommentItem;