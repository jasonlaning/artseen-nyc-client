import React from 'react';

const Comments = (props) => (
	<section>
        <ul className="comments">
            <li>
              <h3>1 hour ago</h3>
              <p><b>Ozzy Osbourne</b> wrote:</p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation.</p>
            </li>
            <li>
              <h3>2 hours ago</h3>
              <p><b>Ozzy Osbourne</b> wrote:</p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation.</p>
            </li>
            <li>
              <h3>6 hours ago</h3>
              <p><b>Ozzy Osbourne</b> wrote:</p>
              <p className="snippet">I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation.</p>
            </li>
        </ul> 
    </section>
);

export default Comments;