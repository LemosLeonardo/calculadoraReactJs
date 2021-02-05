import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Calculadora from "./views/Calculadora"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Calculadora} />

                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
} 