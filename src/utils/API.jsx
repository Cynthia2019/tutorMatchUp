import axios from "axios";

export default axios.create({
  baseURL:'https://tutor-matchp-12080.herokuapp.com',
  responseType: "json"
});