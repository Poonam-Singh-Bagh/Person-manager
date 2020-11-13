import React, { Component } from 'react'
import { CardBody,Button } from 'reactstrap';
import Cards from './Cards';
import Input from './Input';
import InputTask from './InputTask';


class SwitchCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details: [
                { name: "Poonam", studying: "React", task: "Toggle app", id: 1 },
                { name: "Rabiya", studying: "JavaScript", task: "API Request", id: 2 },
                { name: "Rinki", studying: "HTML/CSS", task: "Web page", id: 3 }
            ],
            showCard: false
        }
    }

    onClickHandler = () => {
        const isVisible = this.state.showCard
        this.setState({
            showCard: !isVisible
        });
    }

    deleteHandler = (index, e) => {
        const details = Object.assign([],this.state.details);
        details.splice(index, 1);
        this.setState({details:details});
    }

    // nameChangeHandler = (event) => {    // Object.assign use to copy the state
    //     this.setState({
    //         // name: event.target.value     
    //         details: [
    //             { name: event.target.value, studying: "React", id: 1 },
    //             { name: "Rabiya", studying: "JavaScript", id: 2 },
    //             { name: "Rinki", studying: "HTML/CSS", id: 3 }
    //         ]
    //     })
    // }

    nameChangeHandler = (id, event) => {
        const index = this.state.details.findIndex((detail) => {
            return detail.id == id
        });
        const detail = Object.assign({},this.state.details[index]);
        detail.name = event.target.value;
        const details = Object.assign([],this.state.details);
        details[index] = detail;
        this.setState({details:details});
    }

    taskChangeHandler = (id,event) => {
        const index = this.state.details.findIndex((detail) => {
            return detail.id == id
        });
        const detail = Object.assign({},this.state.details[index]);
        detail.task = event.target.value;
        const details = Object.assign([],this.state.details);
        details[index] = detail;
        this.setState({details:details});
    }

    render() {
        const showCard = this.state.showCard
        const details = this.state.details
        return (
            <div className="container">
                <Cards onClick={this.onClickHandler} /> 
                {this.state.details.map((detail, index) => {
                    return (
                        <div className="cardStyle">
                            {showCard ?
                            (<div>
                                <CardBody className="card">
                                <p>Name : {detail.name}</p>
                                <p>Learning : {detail.studying}</p>
                                <p>Task : {detail.task}</p>
                                <p>ID : {detail.id}</p> 
                                <Input changed={this.nameChangeHandler.bind(this, detail.id)}/>
                                <InputTask taskChanged={this.taskChangeHandler.bind(this, detail.id)}/>
                                <Button className="del" onClick = {this.deleteHandler.bind(this, index)} >Delete</Button>
                                </CardBody>
                            </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SwitchCard