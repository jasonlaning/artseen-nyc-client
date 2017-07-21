import React from 'react';
import {connect} from 'react-redux';
import {getDiscussionFromSearch} from '../../actions';

export const SearchResult = (props) => {

	const id = props.$.id.replace(/\//g, '-');
	const discussion = Object.assign({}, props);
	discussion.id = id;

	const onExhibitionClick = (e) => {
		e.preventDefault();
		props.dispatch(getDiscussionFromSearch(discussion));
	}

	return (
		<a href={`/dashboard/discussion/${discussion.id}`} 
			onClick={(e) => onExhibitionClick(e)}><li>{discussion.Name[0]}</li></a>
	);
}

export default connect()(SearchResult);
