import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import RequestDataService from "../service/RequestDataService";
import { Dialog } from "primereact/dialog";

class RequestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      visible: false
      //lstUser: []
    };
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick() {
    this.setState({ visible: true });
  }

  onHide() {
    this.setState({ visible: false });
  }
  componentDidMount() {}

  handleAssign = event => {
    const objId = {
      requestId: this.props.idRequest,
      userId: this.state.userId
    };
    RequestDataService.postAssign(objId).then(response => {
      this.props.refresh();
    });
  };

  handleApprove = event => {
    const objId = {
      requestId: this.props.idRequest
    };
    RequestDataService.postApprove(objId).then(response => {
      this.props.refresh();
    });
  };

  handleChangeUser = event => {
    this.onClick();
    this.setState({ userId: event.target.value });
  };

  render() {
    const footerDlg = (
      <div>
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => {
            this.handleAssign();
            this.onHide();
          }}
        />
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => {
            this.setState({ userId: null });
            this.onHide();
          }}
          className="p-button-secondary"
        />
      </div>
    );

    const datem = this.props.date;
    let user0 = "";
    if (this.props.state === "Approved") {
      user0 = (
        <>
          <select
            key={this.props.idRequest}
            name="country"
            value={this.state.user}
            className="p-dropdown p-component"
            style={{ height: "33px" }}
            onChange={this.handleChangeUser}
            disabled={this.props.state === "Approved" ? false : true}
          >
            <option disabled="true" selected={this.state.userId == null}>
              Select a User
            </option>
            {this.props.lstUser.map((e, key) => {
              return (
                <option key={key} value={e.value}>
                  {e.label}
                </option>
              );
            })}
          </select>
        </>
      );
    }
    const footer = (
      <>
        <span style={{ padding: "10px" }}>{datem}</span>
        <span style={{ padding: "10px" }}>
          <Button
            label="Approve"
            icon="pi pi-check"
            disabled={this.props.state === "Pending" ? false : true}
            onClick={this.handleApprove}
          />
        </span>
        <span style={{ padding: "10px" }}>{user0}</span>
        <span style={{ padding: "10px" }}>{this.props.userName}</span>
      </>
    );
    return (
      <div>
        <Dialog
          header="Confirmation"
          visible={this.state.visible}
          style={{ width: "50vw" }}
          footer={footerDlg}
          onHide={this.onHide}
        >
          Do you wish to Continue?
        </Dialog>
        <Card
          title={this.props.name}
          subTitle={this.props.priority}
          className="ui-card-shadow"
          footer={footer}
        >
          <span>{this.props.description}</span>
        </Card>
        &nbsp;
      </div>
    );
  }
}

export default RequestItem;
