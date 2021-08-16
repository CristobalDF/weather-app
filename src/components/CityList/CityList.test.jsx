import React from 'react'
import {render} from '@testing-library/react'
import CityList from './CityList' //Componente a Testear, SUT: Subjet Under Test

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Madrid", country: "España"},
    {city: "Ciudad de México", country: "México"},
]

test("CityList renders", async () => {
    //AAA Arrange Act Assert

    const {findAllByRole} = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(5)
})