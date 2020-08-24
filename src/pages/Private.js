import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

class Private extends Component {
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
      
            <div className="btnprofile-cont">
      <form action="/user/edit-profile" method="GET">
        <button className="btnform-edit" type="submit">EDIT</button>
      </form>
      <form action="/user/delete" method="POST">
        <button className="btnform-delete" type="submit">DELETE</button>
      </form>
    </div>
    
    </div>
  )
}
        
      
}

export default Private;
