import React from 'react'
import 'typeface-roboto'
import Cityinfo from './Cityinfo'

export default {
    title: "Cityinfo",
    component: Cityinfo
}

export const CityExample = () => <Cityinfo city={"Santiago"} country={"Chile"}></Cityinfo>
