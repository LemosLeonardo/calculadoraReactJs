import React from 'react';
import "./Visor.css"


function  Visor (props) {
        return (
            <div className="Visor">
                <p>{props.numVisor}</p>
            </div>
        )
}
export default Visor