import React from 'react';
import Navbar from '../components/Navbar.js';

import logor from '../images/reviewlogo.png'
import '../App.css';
// import {BrowserRouter as Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
  };

export default function About() {
  return (
    <div className="main">
        <Navbar />
        <div></div>
        <img src={logor} alt="Review logo" />
        <div className='central'>
         <div>
            <form>
                <div className="bar">
                <h3>Food</h3>
                <ReactStars
                     count={5}
                     onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                     />
                </div>

                <div className="bar">
                <h3>Hygiene</h3>
                <ReactStars
                     count={5}
                     onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                     />
                </div>
                <div className="bar">
                <h3>Service</h3>
                <ReactStars
                     count={5}
                     onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                     />
                </div>
                <div >
                <h3>Leave a Comment:</h3>
                <textarea id="" name="" rows="7" cols="25">

                </textarea>
                </div>
                <div>
                <button disabled='true'>Submit</button>
                <button>Cancel</button>

                </div>
            </form>
            </div>
      
        </div>
        
      

        
 


<footer><Navbar /></footer>
        
    </div>
     
  );
}
