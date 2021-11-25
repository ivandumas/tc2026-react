import './App.css';
import {Route,Routes,Link, Outlet} from 'react-router-dom';
import React from 'react';

function Encabezado(){
  return(
    <header>
      <span><Link to="/">Menú</Link></span>
      <span><Link to="/puntajes">Puntajes</Link></span>
    </header>
  );
}

function Menu(){
  return(
    <div className="Menu">
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/juego">Juego</Link></span>
      </nav>
      <Outlet />
    </div>
  );
}

function Puntajes(){
  return(
    <div className="Puntajes">Puntajes de juego</div>
  );
}

function Home(){
  return(
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
    <div className="About">
      <h1>About</h1>
    </div>
  );
}

class Juego extends React.Component{
  constructor(){
    super()
    this.state={
      cartas:null
    }
  }

  comunica = async (info)=>{
    //Consumir un servicio POST
    const res=await fetch('http://localhost:8080/carta',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        estado: info,
        mensaje:"Enviando JSON"
      })
    })
    //Lo que responde el servidor
    const data = await res.json();
    console.log(data)
  }

  componentDidMount(){  
      //Consumiendo servicio GET  
      fetch('http://localhost:8080/cartas')
      .then(res=>res.json())
      .then(datos=>{
        console.log(datos)
        this.setState({
          cartas:datos
        })
      })
      .catch(err=>console.log(err))
    
  }

  render(){
    console.log(this.state)
    return(
      <div className="Juego">
        <h1>Cartas</h1>  
        <button type="button" onClick={this.comunica(this.state)}>Consume POST</button>
      </div>
    );
  }
}

function Error404(){
  return(
    <div className="Error404">
      <h1> 404 (Not Found)</h1>
      <Link to="/">Ir a la página principal</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1> Ejemplo usando react-router-dom</h1> 
      <Encabezado/>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="juego" element={<Juego/>}/>
        </Route>
        <Route path="/puntajes" element={<Puntajes/>}></Route>
        <Route path="*" element={<Error404/>}/>
      </Routes> 
    </div>
  );
}

export default App;
