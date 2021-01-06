import React from "react";
import styled from "styled-components";

// write favorites function

const FavoritesComponent = styled.div`
background: brown;
font-weight: bold; 
`
const FaveTruckCard = styled.div`
border-radius: 10%;
background: salmon; 
`
const TruckCardRight = styled.div`
border: gray; 
`
const TruckCardLeft = styled.div`
border: gray; 
`
const RemoveButton = styled.button`
border: red;
display: inline-block; 
color: red; 
`

export default function Favorites (props){
  
return (
    <FavoritesComponent>
        <h2>Your Favorite Trucks</h2>
    <FaveTruckCard>
    <TruckCardRight>
      <h2>(truck.truck_name)</h2>
      <span>Stars component</span>
      <h3>(truck.cuisine_type)</h3>
    </TruckCardRight>
    <TruckCardLeft>
      {/* An image goes inside this div (truck.truck_img_url*/}
    </TruckCardLeft>
    <RemoveButton>x</RemoveButton>
  </FaveTruckCard>
    </FavoritesComponent>
)
}