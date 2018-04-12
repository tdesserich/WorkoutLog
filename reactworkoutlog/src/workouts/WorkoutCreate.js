import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class WorkoutCreate extends Component {
    constructor() {
        super();
        this.state = {
            result: '',
            def: '',
            description: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        console.log(this.state);
        fetch("http://localhost:3000/api/log/", {
            method: 'POST',
            body: JSON.stringify({log: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(response => response.json())
        .then(workoutData => console.log(workoutData));
        

        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                <h3>Log a Workout</h3>
                <br/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="result" sm={2}>Result</Label>
                        <Input type="text" name="result" id="result" placeholder="Result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                            <Label for="def">Type</Label>
                            <Input type="select" name="def" id="def" onChange={this.handleChange}>
                                <option></option>
                                <option value="Time">Time</option>
                                <option value="Weight">Weight</option>
                                <option value="Distance">Distance</option>
                            </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description" sm={2}>Notes</Label>
                        <Input type="text" name="description" id="description" placeholder="Enter description" onChange={this.handleChange}/>
                    </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            </div>
        );
    }
}

export default WorkoutCreate;