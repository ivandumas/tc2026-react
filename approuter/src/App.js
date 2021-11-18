import React,{useState,useEffect} from "react";
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import FormularioCarta from "./components/FormularioCarta";


function Encabezado(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Home</Link></span>
        <span className="nav-link"><Link to="/puntajes">Puntajes</Link></span>        
      </nav>      
    </header>
  )
}

function Home(){
  return(
    <div>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Principal</Link></span>
        <span className="nav-link"><Link to="/juego">Juego</Link></span>        
        <span className="nav-link"><Link to="/about">About</Link></span>        
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
  //Definicion del estado
  //const [numCartas,setNumCartas]=useState(2)
  //const [jugador,setJugador]=useState('')
  //Inicilización del estado (constructor)
  const [state,setState]=useState({
    numCartas:2,
    jugador:'',
    turno:''
  })

  //ComponentDidMount
  useEffect(()=>{
    console.log('Effect componentDidMount!')
    fetch('http://localhost:8080/cartas')
      .then(res=>res.json())
        .then(datos=>{
          console.log(datos)          
        })
        .catch(err=>{
          console.log("Servidor desconectado")
          console.log(err)
        })
  },[])

  //ComponentDidUpdate
  useEffect(()=>{
    //if(state.jugador!==''){
      console.log("Effect componentDidUpdate")
    //}
  })
  
  //Render
  return(
    <div className="container">
      <h1>Principal</h1>
      <input value={state.jugador} onChange={(e)=>setState({...state,jugador:e.target.value})}/>
      <p>Numero de cartas: {state.numCartas} del jugador: {state.jugador}</p>
      <button className="btn btn-danger" onClick={()=>setState({...state,numCartas:state.numCartas+1})}>Pedir carta</button>
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
    this.state={
      info:null
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/cartas')
      .then(res=>res.json())
        .then(datos=>{
          //console.log(datos)
          this.setState({
            info:datos
          })
        })
        .catch(err=>{
          console.log("Servidor desconectado")
          console.log(err)
        })
  }

  componentDidUpdate(){
    console.log("Componente actualizado")
  }
  
  async comunica(info){
    //Consumiendo el servicio POST  
    const respuesta = await fetch('http://localhost:8080/carta',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          mensaje:"Enviando JSON"
        })
      })
    
      //Imprimir lo que responde el servidor
      const data = await respuesta.json()
      console.log(data)
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h1>Juego</h1>
        {/*<button type="button" onClick={this.comunica.bind(this,"hola")} className="btn btn-primary">Consume POST</button>*/}
        <FormularioCarta></FormularioCarta>
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
