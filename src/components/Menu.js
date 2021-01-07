import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';
import food from '../images/foodtruck.png'
import logom from '../images/menulogo.png'
import icons from '../images/icons.png'
import '../App.css';
import {BrowserRouter as Link} from "react-router-dom";




export default function Menu() {
  return (
    <div className="main">
        <Navbar />
        <div className='central'>
        <img src={logom} alt="Go'them trucks stylized bat New York City Food Trucks" />
        </div>
<div className='menu'>
    <div className='topblock'>
        <div className='trucknum'>
            Food Truck #
            <img src={icons} alt="3 small icons vegetarian no meat no milk" />
        </div>

        {/* <div className='truckpic'> */}
            <img src={food} alt="Go'them trucks stylized bat New York City Food Trucks" />
        {/* </div> */}
    </div>

    <div className='menutitle'>
        Menu
    </div>
    <div className="fooditem">


        
    </div>
            



</div>
       
        
        
      

        
 



     <Footer />
    </div>
  );
}
