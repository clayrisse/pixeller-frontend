import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import axios from "axios";
import { withAuth } from "./../lib/AuthProvider"

class PicCreate extends Component {

    state = { 
        picture: "", 
        title: "", 
        formats: "3x5", 
        tags: "", 
        description: "", 
        price: "", 
        maxPrints: "", 
        date: "",
        artistInfo: ""
    };
  

    handleFormSubmit = event => {
      event.preventDefault();
      const { picture, title, formats, tags, description, price, maxPrints, artistInfo, date } = this.state;
        
        axios
        .post(`${process.env.REACT_APP_API_URL}/pic/create`, {picture, title, formats, tags, description, price, maxPrints, artistInfo, date}, {withCredentials: true})
        .then( () => {this.props.history.push("/") })

          
  
      .catch(function (error) {
          // handle error
          console.log(error);
      })
  
    };
  
    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    fileOnchange = (event) => {
        //Consigue el archivo del form
        const file = event.target.files[0];
        //para enviar el objeto y añadir la imagen
        const uploadData = new FormData();
        uploadData.append("photo", file);
        axios
          .post(`${process.env.REACT_APP_API_URL}/pic/upload`, uploadData, {
            withCredentials: true,
          })
          .then((response) => {
            this.setState({
              picture: response.data.secure_url,
              disable: false,

            });
          })
          .catch((error) => console.log(error));
      };
    

    render() { //picture,

        const { title, formats, tags, description, artistInfo, price, maxPrints} = this.state;

        return (
                
            <div id="formedit" className="bigform form">
    
                <header className="">
                    <img id="logoform" alt="" src="./../../images/logo-pixeller.png" />
                    <h1 className="titleform">Create a Picture</h1>
                </header>

                <form  onSubmit={this.handleFormSubmit}>
                    
                    <div className="blockform">


                        <div className="lineform">
                            <div className="labelform">            
                                <label htmlFor="picture-input"> Picture </label>
                            </div>
                            <div className="inputform"> 
                                <img src={this.state.picture} width="250px"  alt=""  />       
                                <input onChange={this.fileOnchange} type="file"  id="picture-input" placeholder="e.g., Pepito" />
                            </div>
                        </div>
                        
                        <div className="lineform">
                            <div className="labelform">            
                                <label htmlFor="artistInfo-input"> Artist Name </label>
                            </div>
                            <div className="inputform">             
                                <input value={artistInfo} onChange={this.handleChange} type="text" name="artistInfo" id="artistInfo-input" placeholder="e.g., diana@themyscira.agency"/>
                            </div>
                        </div>

                        <div className="lineform">
                            <div className="labelform">            
                                <label htmlFor="title-input"> Title </label>
                            </div>
                            <div className="inputform">             
                                <input value={title} onChange={this.handleChange} type="text" name="title" id="title-input" placeholder="e.g., diana@themyscira.agency" required />
                            </div>
                        </div>

                         <div className="lineform">
                            <div className="labelform">   
                                <label htmlFor="formats-input"> Formats </label>
                            </div>
                            <div className="inputform">             
                                <select value={formats} onChange={this.handleChange} id="formats-input" name="formats" >
                                    <option value="3x5">3x5</option>
                                    <option value="2x1">2x1</option>
                                    <option value="2x3">2x3</option>
                                </select>                    
                            </div>
                        </div>

                        <div className="lineform">
                            <div className="labelform">   
                                <label htmlFor="tags-input"> Tags </label>
                            </div>
                            <div className="inputform">             
                                <input value={tags} onChange={this.handleChange} type="text" name="tags" id="tags-input" placeholder="e.g., ••••••••••••" required />
                            </div>
                        </div>

                        <div className="lineform">
                            <div className="labelform">   
                                <label htmlFor="description-input"> Description </label>
                            </div>
                            <div className="inputform">             
                                <input value={description} onChange={this.handleChange} type="text" name="description" id="description-input" placeholder="e.g., ••••••••••••" required />
                            </div>
                        </div>

                        <div className="lineform">
                            <div className="labelform">   
                                <label htmlFor="price-input"> Price </label>
                            </div>
                            <div className="inputform">             
                                <input value={price} onChange={this.handleChange} type="number" name="price" id="price-input" placeholder="e.g., ••••••••••••" required />
                            </div>
                        </div>

                        <div className="lineform">
                            <div className="labelform">   
                                <label htmlFor="maxPrints-input"> Number of Prints </label>
                            </div>
                            <div className="inputform">             
                                <input value={maxPrints} onChange={this.handleChange} type="number" name="maxPrints" id="maxPrints-input" placeholder="e.g., ••••••••••••" required />
                            </div>
                        </div>



                        <button className="btnform" type="submit" disabled={this.state.disable}>Create picture</button>


                    </div>
                </form>
            </div>
            
        )
    }
}

export default withAuth(PicCreate)