import React from 'react';
import {connect} from 'react-redux';
import {getDiscussionFromSearch} from '../../actions';

const SearchResult = (props) => {

	const onExhibitionClick = (e) => {
		e.preventDefault();
		console.log(props);
		props.dispatch(getDiscussionFromSearch(props));
	}

	return (
		<a href={`/single-discussion/${props.$.id}`} onClick={e => onExhibitionClick(e)}><li>{props.Name[0]}</li></a>
	);
}

export default connect()(SearchResult);