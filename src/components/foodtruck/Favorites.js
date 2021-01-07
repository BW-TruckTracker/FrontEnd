import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

// write favorites function

const FavoritesComponent = styled.div`
background: brown;
font-weight: bold; 
`
const FaveTruckCard = styled.div`
background: salmon; 
`

const RemoveButton = styled.button`
border: red;
display: inline-block; 
color: red; 
`
function Favorites (props){

  useEffect(() => {
    axios
    .get('https://unit4-build-week-backend.herokuapp.com/api/favorites')
    .then(res => 
      console.log(res.data)
      // setFave(res.data)
      )
    .catch(err => console.log('error from Favorites')) 
  }, []);
  
return (
  <div>
    <h1>Hello</h1>
    <FavoritesComponent>
        <h2>Your Favorite Trucks</h2>
    <FaveTruckCard>
    {console.log('HERE')}
      <h2>(truck.truck_name)</h2>
      <span>Stars component</span>
      <h3>(truck.cuisine_type)</h3>
    <RemoveButton>x</RemoveButton>
  </FaveTruckCard>
    </FavoritesComponent>
    </div>
)
}
export default Favorites; 