import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './scroll-to-top';

import './App.css';
import Home from './landing/home';
import Dashboard from './dashboard/dashboard';
import PageNotFound from './page-not-found';

const App = () => {
 
    return (  
      <Router>
        <ScrollToTop>
        <div>
        <Switch>
  				<Route exact path="/" component={Home} />
  				<Route exact path="/dashboard" component={Dashboard} />
  				<Route component={PageNotFound} />
			  </Switch>
        </div>
        </ScrollToTop>
      </Router>
    );
}

export default App;
