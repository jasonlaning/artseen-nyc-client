import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './scroll-to-top';

import './App.css';
import Home from './landing/home';
import Dashboard from './dashboard/dashboard';
import Error404 from './error-404';

const App = (props) => {

	return (  
		<Router>
		<ScrollToTop>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/dashboard/:feedView" component={Dashboard} />
				<Route exact path="/dashboard/:feedView/:discussionId" component ={Dashboard} />
				<Route component={Error404} />
			</Switch>
		</div>
		</ScrollToTop>
		</Router>
	);
}

export default App;
