import React from 'react'

function Input(props) {
    return (
        <div>
            <input className="chng" type="text" onChange = {props.changed} />
        </div>
    )
}

export default Input
