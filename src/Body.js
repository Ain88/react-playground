import React from "react";
import { withRouter } from "./withRouter";

export const Body = withRouter((props) => {
  return (
    <main>
      <props.label />
    </main>
  );
});
