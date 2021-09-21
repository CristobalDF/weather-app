import React from 'react'
import { useHistory } from 'react-router'
import { Paper} from '@material-ui/core'
import AppFrame from './../components/AppFrame'
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
        <AppFrame>
            <Paper elevation={3} style={{marginTop:"2em"}}>
                <CityList
                    cities={cities}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage