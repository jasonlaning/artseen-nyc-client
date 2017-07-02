import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Home from './landing/home';
import Dashboard from './dashboard/dashboard';

function App() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
}

export default App;
