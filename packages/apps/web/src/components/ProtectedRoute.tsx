import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { jwtDecode } from 'jwt-decode';


interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuth, children }: any) => {

  const location = useLocation()


  const user: any = localStorage.getItem('token')
    ? jwtDecode(localStorage.getItem('token') ?? '')
    : undefined;
  const isAuthenticated: boolean = user ? true : false;

  //const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated || isAuth) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  } else if (location.pathname.indexOf('login') > -1) {
    return <Navigate to="/" />;
  } else {

    if (user?.roles.includes('ADMIN') && window.location.href.indexOf('/my/') > -1)
      return <Navigate to="/admin/dashboard" />;
    if (user?.roles.includes('USER') && window.location.href.indexOf('/admin/') > -1)
      return <Navigate to="/my/dashboard" />;
  }

  // Render the protected component for authenticated users
  return children;
};

export default ProtectedRoute;