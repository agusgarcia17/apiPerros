import React, { Component } from 'react';
import './../css/lista.css';

class Lista extends Component {
  constructor (props) {
    super(props);
    this.state=({
      razas: [],
  	})
  }


    componentDidMount(){ 

        fetch(`https://dog.ceo/api/breeds/list`)
        .then(res=>res.json())
        .then(res=>{
          this.setState({
            razas:(res.message).sort(),
        })
        console.log(this.state.razas)
        })

        .catch(function(e){
          console.log('no puede responder lista',e)}
      )
    }
   
    render() {

        return (
          <div className="mainContainer">

          <ul> 
            {this.state.razas.map(r=>(

               <a href={`/${r}`} className='link'>
                <li className='raza' key={r}> {r} </li>
                </a>
            ))}
          </ul>
             </div>
        );
      }
    }


export default Lista;