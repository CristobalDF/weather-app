import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    //1.esta constante myRefDiv se llenara con el valor de respuesta de useRef (hook)
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0) //vanta va a ser inicializado en 0.
    //3. En primera randerizacion myRefDiv.current es igual a "null", el valor inicial (1).
    console.log("myRefDiv.current:", myRefDiv.current)



    // La funcion de useEffect se va a "invocar" ante la segunda randerizacion, a ese punto ya va a a contener un valor "myRefDiv.current"
    useEffect(() => {
        console.log("myRefDiv.current (useEffect) :", myRefDiv.current)

        //Sólo pasa una vez por dentro del if
        // vanta === 0, es igual a "vanta === false", o más corto aun: "!vanta"
        if (!vanta){
            //SOLO PASA UNA VEZ
            //acaá vamos a hacer la inicializacion de vanta
            //Activacion del efecto "Clouds"
            setVanta(
                Clouds({
                    THREE,
                    el: myRefDiv.current
                })
            )
            
            console.log("Establezco vanta a un valor diferente de 0")
        }

        //Al salir de la pantalla debemos detener el efecto y desasociar todos los recursos (div + vanta effect)

        return () => {
            //Dentro de esta funcion se va a realizar la tarea de destruir los recursos tomados por "vanta"
            if (vanta){
                vanta.destroy()
                console.log("Libero los recursos.")
            }
        }

    }, [vanta]) //Con esto nos aseguramos de que siga funcionando bien.
    //En el caso de que tuviera maás variables "use"

    return (
        //2.Asociar elemento que se termina randerizando en el dom, Ref asociado al Div
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
