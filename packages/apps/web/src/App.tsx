import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import Dashboard from './pages/UserBackOffice/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './pages/Common/Layout/Index';
import Properties from './pages/Common/Properties/Properties';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './features/auth/authSlice';
import { UserBackOffice } from './pages/UserBackOffice/UserBackOffice';
import { UserBackOfficeLayout } from './pages/UserBackOffice/UserBackOfficeLayout';
import { UserBackOfficeRoutes } from './pages/UserBackOffice/UserBackOfficeRoutes';
import Logon from './pages/Authentication/Logon/Logon';
import { AuthenticationLayout } from './pages/Authentication/AuthenticationLayout';
import { ManagerBackOfficeRoutes } from './pages/ManagerBackOffice/ManagerBackOfficeRoutes';
import { ManagerBackOfficeLayout } from './pages/ManagerBackOffice/ManagerBackOfficeLayout';
import Home from './pages/Home';
import Request from './pages/Request';


const App: React.FC = () => {

  

  const dispatch = useDispatch();
  useEffect(() => {
    // Retrieve auth data from localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // If there is a token and user in storage, dispatch to store
      dispatch(loginSuccess({ token }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <Layout />
        }>
          <Route path="/*" element={
            <>
              <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="properties" element={<Properties />} />
                <Route path="/home" element={<Home />} />
                <Route path="/request" element={<Request />} />
                <Route path="/login" element={<AuthenticationLayout><Login /></AuthenticationLayout>} />
                <Route path="/logon" element={<AuthenticationLayout><Logon /></AuthenticationLayout>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
              </Routes>
            </>
          } />

        </Route>
        <Route path="/my" element={
          <ProtectedRoute>
            <UserBackOfficeLayout />
          </ProtectedRoute>
        }>
          <Route path="/my/*" element={<UserBackOfficeRoutes />} />
        </Route>


        <Route path="/admin/" element={
          <ProtectedRoute>
            <ManagerBackOfficeLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin/*" element={<ManagerBackOfficeRoutes />} />
        </Route>
        <Route path="/*" element={<>None</>} />
      </Routes>
    </Router>
  );
};

export default App;