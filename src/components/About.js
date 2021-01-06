import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
  };


export default function About() {
  return (
    <div className="Main">
        <Navbar />
        
        <h1>About Coming Soon. </h1>
      

    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor='#2d60ad'
  />,
 



     <Footer />
    </div>
  );
}
