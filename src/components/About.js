import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import logo1 from '../images/logopng.png'
import '../App.css';




export default function About() {
  return (
    <div className="main">
        <Navbar />
        <div className='central'>
        <h1>We're glad you're here! </h1>
        <img src={logo1} alt="Go'them trucks stylized bat New York City Food Trucks" />
        </div>
        <div className="enter">Enter to Find Great Food!</div>
      

 
 



     <Footer />
    </div>
  );
}
