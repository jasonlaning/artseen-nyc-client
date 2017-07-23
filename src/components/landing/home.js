import React from 'react';

import NavBar from '../nav-bar/nav-bar';
import Banner from './banner';
import About from './about';
import Footer from '../footer/footer';

export const Home = (props) => (
	<div>
		<NavBar>
			<a className="nav-item" href="https://artseen-nyc-api.herokuapp.com/login">Log in</a>
			<a className="nav-item" href="https://artseen-nyc-api.herokuapp.com/signup">Sign up</a>
			<a className="nav-item" href="https://artseen-nyc-api.herokuapp.com/demo" >Demo</a>
		</NavBar>
		<main>
			<Banner />
			<About />
		</main>
		<Footer />
	</div>
)

export default Home;