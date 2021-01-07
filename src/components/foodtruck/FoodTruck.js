import styled from 'styled-components'; 
import TruckCard from './TruckCard.js';
import React, { useState, useEffect } from 'react';
import axios from "axios";


const DirectionsButton = styled.button`
background-color: #edca1a;
border: solid 1px white; 
color: white;
`

export default function FoodTruck(props) {
    const { activeTruck } = props; 
    const truckUrl = "https://foodtruck-backend-api.herokuapp.com/api/trucks";
    const truckDetails = activeTruck; 
    const [truck, setTrucks] = useState([]);
    
    useEffect(() => {
            axios.get(`${truckUrl}/${truckDetails}`).then(res => setTrucks(res.data)).catch(err => console.log('Request error from BaseMap'))
            });

    return (
        <>
        <TruckCard truck={truck}/>
        <DirectionsButton>Get Directions</DirectionsButton>
        </>
    )
}