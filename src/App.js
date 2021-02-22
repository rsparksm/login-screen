import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import InputComponent from './InputComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
  }
  setUser = (userName) => {
    this.setState({ user: userName })
  }

  setPwd = (password) => {
    this.setState({ pws: password})
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        
        <div className="app-body">
          <div className="login-message">Please Log In</div>
          <InputComponent setUser={this.setUser} setPwd={this.setPwd}/>
          
        </div>
      </div>
    );
    }
}

export default App;
