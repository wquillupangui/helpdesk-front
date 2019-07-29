import React, { Component } from "react";
import AdminRequest from "./AdminRequest";
import DataRequest from "./DataRequest";
import RequestDataService from "../service/RequestDataService";
import HeaderBar from "./HeaderBar";

class DashboardRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRequests: null
    };
  }

  refreshRequests = () => {
    RequestDataService.getActive().then(response => {
      this.setState({ activeRequests: response.data });
    });
    this.refs.child.refreshData();
  };

  render() {
    return (
      <div className="p-grid" style={{ padding: "10px" }}>
        <HeaderBar />
        <div className="p-col-3">
          <DataRequest ref="child" />
        </div>
        <div className="p-col-9">
          <AdminRequest
            handlerRefresh={this.refreshRequests}
            value={this.state.activeRequests}
          />
        </div>
      </div>
    );
  }
}

export default DashboardRequest;
