import React, { Component } from 'react';
import './App.css';
import NavBar from './home/NavBar';
import Auth from './auth/Auth';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: ''
    }
  }

  setSessionState = (token) => {
    this.setState({sessionToken: token})
    localStorage.setItem('token', token);
  }
  
  
    render() {
    return (
      <div className="App">
        <NavBar/>
        <Auth setToken={this.setSessionState}/>
      </div>
    );
  }
}

export default App;
