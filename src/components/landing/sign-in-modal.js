import React from 'react';

import './sign-in-modal.css';

const SignInModal = (props) => ( 
	<div>
		<div className="modal-background">
		</div>      
	    <form className="sign-in-form modal-form">
	        <h2>Sign In</h2>
	          <div>
	            <label for="username">Username</label>
	            <input type="text" name="username" id="username" />
	          </div>
	          <div>
	            <label for="password">Password</label>
	            <input type="password" name="password" id="password" />
	          </div>
	          <button type="submit">Sign In</button>
	    </form>
	</div>
);

export default SignInModal;