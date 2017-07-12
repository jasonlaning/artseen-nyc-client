import React from 'react';

const ExhibitionHeading = (props) => (
	<section>
        <h1>{props.discussion.id} {props.discussion.name}</h1>
        <p>Luhring Augustine Bushwick / 25 Knickerbocker Ave</p>
        <p>July 22 - July 29, 2017</p>
        <p><b>Description:</b> Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.</p>
        <p>Comments:</p>
    </section>
);

export default ExhibitionHeading;