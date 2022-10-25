import { withRouter } from "./withRouter";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import Home from "./page/Home";

export const Body = withRouter((props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <p>{props?.label}</p>
      <Home />
    </main>
  );
});
