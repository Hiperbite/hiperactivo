export interface AuthState {
  user: any | null;
  token: string | null;
  refreshToken: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | any;
  isAuthenticated: boolean,
  loading: boolean
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  role?: string
}

export interface AuthResponse {
  user: any;
  token: string;
  refreshToken: string;
  isAuthenticated: boolean
}