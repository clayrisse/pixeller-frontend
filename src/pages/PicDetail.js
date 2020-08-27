import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default class PicDetail extends Component {

    constructor(props) {
    super(props)
    this.state = {
        pickedPicId: {}          
    }

    }

    getPicObj = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/pic/detail`, {withCredentials: true})
        .then((response) => {
        this.setState( { pickedPicId: response.data } ) 
        })
        .catch((err) => console.log(err))
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
                {this.state.pickedPicId.price.map((aTag, index) => {
                    return(<p>{`/${aTag}. `}</p>)
                })}
            <p>{this.state.pickedPicId.description}</p>
            <p>{`${this.state.pickedPicId.price} $`}</p>
            <p>{this.state.pickedPicId.maxPrints}</p>
            <Link to={"/user/edit"}> EDIT</Link>
            <form>
                <Link to={"/checkout"}> <button className="btnform" type="submit">Add to Car</button></Link>
            </form>
       </div>
    )}             
}