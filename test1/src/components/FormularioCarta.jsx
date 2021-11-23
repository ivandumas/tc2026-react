import React from 'react';

class FormularioCarta extends React.Component{
    constructor(){
        super()
        this.state={
            mazo:"Corazones",
            descripcion:'',
            valor:''
        }
        //this.handleInput=this.handleInput.bind(this)
    }
    
    handleInput=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onAgregarCarta(this.state)
        console.log(this.state)
    }

    render(){
        console.log(this.state)
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <select onChange={this.handleInput} name="mazo" className="form-control">
                        <option>Corazones</option>
                        <option>Diamantes</option>
                        <option>Tréboles</option>
                        <option>Espadas</option>
                    </select>
                    <input type="text" onChange={this.handleInput} name="descripcion" className="form-control"/>
                    <input type="text" onChange={this.handleInput} name="valor" className="form-control"/>
                    <button type="submit" className="btn btn-primary">Pedir carta</button>
                </form> 
            </div>
        );
    }
}

export default FormularioCarta