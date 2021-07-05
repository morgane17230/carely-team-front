import axios from "axios";

const api = axios.create({
    baseURL: "https://carelyteam.herokuapp.com",
});

export default api;
