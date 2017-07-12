import React from 'react';
import {connect} from 'react-redux';
import {signUpNewUser} from '../../actions';

import './sign-up.css';

const SignUp = (props) => {

	const onSignUp = e => {
		e.preventDefault();
		props.dispatch(signUpNewUser(e.target.username.value, e.target.password.value));
		e.target.username.value = '';
		e.target.password.value = '';
	} 

	return (
		<div id="sign-up" className="hash-anchor">
			<section className="sign-up">
				<h1>Sign Up</h1>
				<span>(or try the Demo)</span>
				<form className="signup-form"  onSubmit={e => onSignUp(e)} >
					<div>
						<label htmlFor="username">Username</label>
						<input type="text" name="username" id="username" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<button type="submit">Sign Up</button>
					<div>
						<p className="modal-message">{props.message}</p>
					</div>
				</form>
			</section>
		</div>
	)
}

export default connect()(SignUp);