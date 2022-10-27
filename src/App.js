import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import { MenuSettings } from "./MenuSettings";
import { useStyles } from "./styles";
import { Body } from "./Body";
import { Home } from "./pages/Home";

const MenuBurguer = ({ onDrawerClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <IconButton onClick={onDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
};

const NavBarTop = ({ open, onDrawerOpen }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          React Playground
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let menuIcon;

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("drawer open!")
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("drawer closed!")
  };

  if (!open) {
    menuIcon = <NavBarTop onDrawerOpen={handleDrawerOpen} />;
  } else {
    menuIcon = <MenuBurguer onDrawerClose={handleDrawerClose} />
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        {menuIcon}
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <MenuBurguer theme={theme} onDrawerClose={handleDrawerClose} />
          <Divider />
          <MenuSettings />
        </Drawer>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {routes.map((item) => {
            return (
              // <Route path={item.path} key={JSON.stringify(item)} element={<item.Component />}></Route>
              <Route path={item.path} key={JSON.stringify(item)} element={<Body label={item.Component}/>}></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
