import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import AddtoCart from './components/AddtoCart';
import Navi from './components/Navi';
import Detailing from './components/Services/Detailing';
import Washing from './components/Services/Washing';

function App() {
  return (
    <div >
      <Navi />

      <Switch>
        <Route path="/AddtoCart" component={AddtoCart} />
        <Route path="/Washing" component={Washing} />
        <Route path="/Detailing" component={Detailing} />
      </Switch>


    </div>
  );
}

export default App;
