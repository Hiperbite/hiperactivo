
import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';
const API_KEY = 'your_api_key'; // Replace with your actual API key

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to get access token (e.g., from local storage)
const getAccessToken = () => localStorage.getItem('token');
const setAccessToken = (token:any) => localStorage.setItem('access_token', token);
const getRefreshToken = () => localStorage.getItem('refresh_token');

// Request Interceptor to Add API Key and Access Token
axiosInstance.interceptors.request.use(
  (config) => {
    // Add API key to headers
    //  config.headers['X-API-KEY'] = API_KEY;

    // Add Authorization token
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Variable to track refresh token request
let isRefreshing = false;
let failedQueue:any[] = [];

// Helper to process failed requests
const processQueue = (error:any, token:any = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

// Response Interceptor to Handle Errors
axiosInstance.interceptors.response.use(
  (response) => response, // Return response if successful
  async (error) => {
    const originalRequest = error.config;

    // Check for 401 or 403 errors
    if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue requests
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the token
        const refreshToken = getRefreshToken();
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refresh_token: refreshToken });

        // Update the access token and retry the failed requests
        const newAccessToken = response.data.access_token;
        setAccessToken(newAccessToken);

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);

        // Retry the original request with the new token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);

        // Optionally: Logout or redirect to login if refresh fails
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;