import React, { Component } from "react";
import "./Login.css"
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import "./list.css"
import { Link } from "react-router-dom";


class UserEdit extends Component {
  state = { 
      email: "", 
      password: "" , 
      username: "", 
      seller: false, 
      lastName: "", 
      address: "", 
      phoneNum:"",  
      sellerAvatar:"", 
      sellingPic:"", 
      sellerArtistName: "", 
      sellerInfo:"", 
      sellerContact:""
    };

    getUserInfoObj = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/user`, {withCredentials: true})
          .then((response) => {
            this.setState( {...response.data } )
          })
          .catch((err) => console.log(err))
    } 

    handleFormSubmit = event => {
        event.preventDefault();
        const { 
            email, 
            password,  
            username, 
            seller, 
            lastName, 
            address, 
            phoneNum, 
            sellerAvatar,  
            sellerArtistName,
            sellerInfo, 
            sellerContact 
        } = this.state;

        const user = {email, password, username, seller, lastName, address, phoneNum, sellerAvatar, sellerArtistName, sellerInfo, sellerContact }
           
        axios.put(`${process.env.REACT_APP_API_URL}/user`, user, {withCredentials: true})
        .then( () => {
            this.getUserInfoObj()
            this.props.me()  
            this.props.history.push("/user/profile");          
        })
        .catch(function (error) {
            console.log(error);
        })

    };


    handleDelete = () => {
        
        axios //que pacha aca
        .delete(`${process.env.REACT_APP_API_URL}/user`, {withCredentials: true})
        .then (() => {
            this.props.destroyUser();
            this.props.history.push("/");
        })
        .catch (err => console.log(err))
    }
  

    handleChangecCheckbox = event => {
        const { name, checked } = event.target;
        this.setState({ [name]: checked });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    componentDidMount(){
        this.getUserInfoObj();
    }

    render() {
        const { email, password, username, seller, lastName, address, phoneNum, sellerAvatar, sellerArtistName, sellerInfo, sellerContact } = this.state;

    return (
      <div id="formlogin" className="bigform form">
       
          <header className="">
              <img id="logoform" alt="" src="./../../images/logo-pixeller.png" />
              <h1 className="titleform">Edit Profile</h1>
          </header>
          {/* {if (errorMessage) {
          <p className="error-message">{this.errorMessage }</p>
          }} */}

          <form onSubmit={this.handleFormSubmit} >

              <div className="blockform">


                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Username </label>
                    </div>
                    <div className="inputform">             
                        <input value={username} onChange={this.handleChange} type="text" name="username" id="username-input"  />
                    </div>
                </div>

                <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="email-input"> Email </label>
                      </div>
                      <div className="inputform">    
                          <input value={email} onChange={this.handleChange} type="email" name="email" id="email-input" placeholder={this.props.email}/>
                      </div>
                  </div>

                

                  <div className="lineform">
                    <div className="labelform">   
                        <label htmlFor="password-input"> Want to be a selling pgotographer?</label>
                    </div>
                    <div className="inputform">             
                        <input type="checkbox" checked={seller} id="seller-input" name="seller" onChange={this.handleChangecCheckbox} />
                    </div>                 
                   
                </div>

              {seller ? (
                    <>

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="lastname-input"> Last Name </label>
                      </div>
                      <div className="inputform">    
                          <input value={lastName} onChange={this.handleChange} type="text" name="lastName" id="lastname-input" placeholder={this.props.lastName} />
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="address-input"> Address </label>
                      </div>
                      <div className="inputform">
                          <input value={address} onChange={this.handleChange} type="text" name="address" id="address-input" placeholder={this.props.address} />
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="phonenum-input"> Phone Number </label>
                      </div>
                      <div className="inputform">
                          <input value={phoneNum} onChange={this.handleChange} type="number" name="phoneNum" id="phonenum-input" placeholder={this.props.phoneNum} />
                      </div>
                  </div>
{/* 
                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="sellerAvatar-input"> Profile picture </label>
                      </div>
                      <div className="inputform">
                          <input value={sellerAvatar} onChange={this.handleChange} type="" name="sellerAvatar" id="sellerAvatar-input" placeholder={this.props.sellerAvatar} />
                      </div>
                  </div> */}

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="sellerArtistName-input"> Artist Name </label>
                      </div>
                      <div className="inputform">
                          <input value={sellerArtistName} onChange={this.handleChange} type="text" name="sellerArtistName" id="sellerArtistName-input" placeholder={this.props.sellerArtistName} />
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="sellerInfo-input"> Artist Statement </label>
                      </div>
                      <div className="inputform">
                          <input value={sellerInfo} onChange={this.handleChange} type="text" name="sellerInfo" id="sellerInfo-input" placeholder={this.props.sellerInfo} />
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label htmlFor="sellerContact-input"> Artist Contact </label>
                      </div>
                      <div className="inputform">
                          <input value={sellerContact} onChange={this.handleChange} type="text" name="sellerContact" id="sellerContact-input" placeholder={this.props.sellerContact} />
                      </div>
                  </div>

                    </>
                  ) : null }
                
                 
                 <button className="btnform" type="submit">Save Changes</button>
                 <button className="btnform" onClick={() => this.handleDelete()}>Delete User</button> 
                 
              </div>
            </form>

            
      </div>
    );
  }
}


export default withAuth(UserEdit)