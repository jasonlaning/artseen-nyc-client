import React from 'react';

import './comment-form.css'

const CommentForm = (props) => (
	<section>
        <form className="comment-form">
          <div>
            <label htmlFor="comment">New Comment:</label>
            <textarea placeholder="text goes here..." name="comment" id="comment"></textarea>
          </div>
          <button type="submit">
          Submit</button>
      </form>
    </section>
);

export default CommentForm;