import "./App.css";
import React from 'react';
import Carrito from "./components/Carrito";
import Catalogo from "./components/Catalogo";
import Desafio from "./components/desafio";
import NavBar from "./components/NavBar";


const App = () => {

const nameStyle = {
  backgroundColor: "pink",
  color: "white",
  
};



const myFunction = () => {
console.log ("Se hizo click en login")
};


      return (
<div>
<Carrito />
<NavBar/> 
<Desafio/>
<Catalogo name= 'Malenita'/> {/*name es prop la declaro y luego la llamo*/}
  <h1 className="App-header"> Malenka Store </h1>
 <div>
    <p style={nameStyle}> Copyright 2022</p>
    <a
          className="App-link"
          href="https://www.instagram.com/malenka.store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={nameStyle}>Seguinos en Instragram</p>
        </a>
 </div>
 <button className="buttonLogin" onClick={myFunction}> LOGIN </button>
</div>
  );
};



export default App;


