import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Help Desk</h3>
        <h4>Login</h4>
        <a
          className={"p-button p-component"}
          style={{ padding: "10px" }}
          href="/place"
        >
          Employee
        </a>
        &nbsp;
        <a
          className={"p-button p-component"}
          style={{ padding: "10px" }}
          href="/manage"
        >
          Manager
        </a>
      </div>
    );
  }
}

export default Login;
