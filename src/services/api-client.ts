import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3813250721c4ce2b8736ffff9b9d6e7",
  },
});
