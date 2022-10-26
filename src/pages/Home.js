import React from "react";
import { withRouter } from "../withRouter";

import { useStyles } from "../styles";

export const Home = withRouter((props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <p>React Test Playground</p>
    </main>
  );
});
