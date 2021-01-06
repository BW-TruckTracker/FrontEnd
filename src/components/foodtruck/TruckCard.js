import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

// 2. activeTruck as truck(get request by axios)
// 3. setFavorites

const TruckCardComponent = styled.div`
  border: gray;
`;
//Top of Card
const TruckCardTop = styled.div`
  border: gray;
`;
const TruckCardRight = styled.div`
  border: gray;
`;
const TruckCardLeft = styled.div`
  border: gray;
`;
const TruckImg = styled.img`
  border-radius: 0.5;
  border: 1px solid gray;
`;
// Middle of Card
const TruckCardText = styled.div`
  font-size: 1em;
`;
// Bottom of Card
const TruckCardButtons = styled.div`
  border: gray;
  font-size: 1.5em;
`;
const TruckCardButton = styled.div`
  background-color: gold;
  color: white;
`;

export default function TruckCard() {
  const history = useHistory();

  // Helper functions
  const goToMenu = () => {
    history.push("/menu");
  };

  const goToReview = () => {
    history.push("/reviews");
  };

  return (
    <TruckCardComponent>
      <TruckCardTop>
        <TruckCardRight>
          <h2>(truck.truck_name)</h2>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#2D60AD"
          />{" "}
          <h3>(truck.cuisine_type)</h3>
        </TruckCardRight>
        <TruckCardLeft>{/* <img src=`{truck.truck_img_url}`*/}</TruckCardLeft>
      </TruckCardTop>
      <TruckCardText>
        <p>
          Bacon ipsum dolor amet ground round pork chop porchetta pork loin
          spare ribs, tenderloin ball tip pancetta shank bacon drumstick. Pork
          loin leberkas chicken tri-tip porchetta, sausage venison.
        </p>
      </TruckCardText>
      <TruckCardButtons>
        <TruckCardButton onClick={goToMenu}>See Menu</TruckCardButton>
        <TruckCardButton onClick={goToReview}>Leave Review</TruckCardButton>
        {/* <TruckCardButton onClick={setFave}>Set Favorite</TruckCardButton> */}
      </TruckCardButtons>
    </TruckCardComponent>
  );
}
