import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convert from 'convert-units'
import { Alert } from '@material-ui/lab'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

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
    const [error, setError] = useState(null)

    useEffect(() => {

    // forma 1
    //     const setWeather  = (city, country, countryCode) => {
    //        const appid = "0443061d390902238e43d4cf886f060f"
    //        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
    //         axios
    //         .get(url)
    //         .then(response =>{
    //             const {data} = response
    //             const temperature = Number(convert(data.main.temp).from("K").to("C").toFixed(1))
    //             const state = data.weather[0].main.toLowerCase()

    //             const propName = `${city}-${country}` //EJ: [Ciudad de México-México]
    //             const propValue = { temperature, state} // EJ: temperature: 10, state: sunny

    //             setAllWeather( allWeather => ({...allWeather, [propName]: propValue }))
    //         })
    //         .catch( error => {
    //             if (error.response){ //Errores que nos responde el server
    //                 setError("Ha ocurrido un error en el servidor del clima")
    //             } else if (error.request){//Errores que suceden por no llegar al server
    //                 setError("Server inaccesible")
    //             } else { //Errores inprevistos
    //                 setError("Error al cargar los datos")
    //             }
    //          })
    // }
    
        const setWeather  = async (city, countryCode) => {
        const appid = "0443061d390902238e43d4cf886f060f"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
        try {
            const response = await axios.get(url)

            const {data} = response
            const temperature = Number(convert(data.main.temp).from("K").to("C").toFixed(1))
            const state = data.weather[0].main.toLowerCase()
            const propName = getCityCode(city, countryCode)
            const propValue = { temperature, state} // EJ: temperature: 10, state: sunny
            setAllWeather( allWeather => ({...allWeather, [propName]: propValue }))
        } catch (error) {
            if (error.response){ //Errores que nos responde el server
                setError("Ha ocurrido un error en el servidor del clima")
            } else if (error.request){//Errores que suceden por no llegar al server
                setError("Server inaccesible")
            } else { //Errores inprevistos
                setError("Error al cargar los datos")
            }
        }
    }
        cities.forEach(({city, countryCode}) => {
            setWeather(city, countryCode)
        });
        
    }, [cities])

    return (
        <>
            {
                error && <Alert onClose = {() => setError(null)} severity='error'>{error}</Alert>
            }   
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }           
            </List>
        </>

    )
}


CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        }).isRequired
    ),
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
