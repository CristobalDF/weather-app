import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

//li: es un item en html que tiene el role "listitem" para efectos de TDD

//renderCityAndCountry(onClickCity) se va a convertir en una funcion que retorna otra funcion.
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
            <ListItem
                    button
                    key={city}
                    onClick={eventOnClickCity}>
                    <Grid container 
                        justifyContent="center"
                        alignItems="center">
                            <Grid item
                                md = {8}
                                xs = {12}>
                                <CityInfo city={city} country={country} />
                            </Grid>
                            <Grid item
                                md = {4}
                                xs = {12}>
                                <Weather temperature={10} state="sunny"/>
                            </Grid>
                    </Grid>
            </ListItem>
        )
}

//cities: es un array, y en cada item tiene ciudad y country.
const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
