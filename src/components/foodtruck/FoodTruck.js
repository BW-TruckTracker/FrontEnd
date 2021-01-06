import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'; 

//* Route to 'more info button' on homepage or to popup
// Remember to pass down truck props to FoodTruck and TruckCard

const DirectionsButton = styled.button`
background-color: gold;
color: white;
`
export default function FoodTruck() {
    return (
        <>
        <TruckCard />    
        <DirectionsButton>Get Directions</DirectionsButton>
        </>
    )
}