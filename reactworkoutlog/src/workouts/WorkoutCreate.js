import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class WorkoutCreate extends Component {
    constructor() {
        super();
        this.state = {
            result: '',
            type: '',
            notes: ''
        }
    }
    
    handleChange = (event) => {
        event.target.value
    }

    handleSubmit = (event) => {
        // fetch("http://localhost:3000/api/log", {
        //     method: 'POST',
        //     body: JSON.stringify({user: this.state}),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // })
        // .then(response => response.json())
        
        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                <h3>Log a Workout</h3>
                <br/>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup Row>
                    <Label for="result" sm={2}>Result</Label>
                </FormGroup>
                <FormGroup Row>
                    <Col sm={3}>
                        <Input type="text" name="Result" id="Result" placeholder="Result" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup Row>
                        <Col sm={3}>
                            <Label for="type">Type</Label>
                            <Input type="select" name="type" id="type">
                                <option></option>
                                <option value="Time">Time</option>
                                <option value="Weight">Weight</option>
                                <option value="Distance">Distance</option>
                            </Input>
                        </Col>
                </FormGroup>
                <FormGroup Row>
                    <Label for="notes" sm={2}>Notes</Label>
                </FormGroup>
                <FormGroup Row>
                    <Col sm={3}>
                        <Input type="text" name="notes" id="notes" placeholder="Notes" />
                    </Col>
                </FormGroup>
                <FormGroup Row>
                <Button type="submit">Submit</Button>
                </FormGroup>

            </Form>
            </div>
        );
    }
}

export default WorkoutCreate;