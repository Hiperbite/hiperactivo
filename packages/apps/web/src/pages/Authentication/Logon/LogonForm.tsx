import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../features/auth/authSlice';
import { RegisterData } from '../../../features/auth/types';
import { AppDispatch, RootState } from '../../../app/store';

import { useSelector } from 'react-redux';

const LogonForm: React.FC = () => {
  const [credentials, setCredentials] = useState<RegisterData>({ email: '', password: '', name: '' });
  const dispatch = useDispatch<AppDispatch>();

  const auth = useSelector((state: RootState) => state?.auth);

  useEffect(() => {
    if (auth.user?.email) {
      window.location.href = '/my/dashboard';
    }
  }, [auth.user?.email])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(credentials));
  };

  return (
    <>

      {auth?.error && <div className="shadow-none p-3 mb-5 bg-body-tertiary rounded">E-mail e/ou palavra-passe errada, certifique que escreveu correctamente</div>}
      <form role="form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            aria-label="Name"
            aria-describedby="name-addon"
            value={credentials.name}
            onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
          />
        </div>
        <label>Endereço de email</label>
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
            placeholder="Criar uma palavra-passe"
            aria-label="Password"
            aria-describedby="password-addon"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        </div>
        <div className="form-check form-check-info text-left mb-0">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="font-weight-normal text-dark mb-0" htmlFor="flexCheckDefault">
            Eu concordo com o<a href="javascript:;" className="text-dark font-weight-bold">Termos e Condições</a>.
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-100 mt-4 mb-3">Registrar</button>
          <button type="button" className="btn btn-white btn-icon w-100 mb-3">
            <span className="btn-inner--icon me-1">
              <img className="w-5" src="../assets/img/logos/google-logo.svg" alt="google-logo" />
            </span>
            <span className="btn-inner--text">Cadastre-se com o Google</span>
          </button>
        </div>
      </form>

    </>
  );
};

export default LogonForm;