import React, { Component } from 'react';
// import Logo from './../img/logoAda.svg';
import './../css/home.css';

class Home extends Component {

    
  render() {
    return (
        <div className='home'>
                <h1> Challenge de Amalgama </h1>

                <a href='/lista'> Ir a lista de perros </a>
        </div>
    );
  }
}

export default Home