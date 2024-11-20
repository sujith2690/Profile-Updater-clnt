import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const logInApi = (formData) => API.post("/auth/login", formData);
export const signUpApi = (formData) => API.post("/auth/signUp", formData);

export const adminLogInApi = (formData) => API.post("/auth/adminLogin", formData);
export const adminSignUpApi = (formData) => API.post("/auth/adminSignUp", formData);
