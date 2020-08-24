import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";


export default class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userSignedUpInfo: []          
        }
  
      }
  
  
    getUserInfoObj = () => {
      axios.get('http://localhost:4000/auth/private')
        .then((response) => {
          this.setState( { userSignedUpInfo: response.data } ) // con axios los datos de respuesta siempre van a ser devueltos dentro de `response.data`
        })
        .catch((err) => console.log(err))
    } 
  
    componentDidMount() {
      this.getUserInfoObj()
    }
    
  //boorrar esto
  
    render() {
      return (
        <div>
  <h1>Private Route</h1>
  
                <p>{this.state.userSignedUpInfo.username} {this.state.userSignedUpInfo.email}</p>
          
                <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"/"}>
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-trash.png"/>
                        <p className="xnavbar-title" >Delete</p>
                      </Link>
                </div>
                
                <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"/"}>
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-editpen.png"/>
                        <p className="xnavbar-title" >Edit</p>
                      </Link>
                </div>
        
        </div>
      )
    }
}
