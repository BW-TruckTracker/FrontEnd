import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { Button } from "@material-ui/core/index";
import { makeStyles } from '@material-ui/core/styles';

//STYLES 

const useStyles = makeStyles({
  root:{
    margin: 5, 
    backgroundColor: '#707ea1',
    color: 'white',
  },
})

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

//BEGINNING OF COMPONENT 
export default function TruckCard(props) {
  const customStyle = useStyles(); 

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
        <h2>Try {truck.cusine_type}!</h2>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#2D60AD"
          />
          <h3>{truck.truck_name}</h3>
      </TruckCardTop>
      <TruckCardText>
        <p>
          Bacon ipsum dolor amet ground round pork chop porchetta pork loin
          spare ribs, tenderloin ball tip pancetta shank bacon drumstick. Pork
          loin leberkas chicken tri-tip porchetta, sausage venison.
        </p>
      </TruckCardText>
      <TruckCardButtons>
        <Button className={customStyle.root} variant="contained" onClick={goToMenu}>See Menu</Button>
        <Button className={customStyle.root} variant="contained" onClick={goToReview}>Leave Review</Button>
        {/* <TruckCardButton onClick={setFave}>Set Favorite</TruckCardButton> */}
      </TruckCardButtons>
    </TruckCardComponent>
  );
}
