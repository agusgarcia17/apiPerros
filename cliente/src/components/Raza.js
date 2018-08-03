import React, { Component } from 'react';
import './../css/raza.css';



class Raza extends Component {
  constructor (props) {
    super(props);
    this.state=({
      raza: [],
  	})
  }

  
  componentDidMount(){ 
    
    var BREED_NAME = this.props.match.params.breedName
        fetch(`https://dog.ceo/api/breed/${BREED_NAME}/images/random`)
        .then(res=>res.json())
        .then(res=>{
          this.setState({
            raza:res.message,
            nombre: (BREED_NAME).toUpperCase()
        })
        })

        .catch(function(e){
          console.log('no puede responder lista',e)}
      )
    }
   
    render() {

        return (
          <div className="mainContainer">

          <h1> {this.state.nombre} </h1>
          <img src= {this.state.raza} alt='perro'/>

             </div>
        );
      }

    }


export default Raza;