import React from 'react'
import { useHistory } from 'react-router'
import CityList from './../components/CityList'

const cities = [
    { city: "Santiago", country: "Chile"},
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de México", country: "México"},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push("/city")
    }

    return  (
        <div>
            <h2>Lista de Ciudades</h2>
            <CityList 
                cities={cities} 
                onClickCity = {onClickHandler} />
        </div>
    )
}

export default MainPage