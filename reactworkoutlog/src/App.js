import React, { Component } from 'react';
import Auth from './auth/Auth';
import NavBar from './home/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Splash from './home/Splash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token }); 
    }
  }

  logout = () => {
    this.setState({
      sessionToken: '',  
    });
    localStorage.clear();
  }  

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash token = {this.state.sessionToken}/>
            
          </Route>
        </Switch >
      )
    } else {
      return (
        <Route path="/auth" >
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }

  }

  render() {
    return (
      <Router>
        <div>
          <NavBar logout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
