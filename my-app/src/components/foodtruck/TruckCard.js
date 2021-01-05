import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom'; 
import styled from "styled-components";

// Truck prop dynamic details includes:
// Will global styles successfully style the non-styled components? 
// Food Truck id # (from basemap)
// stars/reviews?
// Food Genre
// Food truck picture? - Not sure how to link
// Body: description

// Link and add action to buttons 
const TruckCardComponent = styled.div`
border: gray; 
`
//Top of Card  
const TruckCardTop = styled.div`
border: gray; 
`
const TruckCardRight = styled.div`
border: gray; 
`
const TruckCardLeft = styled.div`
border: gray; 
`
const TruckImg = styled.img`
border-radius: 0.5; 
border: 1px solid gray; 
`
// Middle of Card 
const TruckCardText = styled.div`
font-size: 1em; 
`
// Bottom of Card 
const TruckCardButtons = styled.div`
border: gray;
font-size: 1.5em; 
`
const TruckCardButton = styled.div`
background-color: gold; 
color: white; 
`

export default function TruckCard() {
  return (
    <TruckCardComponent>
      <TruckCardTop>
        <TruckCardRight>
          <h2>(truck.truck_name)</h2>
          <span>Stars component</span>
          <h3>Food genre(truck.cuisine_type)</h3>
        </TruckCardRight>
        <TruckCardLeft>
          {/* An image goes inside this div (truck.truck_img_url*/}
        </TruckCardLeft>
      </TruckCardTop>
      <TruckCardText>
          <p>This is the truck description.</p>
      </TruckCardText>
      <TruckCardButtons>
          <TruckCardButton>See Menu</TruckCardButton>
          <TruckCardButton>Leave Review</TruckCardButton>
          <TruckCardButton>Set Favorite</TruckCardButton>
      </TruckCardButtons>
    </TruckCardComponent>
  );
}
