import axios from "axios";

const api = axios.create({
    baseURL: "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1",
});

export { api };