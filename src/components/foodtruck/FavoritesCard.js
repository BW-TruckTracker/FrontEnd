import React from 'react'; 
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const FaveTruckCard = styled.div`
background: gold; 
flex-direction: column; 
width: 50vw; 
margin: 2em; 
border: 1px solid gray; 
`
const RemoveButton = styled.button`
border: red;
display: inline-block; 
color: red; 
`
const ratingChanged = (newRating) => {
    console.log(newRating);
  }; 

function FavoritesCard(props){
const { faveTruck } = props
return (
    <>
    <FaveTruckCard>
      <h2>{faveTruck.truck_name}</h2>
      <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#2D60AD"
          />
      <h3>{faveTruck.truck}</h3>
    <RemoveButton>x</RemoveButton>
  </FaveTruckCard>
  </>

)
}
export default FavoritesCard; 