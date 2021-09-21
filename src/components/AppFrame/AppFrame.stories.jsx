import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem blanditiis magnam illo accusantium esse quibusdam sit sed ducimus, obcaecati quas dolores facere quaerat fugiat assumenda incidunt, illum temporibus excepturi?
        </AppFrame>
    </Router>
)