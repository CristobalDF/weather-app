import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)

        this.state = {
            activo: false
        }
    }

    estaActivo= () => {
        return this.state.activo ? "Activo" : "No Activo"
    }

    onClickHandler = () => {
        this.setState(
            {
                activo: this.state.activo ? false : true
            }
        )
    }

    componentDidMount() { 
        console.log("Se ha montado el componente.")
     }

    componentDidUpdate(prevProps, prevState) { 
        
        console.log('Estado previo: ', prevState);
        console.log('Estado nuevo: ', this.state.activo);
        console.log("Se ha actualizado el componente.")
    } 
    
    componentWillUnmount() {
        console.log("El componente se ha desmontado.")
     }

    render(){
        return (
        <div>
            <button onClick={this.onClickHandler}>Activar</button>
            <h1>
                ErrorBoundary {this.props.saludo}
                {
                this.estaActivo()
                }
            </h1>
        </div>
        )
    }
}

export default ErrorBoundary
