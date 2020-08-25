import React, { Component } from "react";
// import "/Navbar.css"
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
      {/* <nav className='navbar'>
        <Link to={"/"} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {isLoggedin ? (
          <>
            <p className='navbar-user'>username: {user.username}</p>
            <button className='navbar-button' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
          </>
        )}
      </nav> */}

      <nav className="xnavbar-bottom">
          <div className="" id="nav">
              <ul className="xnavbar-nav">
                  <li className="xnav-item">
                    <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"/"}>
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-home.png"/>
                        <p className="xnavbar-title" >Home</p>
                      </Link>
                    </div>
                  </li>

                  <li className="xnav-item">
                    <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"SearchBar"}>  {/* corregir */}
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-search.png"/>
                        <p className="xnavbar-title" >Search</p>
                      </Link>
                    </div>
                  </li>

                  <li className="xnav-item">
                    <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"/checkout"}>
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-car.png"/>
                        <p className="xnavbar-title" >Cheackout</p>
                      </Link>
                    </div>
                  </li>

                  <li className="xnav-item">
                    <div className="xnavbar-texticon">
                      <Link className="xnavbar-icontitle" to={"/user/piccreate"}>
                        <img className="xnavbar-icon" alt="icon" src="/icons/icon-addpic.png"/>
                        <p className="xnavbar-title" >Add Print</p>
                      </Link>
                    </div>
                  </li>
            
                  {isLoggedin ? (
                    <>
                    <li className="xnav-item">
                      <div className="xnavbar-texticon">
                        <Link className="xnavbar-icontitle" to="/user/profile">
                          <img className="xnavbar-icon" alt="icon" src="/icons/icon-user.png"/>
                          <p className="xnavbar-title">User</p>
                        </Link>
                      </div>
                    </li>
                    
                    <li className="xnav-item">
                      <div className="xnavbar-texticon">
                        
                          <p className="xnavbar-title">{user.username}</p>
                          <button className="xnavbar-title" onClick={logout}>Logout</button>
                        
                      </div>
                    </li>
                    </>
                  ) : (
                    <>
                    <li className="xnav-item">
                      <div className="xnavbar-texticon">
                        <Link className="xnavbar-icontitle" to="/login">
                          <img className="xnavbar-icon" alt="icon" src="/icons/icon-user.png"/>
                          <p className="xnavbar-title" >User</p>
                        </Link>
                      </div>
                    </li>

                    {/* <li className="xnav-item">
                      <div className="xnavbar-texticon">
                        <Link className="xnavbar-icontitle" to="/profile">
                          <p className="xnavbar-title">{user.username}</p>
                          <button className="xnavbar-title" onClick={logout}>Logout</button>
                        </Link>
                      </div>
                    </li> */}
                    
                    </>

                    
                  )}




              </ul>
          </div>
      </nav>

      </div>
    );
  }
}

export default withAuth(Navbar);
