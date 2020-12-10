import * as React from "react";

import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hero: {
    marginTop: "30px",
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <section id="hero" classList={classes.hero}>
        <h1>Hello, I'm Augusto</h1>
        <p>Front End Developer</p>
      </section>
    </>
  );
};
export default Banner;
