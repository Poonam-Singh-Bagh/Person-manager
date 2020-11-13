import React from 'react'

function InputTask(props) {
    return (
        <div>
            <input className="chng" type="text" onChange = {props.taskChanged} />
        </div>
    )
}

export default InputTask
