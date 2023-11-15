import axios from "axios";

const usersApi = axios.create({
 baseURL: "https://my-json-server.typicode.com/sazukeR/database",
});

export default usersApi;
