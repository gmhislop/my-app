import React from 'react';
import './App.css';
import Home from './pages/Home'
import Match from './pages/Match';
import Caregivers from './pages/Caregivers';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';


function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path="/pages/caregivers" exact component={Caregivers} />
      <Route path="/pages/bookings" component={Bookings} />
      <Route path="/pages/login" exact component={Form} />
      <Route path='./'/>     
      <Route path=".pages/" exact component={Home} />
      <Route path=".pages/match" component={Match} />
      <Route path=".pages/contact" component={Contact} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;