import React, { Component } from 'react';

export default class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          pwd1: '',
          pwd2: ''
        }
      }

      handleUserNameChange = e => {
          let userName = e.target.value;
          this.setState({user: userName})
      }
      handlePassword1Change = e => {
          let password = e.target.value;
          this.setState({pwd1: password})
      }
      handlePassword2Change = e => {
        let password = e.target.value;
        this.setState({pwd2: password})
    }
      handleButtonClick = () => {
          if(this.checkPasswords()) {
              this.props.setUser(this.state.user);
              this.props.setPwd(this.state.pwd1);
          }
      }

      checkPasswords () {
          let pwd1 = this.state.pwd1;
          let pwd2 = this.state.pwd2;
          //check that passwords have length and match
          if(pwd1 != '' && pwd1 === pwd2) {
              return true;
          }
          return false;
      }

    render() {

        return (
            <div className="input-body">
                <div className="input-parent">
                    <input className="input-field"
                        type="usr" name="userName" placeholder="Enter username"
                        onChange={this.handleUserNameChange}
                    />

                    <input className="input-field"
                        type="password" name="password1" placeholder="Enter password"
                        onChange={this.handlePassword1Change}
                    /> 

                    <input className="input-field"
                        type="password" name="password2" placeholder="Confirm password"
                        onChange={this.handlePassword2Change}
                    /> 
                    <div className={"alert " + (this.checkPasswords() ? 'valid-pwd' : 'invalid-pwd')}>{this.checkPasswords() ? "Password is valid and matches" : "Password is invalid or does not match"}</div>

                </div>
                 
                <button className="submit-button" onClick={this.handleButtonClick}> Submit </button>
            </div>
        )
    }
}