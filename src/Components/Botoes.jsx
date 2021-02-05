import React from 'react';
import './Botoes.css'

function Botoes(props) {
    return <span className="Botoes">
        <button className={props.especial} value={props.valor} onClick={e => props.click && props.click(props.valor)}> {props.valor} </button>
    </span>
    
}

export default Botoes