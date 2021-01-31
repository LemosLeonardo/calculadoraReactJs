import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Calculadora from "./views/Calculadora"
import Sobre from "./views/Sobre"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Calculadora} />
                <Route exact path="/sobre" component={Sobre} />

                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
} 