import React from 'react';
import {connect} from 'react-redux';
import {updateModalMessage} from '../actions';

export class Error404 extends React.Component {

	componentWillUnmount() {
		this.props.dispatch(updateModalMessage(''));
	}

	render() {
		return (
			<div className="error-404">
				<p>Page not found</p>
			</div>
		)
	}
}

export default connect()(Error404);