import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import FavoritesCard from './FavoritesCard'; 
import "./Favorites.css"; 
import styled from 'styled-components'; 

const FaveHeader = styled.h1`
color: black; 
`
function Favorites(){
  const [ fave, setFave ] = useState([]); 
  useEffect(()=>{
    axios
    .get("https://foodtruck-backend-api.herokuapp.com/api/favorites")
    .then(res => setFave(res.data))
    .catch(err => console.log('error from Favorites'))
  }
  ,[])

  return (
    <div className="favorite-background">
      <FaveHeader>Your Favorite Trucks</FaveHeader>
      {fave.map((faveTruck) => {
        return <FavoritesCard id={faveTruck.id} faveTruck={faveTruck}/>;
      })}
    </div>
  )
}

export default Favorites; 
