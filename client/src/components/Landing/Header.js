import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "80%",
    textAlign: "left",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#8d6e63",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
    fontFamily: "Nunito",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            WEB <span className={classes.colorText}>SERVICE. </span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            WEB<span className={classes.colorText}>SERVICE.</span>
          </h1>
          <Scroll to="cards" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
