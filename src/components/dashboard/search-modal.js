import React from 'react';

const SearchModal = (props) => (
	<div>
		<div className="modal-background">
		{document.body.classList.toggle('modal-open')}
		</div>  
	    <form className="search-form modal-form">
			<h2>Search</h2>
			<div>
				<label for="search">Find an Exhibition</label>
				<input type="text" name="search" id="search" placeholder="artist, title, medium, etc." />
			</div>
			<button type="submit">Search</button>
	    </form>
	</div>
);

export default SearchModal;