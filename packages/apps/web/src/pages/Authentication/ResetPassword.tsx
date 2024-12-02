import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const axios = axiosInstance;

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      return;
    }
    try {
      await axios.post('/auth/reset-password', { token, password });
      setMessage('Password has been reset.');
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;