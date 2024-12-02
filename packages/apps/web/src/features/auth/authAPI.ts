
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { LoginCredentials, RegisterData, AuthResponse } from './types';
import axiosInstance from '../../utils/axiosInstance';

const axios = axiosInstance;

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await axios.post('/auth/sing-in', credentials);
    const user = jwt_decode(response.data.token);
    return { user, token: response.data.token, refreshToken: response.data.refreshToken, isAuthenticated: true };
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
    const response = await axios.post('/auth/sing-on', data);
    const user = jwt_decode(response.data.token);
    return { user, token: response.data.token, refreshToken: response.data.refreshToken, isAuthenticated: true };
};

export const refreshToken = async (refreshToken: string): Promise<{ token: string }> => {
    const response = await axios.post('/auth/refresh', { refreshToken });
    return { token: response.data.token };
};