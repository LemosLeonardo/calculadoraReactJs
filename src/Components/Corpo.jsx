import React, { Component } from 'react';
import Visor from "./Visor"
import Botoes from "./Botoes"
import "./Corpo.css"


class Corpo extends Component {
    render(){
        return (
            <div className="Corpo">
                <Visor />
                <Botoes especial={true} valor="AC" />
                <Botoes especial={true} valor="C" />
                <Botoes especial={true} valor="/" />
                <Botoes especial={true} valor="x" />
                <Botoes valor="9" />
                <Botoes valor="8" />
                <Botoes valor="7" />
                <Botoes especial={true} valor="-" />
                <Botoes valor="6" />
                <Botoes valor="5" />
                <Botoes valor="4" />
                <Botoes especial={true} valor="+" />
                <Botoes valor="1" />
                <Botoes valor="2" />
                <Botoes valor="3" />
                <Botoes especial={true} valor="=" />
            </div>
        )
    }
}

export default Corpo