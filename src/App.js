import React from "react";
import "./App.css";
import InputRequest from "./component/InputRequest";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Login from "./component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardRequest from "./component/DashboardRequest";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/place/" component={InputRequest} />
        <Route path="/manage/" component={DashboardRequest} />
      </Router>
    </div>
  );
}

export default App;
