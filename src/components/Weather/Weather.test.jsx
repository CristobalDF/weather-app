import React from 'react'
import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render clear", async () =>{
    //findByRole espera un elemento unico, no un array
    const {findByRole}  = render(<Weather temperature={10} state="clear"/>)
    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})

test("Weather render clouds", async () =>{
    //findByRole espera un elemento unico, no un array
    const {findByRole}  = render(<Weather temperature={10} state="clouds"/>)
    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})