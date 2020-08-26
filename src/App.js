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
// import { PrintDetail } from "./pages/PrintDetail";
import { Checkout } from "./pages/Checkout";
import PicCreate  from "./pages/PicCreate";
import PicDetail from "./pages/PicDetail";
import PicEdit from "./pages/PicEdit";
import Home from "./pages/Home";
// import UserProfile from "./pages/UserProfile";
import UserEdit from "./pages/UserEdit";
// import SearchBar from "./components/SearchBar";



class App extends Component {

  state = {
    
  }

    render() {

    return (
      <AuthProvider>
        <div className='container'>
        
          <Navbar />
         
          <Switch>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/artist' component={Artist} /> */}
            <Route exact path='/pic/detail' component={PicDetail} />
            {/* <Route exact path='/checkout' component={Checkout} /> */}
            <PrivateRoute exact path='/user/profile' component={Private} />
            <PrivateRoute exact path='/user/edit' component={UserEdit} />
            <PrivateRoute exact path='/pic/create' component={PicCreate} />
            <PrivateRoute exact path='/pic/edit' component={PicEdit} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
