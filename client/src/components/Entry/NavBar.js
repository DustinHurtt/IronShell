import React from 'react'; 
import { Routes, Route, Link, useNavigate } from "react-router-dom";  

const NavBar = () =>{

    const navigate = useNavigate(); 

    let token = localStorage.getItem("authToken")
    console.log("TOKEN", token)

    

    return (
    <div className="navbar">
        
        
        {token ? (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/find-mentor">Find Mentor</Link>
          <Link to="">Log Out</Link>
          {/* <Link to="/login">Login</Link> */}
       
        </nav>
         ) : (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="/login">Login</Link> */}
        </nav>
         )}
    </div>
    )
         }


export default NavBar; 