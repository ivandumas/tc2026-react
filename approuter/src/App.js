import React from "react";
import {Routes,Route,Link,Outlet} from 'react-router-dom';


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
      <nav class="nav">
        <span class="nav-link"><Link to="/">Principal</Link></span>
        <span class="nav-link"><Link to="/juego">Juego</Link></span>        
        <span class="nav-link"><Link to="/about">About</Link></span>        
      </nav>
      <Outlet/>       
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

function Principal(){
  return(
    <div>
      <h1>Principal</h1>
    </div>
  )
}

function About(){
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}

class Juego extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h1>Cartas</h1>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <h1>Ejemplo usando react-router-dom</h1>
        <Encabezado/>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<Principal/>}/>
              <Route path="juego" element={<Juego/>}/>
              <Route path="about" element={<About/>}/>
            </Route>
            <Route path="/puntajes" element={<Puntajes/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    </div>
  );
}



export default App;
