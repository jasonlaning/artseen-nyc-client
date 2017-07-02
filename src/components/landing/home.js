import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar';
import Banner from './banner';
import About from './about';
import SignUp from './sign-up';
import Footer from '../footer/footer';
import SignInModal from './sign-in-modal';

import './home.css';

const Home = (props) => {

	//fix all this with state later
	let signInModal;
	let showSignInModal = false;
	if (showSignInModal) {
		document.body.classList.toggle('modal-open');
		signInModal = <SignInModal onClose={() => console.log('put something here')} />;
	}

	return (
		<div>
			{signInModal}
			<NavBar>
				<div className="nav-item"><Link to="/dashboard">Log in</Link></div>
				<div className="nav-item search-glass">&#9906;</div>
			</NavBar>
			<main>
				<Banner />
				<About />
				<SignUp />
			</main>
			<Footer />
		</div>
	);
}

export default Home;