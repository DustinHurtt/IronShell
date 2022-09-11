import React from 'react'; 
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";  


const styles = {
  display: 'flex',
  justifyContent: 'space-around',
};

const activeStyle = ({ isActive }) => {
  return { color: isActive ? 'Red' : 'black' };
};

const NavBar = () =>{

    const navigate = useNavigate(); 

    let token = localStorage.getItem("authToken")
    console.log("TOKEN", token)

    

    return (
    <div className="navbar-container" style={styles}>
        
        
        {token ? (
        <nav>
          <NavLink to="/" style={activeStyle}>Home</NavLink>
          <NavLink to="/find-mentor" style={activeStyle}>Find Mentor</NavLink>
          <NavLink to="" style={activeStyle}>Log Out</NavLink>
          {/* <Link to="/login">Login</Link> */}
       
        </nav>
         ) : (
        <nav>
          <NavLink to="/" style={activeStyle}>Home</NavLink>
          <NavLink to="/signup" style={activeStyle}>Signup</NavLink>
          <NavLink to="/login" style={activeStyle}>Login</NavLink>
          {/* <Link to="/login">Login</Link> */}
        </nav>
         )}
    </div>
    )
         }


export default NavBar; 