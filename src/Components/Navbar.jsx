import React from 'react';
import hicon from '../assets/hicon.svg'; 
import {Link} from "react-router-dom"
import './navbar.css'
const Navbar = () => {
  return (
    <div className="nav_icon ">
      <div className="container-fluid ">
        <nav className="navbar navbar-brand">
        <Link to={"/"}>
        <img src={hicon} alt="Healthcare Icon" style={{ width: '50px', height: '50px' ,borderRadius:"50%"}} />
        </Link>
          <Link to={"/servicelist"}>
          <h1 className="navbar-title">Healthcare</h1>
          </Link>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
