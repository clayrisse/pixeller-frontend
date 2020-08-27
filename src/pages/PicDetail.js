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
         <img alt="" width="300px "src="./../../images/logo-pixeller.png" />
        
            {/* <h1>Picture Detail</h1> */}
            <br/><br/>
            <img src={this.state.pickedPicId.picture} width="500xp" alt="" />
            <br/>
            <div id="formedit" className="bigform form">
            <div className="blockform">


                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Work Title </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.title}</p> 
                    </div>
                </div>

                <hr/>

                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Format </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.formats}</p> 
                    </div>
                </div>

                <hr/>

                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Tags </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.tags}</p> 
                    </div>
                </div>

                <hr/>

                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Description </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.description}</p> 
                    </div>
                </div>

                <hr/>

                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Price </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.price}$</p> 
                    </div>
                </div>

                <hr/>

                <div className="lineform">
                    <div className="labelform">            
                        <label htmlFor="username-input"> Number of Prints </label>
                    </div>
                    <div className="inputform">             
                    <p>{this.state.pickedPicId.maxPrints}</p> 
                    </div>
                </div>

                

            
                <hr/>
            
            <button className="btnform" onClick={this.addToCarDot} >Add to Car</button>
            </div>
            </div>
       </div>
    )}             
}

export default withAuth(PicDetail)