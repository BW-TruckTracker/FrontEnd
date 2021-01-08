import React from "react";
import { useHistory} from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { Button } from "@material-ui/core/index";

//STYLES 
const TruckCardComponent = styled.div`
border: gray
`;
//Top of Card
const TruckCardTop = styled.div`
  box-sizing: border-box; 
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
  background-color: #ffd43b;
  color: white;
  margin-bottom: .5em; 
  text-align: center; 
  box-sizing: border-box; 
  margin: .5em; 
`;

//BEGINNING OF COMPONENT 
export default function TruckCard(props) {

//pass in props 
const {truck} = props; 

  const history = useHistory();
  // Helper functions
  const goToMenu = () => {
    history.push("/menu");
  };

  const goToReview = () => {
    history.push("/reviews");
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  }; 

  return (
    <TruckCardComponent>
      <TruckCardTop>
        <h2>{truck.truck_name}</h2>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#2D60AD"
          />
          <h3>{truck.cusine_type}</h3>
      </TruckCardTop>
      <TruckCardText>
        <p>
          Bacon ipsum dolor amet ground round pork chop porchetta pork loin
          spare ribs, tenderloin ball tip pancetta shank bacon drumstick. Pork
          loin leberkas chicken tri-tip porchetta, sausage venison.
        </p>
      </TruckCardText>
      <TruckCardButtons>
        <Button variant="contained" onClick={goToMenu}>See Menu</Button>
        <Button variant="contained" onClick={goToReview}>Leave Review</Button>
        {/* <TruckCardButton onClick={setFave}>Set Favorite</TruckCardButton> */}
      </TruckCardButtons>
    </TruckCardComponent>
  );
}
