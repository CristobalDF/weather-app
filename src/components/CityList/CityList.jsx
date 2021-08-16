import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../Cityinfo'
import Weather from './../Weather'

//li: es un item en html que tiene el role "listitem" para efectos de TDD
const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
            <li key={city}>
                <CityInfo city={city} country={country} />
                <Weather temperature={10} state="sunny"/>
            </li>
        )
}

//cities: es un array, y en cada item tiene ciudad y country.
const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
