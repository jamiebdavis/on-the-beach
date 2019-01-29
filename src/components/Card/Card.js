import React from "react";
import classes from "./Card.module.css";

const Card = props => {
  return (
    <div class={classes.container}>
      <div class={classes.topBanner}>
        <div class={classes.topLeftBanner} />
      </div>

      <div class={classes.bottomBanner} />
    </div>
  );
};

export default Card;
