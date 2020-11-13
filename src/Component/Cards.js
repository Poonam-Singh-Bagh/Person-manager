import React from 'react'
import { Button } from 'reactstrap';


function Cards(props) {
    return (
        <div>
            <h2>Person Manager</h2>
            <p>This is my Task {props.name}</p>
            <Button color="danger" onClick={props.onClick}>Toggle Persons</Button>
            {/* <div>{props.change}</div> */}
        </div>
    )
}

export default Cards
