import React from "react";
import { Router } from "@reach/router";
import { TopMenu } from "../top menu/topmenu.component";
import { Dash } from "../dash/dash.component";
import { Counter } from "../counter/counter.component";
import { Color } from "../color";
import { Math } from "../math";

export const App = (props) => {
  return (
    <div>
      {/* <h1 className="title">This is my practice website</h1> */}
      <TopMenu />
      <Router>
        <Dash path="/" />
        <Counter path="/counter" />
        <Color path="/color" />
        <Math path="/math" />
      </Router>
    </div>
  );
};
