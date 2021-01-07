import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import logor from '../images/reviewlogo.png'
import '../App.css';
import {BrowserRouter as Link} from "react-router-dom";




export default function About() {
  return (
    <div className="main">
        <Navbar />
        <div className='central'>
        <h1>Your voice Counts! Leave a review!  </h1>
        <img src={logor} alt="Review logo" />
        </div>
        
      

        
 



     
    </div>
  );
}
