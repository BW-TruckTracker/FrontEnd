import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import logo1 from '../images/logopng.png'
import '../App.css';
import {BrowserRouter as Link} from "react-router-dom";




export default function About() {
  return (
    <div className="main">
        <Navbar />
        <div className='central'>
        <h1>We're glad you're here! </h1>
        <img src={logo1} alt="Go'them trucks stylized bat New York City Food Trucks" />
        </div>
        <Link to="/Homepage">
        <div className="enter">Enter to Find Great Food!</div>
        </Link>
        {/* <a href={/Homepage}>enter</a> */}
      

        
 



     <Footer />
    </div>
  );
}
