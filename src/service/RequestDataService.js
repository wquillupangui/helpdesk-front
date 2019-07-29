import axios from "axios";
import { conf } from "../Config.js";

const CUSTOMER_API_URL = conf.url.API_URL + "/request";

class RequestDataService {
  put(payload) {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/new`;
    return axios
      .put(PARENT_API_URL, payload)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getActive() {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/active`;
    return axios
      .get(PARENT_API_URL)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  postApprove(payload) {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/approve`;
    return axios
      .post(PARENT_API_URL, payload)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  postAssign(payload) {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/assign`;
    return axios
      .post(PARENT_API_URL, payload)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTable0() {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/table0`;
    return axios
      .get(PARENT_API_URL)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTable1() {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/table1`;
    return axios
      .get(PARENT_API_URL)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default new RequestDataService();
