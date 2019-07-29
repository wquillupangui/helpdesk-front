import React, { Component } from "react";
import { Button } from "primereact/button";

class HeaderBar extends Component {
  render() {
    return (
      <div style={{ padding: "20px 10px" }}>
        <Button
          icon="pi pi-home"
          onClick={e => {
            window.location.pathname = "/";
          }}
        />
        <span
          className="p-col-11"
          style={{ fontSize: "1.17em", fontWeight: "bold", padding: "10px" }}
        >
          Help Desk
        </span>
      </div>
    );
  }
}

export default HeaderBar;
