import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';




export default function Navbar() {
  return (
    <div >
    <nav>
        <div className="bar">
          <div className='separator'>
          <div className='button'><a href="/Homepage">Home</a></div>
          </div>
          <div className='separator'>
          <div className='button'><a href="/Login">Login</a></div>
          </div>
          <div className='separator' >
          <div className='button'><a href="/signup">Sign up</a></div>
          </div>
          <div className='separator'>
          <div className='button'><a href="/About">About Us</a></div>
          </div>

          
        </div>
    </nav>
      
    </div>
  );
}
