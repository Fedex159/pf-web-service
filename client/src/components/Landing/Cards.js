import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardClick from "./CardClick";
import infoCardClick from "./static/InfoCardClick";
import useWindowPosition from "./hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
}));

const Cards = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="cards">
      <CardClick infoCardClick={infoCardClick[1]} checked={checked} />
      <CardClick infoCardClick={infoCardClick[0]} checked={checked} />
    </div>
  );
};

export default Cards;
