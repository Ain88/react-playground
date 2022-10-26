import React from "react";
import { withRouter } from "./withRouter";

import { useStyles } from "./styles";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export const Body = withRouter((props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <p>{props.Component}</p>
    </main>
  );
});
