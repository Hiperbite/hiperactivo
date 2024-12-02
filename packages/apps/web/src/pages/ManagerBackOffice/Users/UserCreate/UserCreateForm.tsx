


import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiRequest } from '../../../../utils/api';
import Input from '../../../../components/Forms/Input';
import { Buttom, Select, TextArea } from '../../../../components/Forms';
import { useNavigate } from 'react-router-dom';

interface PropertyFormInputs {
    email: string;
    name: string;
    password: string;
    role: string;
    isActive: string;
}
export const UserCreateForm: React.FC = () => {

    const navigate = useNavigate();
    const [types, setTypes] = useState<any[]>([]);
    const [savedResponse, setSavedResponse] = useState<any>(undefined);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<PropertyFormInputs>();

    const onSubmit: SubmitHandler<PropertyFormInputs> = (data: any) =>
        formSubmit(data);

    useEffect(() => {
        if (savedResponse!==undefined) {
            reset();
            window.location.href = '/admin/users'
        }
    }, [savedResponse])

    const formSubmit = (body: PropertyFormInputs) => {
        apiRequest({
            endpoint: '/users',
            method: 'post',
            body
        }).then((data) => {
            setSavedResponse(data)
        }).catch(err => alert(JSON.stringify(err))/*console.error(err)*/)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: '0 auto', padding: 15 }}>

            <div>
                <label htmlFor="title">Nome completo</label>
                <input
                    className="form-control ps-0"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Nome completo"
                    type="text"

                    {...register("name", { required: "Name is required" })}
                >
                </input>
                <span className='error'>{errors.name && <p>{errors.name.message}</p>}</span>
            </div>

            <div>
                <label htmlFor="title">Email</label>
                <input
                    className="form-control ps-0"
                    maxLength={256}
                    data-name="email"
                    placeholder="E-mail"
                    type="email"

                    {...register("email", { required: "Email is required" })}
                >
                </input>
                <span className='error'>{errors.email && <p>{errors.email.message}</p>}</span>
            </div>

            <div>
                <label htmlFor="title">Palavra passe</label>
                <input
                    className="form-control ps-0"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Palavra-passe"
                    type="text"

                    {...register("password", { required: "Password is required" })}
                >
                </input>
                <span className="error">{errors.password && <p>{errors.password.message}</p>}</span>
            </div>

            <div>
                <label htmlFor="title">Tipo de utilizador</label>
                <select
                    className="form-control ps-0"

                    data-name="Name"

                    {...register("role", { required: "role is required" })}
                >
                    <option>USER</option>
                    <option>MANAGER</option>
                    <option>ADMIN</option>
                </select>
                <span className="error">{errors.role && <p>{errors.role.message}</p>}</span>
            </div>

            <hr />
            <button type="submit" className="btn btn-sm btn-dark btn-icon d-flex align-items-center me-2" >
                <span className="btn-inner--icon">

                </span>
                <span className="btn-inner--text">Registar novo</span>

            </button>

        </form>
    );
}
