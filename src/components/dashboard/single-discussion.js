import React from 'react';

import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

const SingleDiscussion = (props) => (
	<div>
		<ExhibitionHeading />
		<Comments />
		<CommentForm />
	</div>
);

export default SingleDiscussion;