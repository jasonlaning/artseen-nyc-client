import React from 'react';

import './sign-up.css';

const SignUp = (props) => (
	<section className="sign-up">
        <h1>Sign Up</h1>
        (or try the Demo)
        <form class="signup-form">
          <div>
            <label for="first-name">First name</label>
            <input placeholder="First Name" type="text" name="first-name" id="first-name" />
          </div>
          <div>
            <label for="last-name">Last name</label>
            <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
          </div>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
      	</form>
    </section>
);

export default SignUp;