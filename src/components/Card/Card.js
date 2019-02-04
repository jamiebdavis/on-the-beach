import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core/";
import classes from "./Card.module.css";
import { withStyles } from "@material-ui/core/styles";

const HolidayCard = props => {
  return (
    <Card
      style={{
        width: "500px",
        height: "300px",
        margin: "0 auto",
        marginBottom: "30px",
        alignItems: "center"
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
  );
};
export default HolidayCard;
