import React from 'react';
import './Botoes.css'

function Botoes(props) {
    return <span className="Botoes">
        <button className={props.especial ? "operador" : ""} value={props.valor}> {props.valor} </button>
    </span>
    
}

export default Botoes