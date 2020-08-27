import React, { Component } from 'react'
import axios from "axios";
// import { Link } from "react-router-dom";
import { withAuth } from "./../lib/AuthProvider"

class PicDetail extends Component {

    constructor(props) {
    super(props)
    this.state = {
        pickedPicId: {}          
    }

    }

    getPicObj = () => {
        const picId = this.props.match.params.picId
    // axios.get("http://localhost:5000/pic/" + picId, {withCredentials: true})
    axios.get(`${process.env.REACT_APP_API_URL}/pic/${picId}`, {withCredentials: true})
        .then((response) => {
        this.setState( { pickedPicId: response.data } ) 
        })
        .catch((err) => console.log(err))
    } 
    addToCarDot = () => {
        this.props.addToShoppingCar(this.state.pickedPicId)
    }


    componentDidMount() {
    this.getPicObj()
    }

    render() {
    return (
        <div>
            <h1>Picture Detail</h1>
            <img src={this.state.pickedPicId.picture} alt="" />
            <p>{this.state.pickedPicId.title}</p> 
            <p>{this.state.pickedPicId.formats}</p>
            <p>{this.state.pickedPicId.tags}</p>
                {/* {this.state.pickedPicId.price.map((aTag, index) => {
                    return(<p>{`/${aTag}. `}</p>)
                })} */}
            <p>{this.state.pickedPicId.description}</p>
            <p>{`${this.state.pickedPicId.price} $`}</p>
            <p>{this.state.pickedPicId.maxPrints}</p>
            
            
            <button className="btnform" onClick={this.addToCarDot} >Add to Car</button>
            
       </div>
    )}             
}

export default withAuth(PicDetail)