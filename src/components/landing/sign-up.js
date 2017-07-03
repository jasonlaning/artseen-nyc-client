import React from 'react';

import './sign-up.css';

const SignUp = (props) => (
  <div id="sign-up" className="hash-anchor">
   <section className="sign-up">
      <h1>Sign Up</h1>
      (or try the Demo)
      <form className="signup-form">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Sign Up</button>
    	</form>
    </section>
  </div>
);

export default SignUp;