import React, { Component } from 'react'

class ErrorBoundary extends Component {

    estaActivo= () => {

    }

    render(){
        return (
        <h1>
            ErrorBoundary{this.props.saludo}
            {
                this.estaActivo()
            }
        </h1>
        )
    }
}