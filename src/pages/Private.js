import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/AuthProvider"

class Private extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSignedUpInfo: {sellingPic: [] }    
    

    }
  }

  getUserInfoObj = () => {
    axios.get(`${process.env.REACT_APP_API_URI}/user`, {withCredentials: true})
      .then((response) => {
        this.setState( { userSignedUpInfo: response.data } ) 
      })
      .catch((err) => console.log(err))
  } 

  handleDeletePic = () => {
    
  }

  handleEditPic = () => {
    //redirects to edit page
  }

  componentDidMount() {
    this.getUserInfoObj()
  }

  render() {
    return (
      <div>
        <h1>Private Route</h1>
            
            <p>{this.state.userSignedUpInfo.username} {this.state.userSignedUpInfo.email}</p>
            <Link to={"/user/edit"}>EDIT</Link>   
            
            { this.state.userSignedUpInfo.sellingPic &&
              this.state.userSignedUpInfo.sellingPic.map((eachPic, index) => {
          return (
              <Link to={`/${eachPic._id}`} className="">
                <p>{eachPic.title} {eachPic.artistInfo}</p>
                <img src={eachPic.picture} alt="" />
                <button onClick={()=>this.handleDeletePic()}>Delete</button> 
                <button onClick={()=>this.handleEditPic()}>Edit</button> 

              </Link>
              
          )
        })}
      </div>
  )}     
}

export default  withAuth(Private);

{/* <img src="./../../public/icons/icon-trash.png"/>
<img src="./../../public/icons/icon-editpen.png"/> */}