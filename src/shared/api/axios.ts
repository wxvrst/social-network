import axios from "axios";

export const apiPublication = axios.create({ baseURL: "/api/publication" });
export const apiUser = axios.create({ baseURL: "/api/user" });