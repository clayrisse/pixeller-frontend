import React, { Component } from "react";
import "./Login.css"
import { Link } from "react-router-dom";

import { withAuth } from "./../lib/AuthProvider"

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login( {email, password})
    .then( () => {
        // handle success
        this.setState({ email: "", password: "" })
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div id="formlogin" className="bigform form">
        {/* <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>


        <div id="formlogin" className="bigform form"> */}
          <header className="">
              <img id="logoform" src="images/logo-ironclub.png" />
              <h1 className="titleform">Log In</h1>
          </header>
          {/* {if (errorMessage) {
          <p className="error-message">{this.errorMessage }</p>
          }} */}

          <form onSubmit={this.handleFormSubmit} action="/login" method="post">

              <div className="blockform">

                  <div className="lineform">
                      <div className="labelform">
                          <label for="email-input"> Email </label>
                      </div>
                      <div className="inputform">    
                          <input value={email} onChange={this.handleChange} type="email" name="email" id="email-input" placeholder="e.g., xena@warrior.company" />
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label for="password-input"> Password </label>
                      </div>
                      <div className="inputform">
                          <input value={password} onChange={this.handleChange} type="password" name="password" id="password-input" placeholder="e.g., ••••••••••••" />
                      </div>
                  </div>

                  <button className="btnform">Log In</button>
              </div>
          </form>

          <p>Don't have an account? <Link to="/signup">Create an account.</Link></p>
         
      </div>
    );
  }
}

export default withAuth(Login);
