import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

//li: es un item en html que tiene el role "listitem" para efectos de TDD

//renderCityAndCountry(onClickCity) se va a convertir en una funcion que retorna otra funcion.
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    //const { temperature, state} = weather
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
                                {weather?
                                    (<Weather 
                                temperature={weather.temperature} 
                                state={weather.state}/>) : ("No hay datos")
                                }
                            </Grid>
                    </Grid>
            </ListItem>
        )
}

//cities: es un array, y en cada item tiene ciudad y country.
const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {

        const setWeather  = (city, country) => {
           const appid = "0443061d390902238e43d4cf886f060f"
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            axios
            .get(url)
            .then(response =>{
                const {data} = response
                const temperature = data.main.temp
                const state = "sunny"

                const propName = `${city}-${country}` //EJ: [Ciudad de México-México]
                const propValue = { temperature, state} // EJ: temperature: 10, state: sunny

                //Al hacer el destructuring de esta manera estamos desensamblar allWeather, 
                /* 
                allWeather primera pasada:
                    [Buenos Aires-Argentina]: { temperature: 10, state: "sunny"},
                allWeather segunda pasada:
                    [Buenos Aires-Argentina]: { temperature: 10, state: "sunny"},
                    [Santiago-Chile]: { temperature: 13, state: "sunny"},
                */
                setAllWeather({...allWeather, [propName]: propValue })
            })
        }
        cities.forEach(({city, country}) => {
            setWeather(city, country)
        });
        
    }, [cities, allWeather])

    //const weather = {temperature: 10, state: "sunny"}
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired
    ),
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
