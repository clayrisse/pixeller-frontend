import React, { Component } from "react";
import "./App.css";
import "./components/NavBar.css"
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import { Artist } from "./pages/Artist";
import { PrintDetail } from "./pages/PrintDetail";
import { UserProfile } from "./pages/UserProfile";
import { Checkout } from "./pages/Checkout";
import { PicCreate } from "./pages/PicCreate";
import { PicDetail } from "./pages/PicDetail";
import { PicEdit } from "./pages/PicEdit";
import Home from "./pages/Home";
// import SearchBar from "./components/SearchBar";



class App extends Component {

  state = {
    

  }

  


    render() {

    return (
      <AuthProvider>
        <div className='container'>
          {/* <Home /> */}
          <Navbar />
         
          <Switch>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />
            <Route exact path='/artist' component={Artist} />
            <Route exact path='/print' component={PrintDetail} />
            <Route exact path='/checkout' component={Checkout} />
            <PrivateRoute exact path='/user/profile' component={UserProfile} />
            <PrivateRoute exact path='/user/piccreate' component={PicCreate} />
            <PrivateRoute exact path='/user/picdetail' component={PicDetail} />
            <PrivateRoute exact path='/user/picedit' component={PicEdit} />
            <PrivateRoute exact path='/private' component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
