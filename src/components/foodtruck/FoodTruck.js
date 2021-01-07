import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'; 
import TruckCard from './TruckCard.js';

const DirectionsButton = styled.button`
background-color: gold;
color: white;
`

const baseUrl = "https://unit4-build-week-backend.herokuapp.com/api";
const trucksUrl = "trucks"; 

export default function FoodTruck() {

const [trucks, setTrucks] = useState({}); 

useEffect(() => {
        axios.get(`${baseUrl}/${trucksUrl}`).then(res => setTrucks(res.data)).catch(err => console.log('Error from TruckCard endpoint'))
        }, []);

    return (
        <>
        <TruckCard trucks={trucks} />  
        <DirectionsButton>Get Directions</DirectionsButton>
        </>
    )
}