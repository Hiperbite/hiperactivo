import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>

            <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-black text-dark display-6">Login</h3>
                    <p className="mb-0">Seja Bem-vindo de volta! Insira seus dados.</p>
                </div>
                <div className="card-body">
                    <LoginForm/>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-xs mx-auto">
                        Não tem uma conta?
                        <Link to={"/logon"} className="text-dark font-weight-bold">Inscrever-se</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
