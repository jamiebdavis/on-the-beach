import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core/";
import classes from "./Card.module.css";

const HolidayCard = props => {
  let background = require("../../assests/image_01.png");

  return (
    <div>
      <Card className={classes.Card}>
        <CardContent>
          <CardHeader title={props.hotelName} subheader={props.location} />

          <CardMedia
            className={classes.media}
            image={require("../../assests/image_01.png")}
            title="Paella dish"
          />

          <img src={background} alt="picture of resort" />

          <Typography className={classes.hotelNameStars}>
            {props.stars}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.price}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.dateInfo}
          </Typography>
          <CardContent>
            <Typography paragraph>{props.description}</Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
};
export default HolidayCard;
