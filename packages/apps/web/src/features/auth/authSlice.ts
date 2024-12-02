import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { login, register, refreshToken } from './authAPI';
import { AuthState, LoginCredentials, RegisterData } from './types';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  status: 'idle',
  error: null,
  isAuthenticated: false,
  loading: false
};

// Async actions
export const loginUser = createAsyncThunk('auth/login', async (credentials: LoginCredentials) => {
  return await login(credentials);
});

export const registerUser = createAsyncThunk('auth/register', async (data: RegisterData) => {
  return await register({ ...data, role: 'USER' });
});

export const refreshAuthToken = createAsyncThunk('auth/refreshToken', async (token: string) => {
  return await refreshToken(token);
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = jwt_decode(state.token);
      state.error = null;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: any; token: string; refreshToken: string }>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: any; token: string; refreshToken: string }>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action;
      })
      .addCase(refreshAuthToken.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      });
  },
});

export const { logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;