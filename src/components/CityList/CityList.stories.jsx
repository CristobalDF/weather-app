import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Madrid", country: "España"},
    {city: "Ciudad de México", country: "México"},
]

export const CityListExample = () => <CityList cities={cities} />