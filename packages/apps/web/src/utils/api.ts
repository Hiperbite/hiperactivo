
import axiosInstance from './axiosInstance';


const api = axiosInstance;

type ApiRequestParamsType = {
    endpoint: string,
    method: 'get' | 'delete' | 'post' | 'put' | '',
    body?: any,
    urlQueryParams?: any
}

/**
 * Generic function to make API calls with axios instance
 * @param {Object} config - Configuration for the API call
 * @param {string} config.endpoint - The API endpoint to call
 * @param {string} config.method - HTTP method (get, post, put, delete, etc.)
 * @param {Object} [config.body] - Data to send with the request (for POST, PUT, etc.)
 * @param {Object} [config.urlQueryParams] - Query parameters to include in the URL
 * @returns {Promise<any>} - Returns a promise with the API response
 */
export const apiRequest = async ({ endpoint, method, body = {}, urlQueryParams = {} }: ApiRequestParamsType) => {
    try {
        // Build query string from URL parameters if provided
        const urlSearchParams = new URLSearchParams(urlQueryParams).toString();
        const url = urlSearchParams ? `${endpoint}?${urlSearchParams}` : endpoint;

        // Configure the request based on method
        const config = {
            method,
            url,
            ...(method !== 'get' && method !== 'delete' ? { data: body } : {}),
        };

        // Make the request using axios instance
        const response = await axiosInstance(config);
        return response.data;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};
export { api };