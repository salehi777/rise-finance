import api from "./api";

export const authLoginApi = (body) => api.post("auth/login", body);

export const authSignupApi = (body) => api.post("auth/signup", body);

export const authRefreshApi = (body) => api.post("auth/refresh/", body);
