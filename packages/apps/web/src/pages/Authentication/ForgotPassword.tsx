import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const axios = axiosInstance;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/auth/forgot-password', { email });
      setMessage('Password reset link sent to your email.');
    } catch (error) {
      setMessage('Error sending password reset link.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;