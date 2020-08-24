import React from 'react';
import axios from "axios";

class SearchBar extends React.Component {
  state = {
    search: "",
    allPics: [],
    allPicksShown: []
  }


  getPicsInfo = () => {
    axios.get('http://localhost:4000/pic/list')
      .then((response) => {
        this.setState( { allPics: response.data, allPicksShown:  response.data } ) // con axios los datos de respuesta siempre van a ser devueltos dentro de `response.data`
      })
      .catch((err) => console.log(err))
  } 
  
  filterPixeller = (searchString) => {
    const lowerSearchString = searchString.toLowerCase();
    // filtrar los paises utilizando el searchString
    // el array de los paises - this.state.countries
    const allPicsCopy = [...this.state.allPics];
    const filteredPixeller = allPicsCopy.filter( (picsObj) => {
      const picTitle = picsObj.title.toLowerCase();

      if(picTitle.includes(lowerSearchString) ) {
        return true;
      }
      else if (picsObj.artist.toLowerCase().includes(lowerSearchString)) {
        return true;
      }
      else {
        return false;
      }
    })

    this.setState({ titleToShow: filteredPixeller })
    // cuando lo tenemos listo, hay que pasar este metodo al SearchBar como un prop
  }




  handleChange = (e) => {
    const updatedText = e.target.value;
    this.setState({ search: updatedText })

    this.props.filterCountries(updatedText)
  }

  render() {
    return(
      <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
    )
  }
}

export default SearchBar;