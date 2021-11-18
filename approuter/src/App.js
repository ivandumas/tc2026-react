import React from "react";
import {Routes,Route,Link} from 'react-router-dom';


function Encabezado(){
  return(
    <header>
      <span>Home</span>
      <span>Puntajes</span>
    </header>
  )
}

function Home(){
  <div>
    <nav>
      <span>Principal</span>
      <span>Juego</span>
      <span>About</span>
    </nav>
  </div>
}

function Puntajes(){
  <div>
    Puntajes del juego
  </div>
}

function App() {
  return (
    <div className="App">
        <h1>Ejemplo usando react-router-dom</h1>
        <Encabezado/>
        

    </div>
  );
}



export default App;
