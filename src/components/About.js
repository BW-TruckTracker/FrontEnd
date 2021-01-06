import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import logo1 from '../images/logopng.png'





export default function About() {
  return (
    <div className="Main">
        <Navbar />
        
        <h1>We're glad you're here! </h1>
        <img src={logo1} alt="Go'them trucks stylized bat New York City Food Trucks" />
      

 
 



     <Footer />
    </div>
  );
}
