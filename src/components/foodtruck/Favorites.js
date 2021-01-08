import React, { useState, useEffect } from "react";
import FavoritesCard from "./FavoritesCard";
import "./Favorites.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core/index";

const FaveHeader = styled.h1`
  color: black;
`;

function Favorites(props) {
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    axios
      .get("https://foodtruck-backend-api.herokuapp.com/api/favorites/1")
      .then((res) => setFaves(res.data))
      .catch((err) => console.log("error from Favorites"));
  }, []);

  const history = useHistory();
  // Helper functions
  const returnHome = () => {
    history.push("/homepage");
  };

  return (
    <div className="favorite-background">
      <FaveHeader>Your Favorite Trucks</FaveHeader>
      <Button variant="contained" color="default" onClick={returnHome}> Return to Home Page</Button>
      {faves.map((faveTruck) => {
        return (
          <FavoritesCard
            id={faveTruck.fav_id}
            fave={faveTruck}
            faveArray={faves}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
