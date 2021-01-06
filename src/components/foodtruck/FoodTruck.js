import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'; 

const DirectionsButton = styled.button`
background-color: gold;
color: white;
`

const baseUrl = "https://unit4-build-week-backend.herokuapp.com/api";
const truckUrl = "trucks"; 

// need to use useParams
// const { id } = useParams(); 
// Then in: <Route path='/reviews/:id'> (for which component?)

export default function FoodTruck() {

const [truck, setTruck] = useState({}); 

useEffect(() => {
        axios.get(`${baseUrl}/${truckUrl}`).then(res => setTruck(res.data)).catch(err => console.log('Error from TruckCard endpoint'))
        }, []);

//set data to state 

    return (
        <>
        <TruckCard truck={truck} />    
        <DirectionsButton>Get Directions</DirectionsButton>
        </>
    )
}