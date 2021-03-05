import React from "react";
import { Router } from "@reach/router";
import { TopMenu } from "../top menu/topmenu.component";
import { Dash } from "../dash/dash.component";
import { Counter } from "../counter/counter.component";


export const App = (props) => {
  return (
    <div className="main__div">
      <h1 className="title">This is my practice website</h1>
      <TopMenu />
      <Router>
        <Dash path="/" />
        <Counter path='/counter' />
      </Router>
    </div>
  );
};
