import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import { MenuSettings } from "./MenuSettings";
import { NavBarTop } from "./NavBarTop";
import { useStyles } from "./styles";
import { Screen } from "./Screen";

const MenuBurguer = ({ theme, onDrawerClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <IconButton onClick={onDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
};

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBarTop onDrawerOpen={handleDrawerOpen} open={open} />
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
          <Route exact path="/" element={<Screen />}></Route>
          {routes.map((item) => {
            return (
              <Route path={item.path} key={JSON.stringify(item)} element={<Screen label={item.title.toUpperCase()}/>}></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
