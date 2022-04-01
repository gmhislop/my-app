import React from 'react';
import './App.css';
import Home from './Home'
import Match from './Match';
import Caregivers from './Caregivers';
import Contact from './Contact';
import Bookings from './Bookings';
import { Route ,BrowserRouter} from 'react-router-dom';
import Form from './Form';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Form />
      <Route exact path="/" component={Home} />
      <Route exact path="/match" component={Match} />
      <Route exact path="/caregivers" component={Caregivers} />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/contact" component={Contact} />
    </div>
    </BrowserRouter>
  );
}

export default App;