import React, { useState, useEffect } from "react";
import FavoritesCard from "./FavoritesCard";
import "./Favorites.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core/index";
import { makeStyles } from '@material-ui/core/styles';

const FaveHeader = styled.h1`
  color: black;
  font-size: 2.5em;
  margin-left: 1em;  
`;

const useStyles = makeStyles({
  root:{
    marginLeft: 30, 
  },
})

export default function Favorites(props) {
  const [faves, setFaves] = useState([]);
  const classes = useStyles();

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
      {faves.map((faveTruck) => {
        return (
          <FavoritesCard
            id={faveTruck.fav_id}
            fave={faveTruck}
            faveArray={faves}
          />
        );
      })}
      <Button className={classes.root} variant="contained" color="default" onClick={returnHome}> Return to Home Page</Button>
    </div>
  );
}

