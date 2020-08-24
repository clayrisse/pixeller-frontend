import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withAuth } from "./../lib/AuthProvider"



class Signup extends Component {
  state = { username: "", email: "", password: "" };
  

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    
    // // axios
    // .post('http://localhost:4000/auth/signup', {username, email, password })

    this.props.signup( {username, email, password})
    .then( () => {
        // handle success
        this.setState({ username: "", email: "", password: "" })
        
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
    const { email, password, username } = this.state;

    return (
      <div id="formedit" className="bigform form">
              
    
        <header className="">
            <img id="logoform" src="images/logo-ironclub.png" />
            <h1 className="titleform">Sign Up</h1>
        </header>

        {/* {{#if errorMessage}}
        <p className="error-message">
            {{ errorMessage }}
        </p>
        {{/if}} */}

        <form  onSubmit={this.handleFormSubmit}>
            
            <div className="blockform">

                {/* <div className="lineform">
                    <div className="labelform">                
                        <label for=''>Profile picture</label>
                    </div>
                    <div className="inputform">             
                        <input type="file" name="profilepic" id="profilepic-input"/>
                    </div>
                </div> */}

                {/* <div className="lineform">
                    <div className="labelform">            
                        <label for="name-input"> Name </label>
                    </div>
                    <div className="inputform">             
                        <input value={username} onChange={this.handleChange} type="text" name="name" id="name-input" placeholder="e.g., Diana Prince" required />
                    </div>
                </div> */}

                <div className="lineform">
                    <div className="labelform">            
                        <label for="username-input"> Username </label>
                    </div>
                    <div className="inputform">             
                        <input value={username} onChange={this.handleChange} type="text" name="username" id="username-input" placeholder="e.g., Pepito" required />
                    </div>
                </div>
                

                <div className="lineform">
                    <div className="labelform">            
                        <label for="email-input"> Email </label>
                    </div>
                    <div className="inputform">             
                        <input value={email} onChange={this.handleChange} type="email" name="email" id="email-input" placeholder="e.g., diana@themyscira.agency" required />
                    </div>
                </div>

                <div className="lineform">
                    <div className="labelform">   
                        <label for="password-input"> Password </label>
                    </div>
                    <div className="inputform">             
                        <input value={password} onChange={this.handleChange} type="password" name="password" id="password-input" placeholder="e.g., ••••••••••••" required />
                    </div>
                </div>

                <button className="btnform"> Create New Account </button>

            </div>
        </form>

        <p>Already have an account? <Link to={"/login"}> Login</Link></p>
    </div>






    );
  }
}

export default withAuth(Signup);
