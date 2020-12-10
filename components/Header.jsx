import * as React from "react";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import Logo from "../assets/images/logo.svg";
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
  navBarDisplayFlex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  navBar: {
    display: "flex",
    marginLeft: "auto",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const Header = ({ categories }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="lg" className={classes.navBarDisplayFlex}>
          <Logo />

          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navBar}
            >
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link
                      as={`/category/${category.slug}`}
                      href="/category/[id]"
                      className={classes.linkText}
                    >
                      <ListItem button>
                        <ListItemText primary={category.name} />
                      </ListItem>
                    </Link>
                  </li>
                );
              })}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer categories={categories} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
