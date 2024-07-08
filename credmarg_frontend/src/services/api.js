import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    auth: {
      username: 'admin',
      password: 'password'
    }
  });

export const getAllEmployees = () => api.get(`${API_URL}/employee/getAllEmployees`);
export const getAllVendors = () => api.get(`${API_URL}/vendor/getAllVendors`);
export const createEmployee = (employee) => api.post(`${API_URL}/employee/save`, employee);
export const createVendor = (vendor) => api.post(`${API_URL}/vendor/save`, vendor);
export const checkEmailExists = (email) => api.get(`${API_URL}/emails/check-email/${email}`);
export const getAllSentEmails = () => api.get(`${API_URL}/sent-emails`);
export const getEmpByName = (name) => api.get(`${API_URL}/employee/emp/${name}`);
export const sendEmails = (email, message) => api.post(`${API_URL}/emails/send`, null, {
    params: {
        email: email,
        message: message
    }
});
