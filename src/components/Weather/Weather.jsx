import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { WiAlien, WiCloud,
        WiDayCloudy,
        WiDayFog,
        WiDaySunny,
        WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

//JS permite acceder a las propiedades de un elemento mediante stateByName.sunny o stateByName["sunny"] 
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    alien: WiAlien
}

//No es completamente aislar el icono en otro componente para randerizarlo de manera independiente, esto se puede hacer con una funcion aparte. Idealmente que comience con "render"
const renderState = state => {
    const Icon = stateByName[state]
    return <Icon />
}





const Weather = ({temperature, state}) => {
    return (
        <>
            <IconContext.Provider value={{size: '5em'}}>
                { renderState(state) }
            </IconContext.Provider>
            <Typography display="inline" variant="h3" >{temperature}</Typography>
        </>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
}

export default Weather


//Antes de simplificar
// const renderState = state => {
//     switch (state) {
//         case "cloud": {
//             const Icon = stateByName["cloud"]
//             return <Icon />
//         }
//         case "cloudy": {
//             const Icon = stateByName["cloudy"]
//             return <Icon />
//         }
//         case "fog": {
//             const Icon = stateByName["fog"]
//             return <Icon />
//         }
//         case "sunny": {
//             const Icon = stateByName["sunny"]
//             return <Icon />
//         }
//         case "rain": {
//             const Icon = stateByName["rain"]
//             return <Icon />
//         }
//         default: {
//             const Icon = stateByName["alien"]
//             return <Icon />
//         }

//     }
// }

//otra opcion para incluir un default
// const renderState = state => {
//     //Se utiliza operador ternario para cuando el state sea undefined darle como propiedad "alien" de otra forma se retornara el state segun corresponda.
//     let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["alien"]
//     return <Icon />
// }
