import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import RequestItem from "./RequestItem";
import UserDataService from "../service/UserDataService";
import { Button } from "primereact/button";

class AdminRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      //activeRequests: null,
      techUsers: null,
      orderDate: "desc"
    };
  }

  componentDidMount() {
    this.refreshTechs();
    this.props.handlerRefresh();
  }

  refreshTechs = () => {
    UserDataService.getTech().then(response => {
      if (response.data) {
        let arr0 = response.data.map(obj => {
          return { label: obj.name, value: obj.id };
        });
        this.setState({ techUsers: arr0 });
      }
    });
  };

  //  refreshRequests = () => {
  //    RequestDataService.getActive().then(response => {
  //      this.setState({ activeRequests: response.data });
  //   });
  //  };

  handleSort = array => {
    if (this.state.orderDate === "desc") {
      array.sort(function(a, b) {
        return new Date(b.date_m) - new Date(a.date_m);
      });
    } else {
      array.sort(function(a, b) {
        return new Date(a.date_m) - new Date(b.date_m);
      });
    }
  };

  render() {
    let pending0 = "";
    let approved0 = "";
    let assign0 = "";
    let pending1 = 0;
    let approved1 = 0;
    let assign1 = 0;

    let sortComp = (
      <div style={{ textAlign: "right", padding: "5px" }}>
        <span style={{ padding: "10px" }}>Sort By Date</span>
        <span style={{ padding: "10px" }}>
          <Button
            icon="pi pi-sort-numeric-up"
            onClick={e => {
              this.setState({ orderDate: "desc" });
            }}
          />
          <Button
            icon="pi pi-sort-numeric-down"
            onClick={e => {
              this.setState({ orderDate: "asc" });
            }}
          />
        </span>
      </div>
    );

    if (this.props.value) {
      if (this.props.value.Pending) {
        let arrPend = this.props.value.Pending;
        this.handleSort(arrPend);
        pending1 = arrPend.length;
        pending0 = (
          <>
            {arrPend.map(req0 => (
              <RequestItem
                name={req0.name}
                priority={req0.priority}
                description={req0.description}
                state="Pending"
                idRequest={req0.id}
                refresh={this.props.handlerRefresh}
                date={req0.date_m}
              />
            ))}
          </>
        );
      }
      if (this.props.value.Approved) {
        let arrAppr = this.props.value.Approved;
        this.handleSort(arrAppr);
        approved1 = arrAppr.length;
        approved0 = (
          <>
            {arrAppr.map(req0 => (
              <RequestItem
                name={req0.name}
                priority={req0.priority}
                description={req0.description}
                state="Approved"
                idRequest={req0.id}
                refresh={this.props.handlerRefresh}
                date={req0.date_m}
                lstUser={this.state.techUsers}
              />
            ))}
          </>
        );
      }

      if (this.props.value.Assigned) {
        let arrAssi = this.props.value.Assigned;
        this.handleSort(arrAssi);
        assign1 = arrAssi.length;
        assign0 = (
          <>
            {arrAssi.map(req0 => (
              <RequestItem
                name={req0.name}
                priority={req0.priority}
                description={req0.description}
                state="Assigned"
                idRequest={req0.id}
                refresh={this.props.handlerRefresh}
                date={req0.date_m}
                userName={req0.user}
              />
            ))}
          </>
        );
      }
    }

    return (
      <div>
        <TabView
          activeIndex={this.state.activeIndex}
          onTabChange={e => this.setState({ activeIndex: e.index })}
          style={{ textAlign: "justify" }}
        >
          <TabPanel header={"Pending  " + "(" + pending1 + ")"}>
            {sortComp}
            {pending0}
          </TabPanel>
          <TabPanel header={"Approved  " + "(" + approved1 + ")"}>
            {sortComp}
            {approved0}
          </TabPanel>
          <TabPanel header={"Assigned  " + "(" + assign1 + ")"}>
            {sortComp}
            {assign0}
          </TabPanel>
        </TabView>
      </div>
    );
  }
}

export default AdminRequest;
