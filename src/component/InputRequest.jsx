import React, { Component } from "react";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import RequestDataService from "../service/RequestDataService";
import HeaderBar from "./HeaderBar";

class InputRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      priority: "Low"
    };
    this.priorities = [
      { label: "High", value: "High" },
      { label: "Normal", value: "Normal" },
      { label: "Low", value: "Low" }
    ];
  }

  handleClick = () => {
    RequestDataService.put(this.state);
    window.location.pathname = "/";
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    event.preventDefault();
  };

  validInput = () => {
    if (
      this.state.name &&
      this.state.name.length > 4 &&
      this.state.description &&
      this.state.description.length > 8
    )
      return true;
  };

  render() {
    return (
      <div>
        <HeaderBar />
        <Panel header="Place Request">
          <span>Name :</span>
          <InputText
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          <span>Description :</span>
          <InputTextarea
            rows={5}
            cols={30}
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <br />
          <span>Priority :</span>
          <SelectButton
            value={this.state.priority}
            options={this.priorities}
            onChange={e => this.setState({ priority: e.value })}
          />
          <br />
          <Button
            label="Save"
            onClick={this.handleClick}
            disabled={!this.validInput()}
          />
          &nbsp;
          <Button
            label="Cancel"
            onClick={e => {
              window.location.pathname = "/";
            }}
          />
        </Panel>
      </div>
    );
  }
}

export default InputRequest;
