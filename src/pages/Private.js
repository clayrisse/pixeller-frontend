import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/AuthProvider"
import editpen from "./../icons/icon-editpen.png"
import trash from "./../icons/icon-trash.png"

class Private extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSignedUpInfo: {sellingPic: [] }    
    

    }
  }

  getUserInfoObj = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/user`, {withCredentials: true})
      .then((response) => {
        this.setState( { userSignedUpInfo: response.data } ) 
      })
      .catch((err) => console.log(err))
  } 

  handleDeletePic = (pictureId) => {
    axios
        .delete(`${process.env.REACT_APP_API_URL}/pic/${pictureId}`, {withCredentials: true})
        .then( () => {
          this.getUserInfoObj()
        })          
  
      .catch(function (error) {
          // handle error
          console.log(error);
      })
  }

  componentDidMount() {
    this.getUserInfoObj()
  }

  render() {
    return (
      <div id="formlogin" className="bigform form">
       
          <header className="">
              <img id="logoform" alt="" src="./../../images/logo-pixeller.png" />
              <h1 className="titleform">User Profile</h1>
          </header>
          {/* {if (errorMessage) {
          <p className="error-message">{this.errorMessage }</p>
          }} */}

          <section onSubmit={this.handleFormSubmit} >

              <div className="blockform">

                  <div className="lineform">
                      <div className="labelform">
                          <label for="email-input"> Name </label>
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.username}</p>
                         <hr></hr>
                      </div>
                  </div>

                  <div className="lineform">
                      <div className="labelform">
                          <label for="email-input"> Email </label> 
                          
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.email}</p>
                         <hr></hr>
                      </div>
                  </div>


                  {this.state.userSignedUpInfo.seller ? (
                  <>
                  { this.state.userSignedUpInfo.lastName &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="lastName-input"> Last Name </label> 
                          
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.lastName}</p>
                         <hr></hr>
                      </div>
                  </div> 
                  }

                  { this.state.userSignedUpInfo.address &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="address-input"> Address </label> 
                          
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.address}</p>
                         <hr></hr>
                      </div>
                  </div>
                  }
                  
                  { this.state.userSignedUpInfo.phoneNum &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="phoneNum-input"> Phone Number </label>                           
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.phoneNum}</p>
                         <hr></hr>
                      </div>
                  </div>
                  }

                  { this.state.userSignedUpInfo.sellerArtistName &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="sellerArtistName-input"> Artis Name </label>                           
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.sellerArtistName}</p>
                         <hr></hr>
                      </div>
                  </div>
                  }

                  { this.state.userSignedUpInfo.sellerInfo &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="sellerInfo-input"> Artis Statemen </label>                           
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.sellerInfo}</p>
                         <hr></hr>
                      </div>
                  </div>
                  }

                  { this.state.userSignedUpInfo.sellerContact &&
                  <div className="lineform">
                      <div className="labelform">
                          <label for="sellerContact-input"> Artis Statemen </label>                           
                      </div>
                      <div className="inputform">    
                         <p>{this.state.userSignedUpInfo.sellerContact}</p>
                         <hr></hr>
                      </div>
                  </div>
                  }

                  <br/><br/><br/><br/><br/>
                  <header className="">                
                    <h1 className="titleform">My Selling Pictures</h1>
                  </header>
                  <br/>
                   </> 
                  ) : (
                  <>
                  <Link  to={"/user/edit"} ><button className="btneditform">EDIT</button> </Link>  
              
                  </>
                  )}
                  
              </div>
          
        
                      
              



            
            { this.state.userSignedUpInfo.sellingPic &&
              this.state.userSignedUpInfo.sellingPic.map((eachPic, index) => {
          return (
              <div>

              <Link to={`/${eachPic._id}`} className="">
                <p>{eachPic.title} {eachPic.artistInfo}</p>
                </Link>
                <img src={eachPic.picture} width="100px" alt="" />
                <button onClick={()=>this.handleDeletePic(eachPic._id)}><img src={trash} height="30px" alt="trash"/></button> 
                <Link to={`/pic/edit/${eachPic._id}`} ><img src={editpen} height="30px" alt="editpen"/></Link> 

                </div>
              
          )
        })}
        </section>
      </div>
  )}     
}

export default  withAuth(Private);

{/* <img src="./../../public/icons/icon-trash.png"/>
<img src="./../../public/icons/icon-editpen.png"/> */}