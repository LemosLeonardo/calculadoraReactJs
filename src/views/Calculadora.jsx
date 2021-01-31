import React, { Component } from 'react';
import Corpo from "../Components/Corpo"
import "./Calculadora.css"

class Calculadora extends Component {
    render() {
        return (
            <div className="Calculadora">
                <div className="center">
                    <h1>Calculadora</h1>
                </div>
                <Corpo />
                <div className="center">
                    <a href="/sobre">Sobre</a>
                </div>

            </div>
        )
    }
}
export default Calculadora