import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Instagram1 from './components/Instagram1'; 
import Instagram2 from './components/Instagram2'; 
import Instagram3 from './components/Instagram3'; 
import Instagram4 from './components/Instagram4'; 


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Instagram1</Link>
      <Link className="p-3" to="/instagram2">Instagram2</Link>
      <Link className="p-3" to="/instagram3">Instagram3</Link>
      <Link className="p-3" to="/instagram4">Instagram4</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Instagram1} />
        <Route path="/instagram2" component={Instagram2} />
        <Route path="/instagram3" component={Instagram3} />
        <Route path="/instagram4" component={Instagram4} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
