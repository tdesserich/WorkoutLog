import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            passwordhash: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/create", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken)) 
        
        event.preventDefault()
    }
    
    render(){
        return(
            <div>
                <h1 style={{textAlign: 'left'}}>Signup</h1>
                <h6 style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat.</h6>
                <Form onSubmit = {this.handleSubmit}>
                    <br/>
                    <FormGroup style={{textAlign: 'left'}}>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="Enter username" onChange={this.handleChange}/>
                     </FormGroup> 
                     <FormGroup style={{textAlign: 'left'}}>
                        <Label for="password">Password</Label>
                        <Input name="passwordhash" type="password" placeholder="Enter password" onChange={this.handleChange}/>
                     </FormGroup> 
                     <Button type="submit">Submit</Button>   
                </Form>
            </div>   
        )
    }
}

export default Signup