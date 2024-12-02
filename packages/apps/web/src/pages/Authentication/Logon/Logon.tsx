import React from 'react'
import LoginForm from './LogonForm'
import { Link } from 'react-router-dom'

export default function Logon() {
    return (
        <>

            <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-black text-dark display-6">Crie a sua conta</h3>
                    <p className="mb-0">Prazer em conhecê-lo! Por favor, insira seus detalhes.</p>
                </div>
                <div className="card-body">
                    <LoginForm/>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-xs mx-auto">
                        Já tem uma conta?
                        <Link to={"/login"} className="text-dark font-weight-bold">Entrar</Link>
                    </p>
                </div>
            </div>

        </>
    )
}
