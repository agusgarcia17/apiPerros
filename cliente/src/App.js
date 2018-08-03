import React, { Component } from 'react';
import Home from './components/Home';
import Raza from './components/Raza';
import Lista from './components/Lista';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Home/>
        <Router>
         <section className='Rutas'>
            <Switch>
                      <Route exact path="/lista" component={Lista}/>    
                      <Route exact path="/:breedName" component={Raza}/>
            </Switch>
          </section>
       </Router>
      </div>
    );
  }
}

export default App;
