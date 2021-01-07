import React from "react";
import ReactStars from "react-rating-stars-component";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    margin: 30
  },
});

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function FavoritesCard(props) {
  const { fave, faveArray } = props;

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {fave.truck_name}
        </Typography>
        <Typography variant="body2" component="h3">
        Genre: {fave.cusine_type}
        </Typography>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#2D60AD"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default FavoritesCard;
