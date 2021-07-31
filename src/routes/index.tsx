import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};

export default Routes;
