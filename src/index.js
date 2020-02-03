import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

ReactDOM.render(
  (
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </div>
        
    </Router>
  ),
  document.getElementById('root')
);
