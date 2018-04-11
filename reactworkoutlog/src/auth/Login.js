import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken) 
        
        event.preventDefault()
    }
    
    render(){
        return(
            <div>
                <h1>Login</h1>
                <Form >
                    <FormGroup onSubmit = {this.handleSubmit}>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="Enter username" onChange={this.handleChange}/>
                     </FormGroup> 
                     <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="password" placeholder="Enter password" onChange={this.handleChange}/>
                     </FormGroup> 
                     <Button type="submit">Submit</Button>   
                </Form>
            </div>    
        )
    }
}

export default Login

