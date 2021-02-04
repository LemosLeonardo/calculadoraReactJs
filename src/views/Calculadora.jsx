import React, { Component } from 'react';
import Visor from "../Components/Visor"
import Botoes from "../Components/Botoes"
import "./Calculadora.css"


class Calculadora extends Component {

    render() {
        return (
            <div className="Calculadora">
                <div className="center">
                    <h1>Calculadora Simples</h1>
                </div>
                <div className="Corpo">
                    <div>
                        <Visor numVisor="0" />
                        <Botoes especial="duplo" valor="AC"/>
                        <Botoes valor="7"/>
                        <Botoes valor="8"/>
                        <Botoes valor="9"/>
                        <Botoes especial="operador" valor="/"/>
                        <Botoes valor="4"/>
                        <Botoes valor="5"/>
                        <Botoes valor="6"/>
                        <Botoes especial="operador" valor="x"/>
                        <Botoes valor="1"/>
                        <Botoes valor="2"/>
                        <Botoes valor="3"/>
                        <Botoes especial="operador" valor="-"/>
                        <Botoes especial="operador" valor="="/>
                        <Botoes valor="0"/>
                        <Botoes valor=","/>
                        <Botoes especial="operador" valor="+"/>
                    </div>
                </div>
                <div className="center">
                    <a href="/sobre">Sobre</a>
                </div>

            </div>
        )
    }
}
export default Calculadora