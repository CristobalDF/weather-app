import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: subjet under testing



test("CityInfo render", async () =>{
    //Estándar AAA
    //1. Arrange (Organizar)
    //2. Act (Actuar Ejecutar)
    //3. Assert (Confirmar que se retornara lo que esperabamos)

    const city = "Santiago"
    const country = "Chile"

    //Render:randeriza el componente y retorna una serie de funciones de utilidad.

    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)//Encontrar todos los componentes que tengan determinado rol. findAllByRole

    //Assert
    //findAllByRole nos va a buscar en este caso todos los componentes que sean heading (h1, h2, h3)
    const cityAndCountryComponent = await findAllByRole("heading")

    //¿Cuando el test va a ser correcto?
    //Cuando el primer elemento (heading) se encuentre la ciudad "Santiago"
    // y cuando en el segundo elemento se encuentre el pais "Chile"

    //toHaveTextContent comparador o "matcher", mas en https://jestjs.io/docs/next/expect
    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen (expect), el test esta "OK"
})