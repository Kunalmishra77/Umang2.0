import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const leadApi = {
  submitCallback: (data) => api.post('/callback', data),
  submitAppointment: (data) => api.post('/appointment-request', data),
  submitContact: (data) => api.post('/contact-inquiry', data),
  submitInsuranceInquiry: (data) => api.post('/insurance-inquiry', data),
};

export const cmsApi = {
  getStats: () => api.get('/stats'),
  getPages: (slug) => api.get(`/pages/${slug}`),
  getDoctors: () => api.get('/doctors'),
  getIcuUnits: () => api.get('/icu'),
};

export default api;
