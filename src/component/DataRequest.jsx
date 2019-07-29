import React, { Component } from "react";
import { DataTable, Column } from "primereact/datatable";
import RequestDataService from "../service/RequestDataService";

class DataRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: null,
      data1: null
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    RequestDataService.getTable0().then(response => {
      if (response.data) {
        this.setState({ data0: response.data });
      }
    });
    RequestDataService.getTable1().then(response => {
      if (response.data) {
        this.setState({ data1: response.data });
      }
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "2%" }} />
        <DataTable value={this.state.data0} style={{ width: "45%" }}>
          <Column field="value" header="Priority" />
          <Column field="pending" header="Pending" />
          <Column field="approved" header="Approved" />
          <Column field="assigned" header="Assigned" />
          <Column field="total" header="Total" />
        </DataTable>
        <div style={{ width: "1%" }} />
        <DataTable value={this.state.data1} style={{ width: "45%" }}>
          <Column field="value" header="Technician" />
          <Column field="pending" header="Pending" />
          <Column field="approved" header="Approved" />
          <Column field="assigned" header="Assigned" />
          <Column field="total" header="Total" />
        </DataTable>
      </div>
    );
  }
}

export default DataRequest;
