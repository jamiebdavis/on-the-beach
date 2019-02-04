import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core/";
import classes from "./Card.module.css";

const HolidayCard = props => {
  let background = require("../../assests/image_01.png");

  return (
    <div>
      <Card
        style={{
          width: "500px",
          height: "300px",
          margin: "0 auto",
          marginBottom: "30px",
          alignItems: "center",
          backgroundImage: "url(background)"
        }}
      >
        <CardContent>
          <Typography className={classes.hotelNameStars}>
            {props.hotelName}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.location}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.stars}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.price}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.image}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.dateInfo}
          </Typography>

          <Typography className={classes.hotelNameStars}>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default HolidayCard;
