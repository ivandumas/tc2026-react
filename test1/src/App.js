import React from 'react';
import './App.css';
import FormularioCarta from './components/FormularioCarta';
import axios from 'axios';

//Black jack
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cartas : [] /*[
        {
          mazo:"Corazones",
          descripcion:"K",
          valor:10        
        },
        {
          mazo:"Corazones",
          descripcion:"5",
          valor:5 
        }        
      ]*/
    };
    this.agregarCarta=this.agregarCarta.bind(this);
  }

  componentDidMount(){
    axios.get("http://127.0.0.1:8080/cartas")
      .then(result=>{
        console.log(result)
        this.setState(result.data);
      })
  }

  agregarCarta(carta){
    this.setState({
      cartas:[...this.state.cartas,carta]
    })
  }

  eliminarCarta(id){
    this.setState({
      cartas: this.state.cartas.filter((e,i)=>{
        return i!==id
      })
    })
  }
  //Renderizar el componente dentro de la vista
  
  render(){
    console.log(this.props);
    console.log(this.state);
    const cartasActuales = this.state.cartas.map((carta,id)=>{
      return(
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
                <h3>Carta {id+1}</h3>
            </div>
            <div className="card-body">
              <p>Mazo: {carta.mazo}</p>
              <p>Descripcion: {carta.descripcion}</p>
              <p>Valor{carta.valor}</p>
            </div>
            <div className="card-footer">
              <button type="button" onClick={this.eliminarCarta.bind(this,id)} className="btn btn-danger">Eliminar Carta</button>
            </div>
          </div>
        </div>
      );
    })
    return(
      <div>
        {/*<h3>{this.state.cartas[0].mazo}</h3>
        <h3>{this.state.cartas[0].descripcion}</h3>
        <h3>{this.state.cartas[0].valor}</h3>*/}
        <FormularioCarta onAgregarCarta={this.agregarCarta}/>

        {cartasActuales}
      </div>
    ); 
  }
}
/*function App() {
  return (
   <div>*/
     {/*<HolaMundo nombre="Web"></HolaMundo>
     <HolaMundo nombre="Maria"></HolaMundo>
     <HolaMundo nombre="Pedro"></HolaMundo>
     <HolaMundoFlecha nombre="Laura"/>
  <HolaMundoClase nombre="Andres"/>*/}
   /*</div>   
  );
}*/
//Componente función
function HolaMundo(props){
  return(
    <div><h1>Hola {props.nombre} componente función</h1></div>
  );
}

const HolaMundoFlecha=(props)=>{
  return(
    <div><h1>Hola {props.nombre} componente anónimo función</h1></div>
  );
}
//Componente de tipo clase
class HolaMundoClase extends React.Component{
  render(){
    return(
      <div><h1>Hola {this.props.nombre} componente clase</h1></div>
    );
  }
}

export default App;
