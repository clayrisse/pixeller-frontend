import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
// import SearchBar from '../components/SearchBar';

export default class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        allThePicsfromDB: [],
        allThePicsShown: []
      }

    }

  getAllPicsObj = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/pic/list`)
      .then((response) => {
        this.setState( { allThePicsfromDB: response.data, allThePicsShown: response.data } ) // con axios los datos de respuesta siempre van a ser devueltos dentro de `response.data`
      })
      .catch((err) => console.log(err))
  } 

  componentDidMount() {
    this.getAllPicsObj()
  }
  
  render() {
    return (
      <div>
        <img id="logohome" alt="" src="./../../images/logo-pixeller.png" />
        {/* <SearchBar /> */}

        {this.state.allThePicsShown.map((aPic, index) => {
          return (
           
              <Link to={`/pic/detail/${aPic._id}`} className="" key={aPic._id}>
              <br/>
              <img src={aPic.picture} width="360px"  alt=""  />
              <p>{aPic.title} {aPic.artist}</p>
              <br/>
              </Link>
          )
        })}

      
      </div>
    )
  }
}
