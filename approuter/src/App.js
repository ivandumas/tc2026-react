import React from "react";
import {Routes,Route,Link} from 'react-router-dom';


function Encabezado(){
  return(
    <header>
      <nav class="nav">
        <span class="nav-link"><Link to="/">Home</Link></span>
        <span class="nav-link"><Link to="/puntajes">Puntajes</Link></span>        
      </nav>      
    </header>
  )
}

function Home(){
  return(
    <div>
      <nav>
        <span>Principal</span>
        <span>Juego</span>
        <span>About</span>
      </nav>
    </div>
  )
}

function Puntajes(){
  return(
    <div>
      Puntajes del juego
    </div>
  )
}

function Error404(){
  return(
    <div>
      <h1>404 (Not found)</h1>
      <Link to="/">Ir al Home</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <h1>Ejemplo usando react-router-dom</h1>
        <Encabezado/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/puntajes" element={<Puntajes/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    </div>
  );
}



export default App;
