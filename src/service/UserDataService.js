import axios from "axios";
import { conf } from "../Config.js";

const CUSTOMER_API_URL = conf.url.API_URL + "/user";

class UserDataService {
  post(payload) {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/login`;
    return axios
      .post(PARENT_API_URL, payload)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTech() {
    var PARENT_API_URL = `${CUSTOMER_API_URL}/tech`;
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

export default new UserDataService();
