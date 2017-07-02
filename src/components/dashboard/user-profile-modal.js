import React from 'react';

const UserProfileModal = (props) => (
	<div>
		<div className="modal-background">
			{document.body.classList.toggle('modal-open')}
		</div> 
		<form className="modal-form">
          <div>
          <h2>Some Username</h2>
          <p>[profile image]</p>
          <p>[location/about]</p>
          <p>[recent comments]</p>
          </div>
          <button type="submit">Follow</button>
      	</form>
	</div>
);

export default UserProfileModal;