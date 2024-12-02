import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../features/auth/authSlice';
import { LoginCredentials } from '../../../features/auth/types';
import { AppDispatch, RootState } from '../../../app/store';

import { useSelector } from 'react-redux';

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const dispatch = useDispatch<AppDispatch>();

  const auth = useSelector((state: RootState) => state?.auth);

  useEffect(() => {
    if (auth.user?.email) {
      window.location.href = '/my/dashboard';
    }
  }, [auth.user?.email])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <>
      
      {auth?.error?.error?.code==='ERR_NETWORK' &&
        <div className="alert alert-danger" role="alert">
          {auth?.error?.error?.message}
        </div>
      }
      {auth?.error?.error?.code==='ERR_BAD_REQUEST' &&
        <div className="alert alert-info" role="alert">
          Credenciais inválidas, certifique que colocou o Email/ palavra-passe correctamente
        </div>
      }
      <form role="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Insira seu endereço de e-mail"
            aria-label="Email"
            aria-describedby="email-addon"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>
        <label>Palavra-passe</label>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Digite a senha"
            aria-label="Password"
            aria-describedby="password-addon"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="form-check form-check-info text-left mb-0">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="font-weight-normal text-dark mb-0" htmlFor="flexCheckDefault">
              Lembre-se por 14 dias
            </label>
          </div>
          <a href="javascript:;" className="text-xs font-weight-bold ms-auto">Esqueceu sua senha?</a>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-100 mt-4 mb-3">Sign in</button>
          <button type="button" className="btn btn-white btn-icon w-100 mb-3">
            <span className="btn-inner--icon me-1">
              <img className="w-5" src="../assets/img/logos/google-logo.svg" alt="google-logo" />
            </span>
            <span className="btn-inner--text">Entrar com o Google</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;