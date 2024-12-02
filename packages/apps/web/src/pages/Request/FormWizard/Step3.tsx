import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import countries from './countries.json';

const Step3 = ({ register }: any) => (
    <>

        <div>
            <label>
                Nome completo:
                <div className="input">
                    <input className="footer-text-field w-input"  {...register("fullName", { required: "Nome é obrigatório" })} />
                </div>
            </label>
        </div>
        <div>
            <label>
                Email:
                <div className="input">
                    <input type="email" className="footer-text-field w-input"  {...register("email", { required: "Nome é obrigatório" })} />
                </div>
            </label>
        </div>
        <div>
            <label>
                Telefone:
                <div className="input">
                    <input type="number" className="footer-text-field w-input"  {...register("name", { required: "Nome é obrigatório" })} />
                </div>
            </label>
        </div>
        <div>
            <label>
                Endereço:
                <div className="input">
                    <input type="text" className="footer-text-field w-input"  {...register("address", { required: "Nome é obrigatório" })} />
                </div>
            </label>
        </div>
        <div>
            <label>
                País:
                <div className="input">

                    <select className="footer-text-field w-input"  {...register("countryAddress", { required: "Nome é obrigatório" })} >
                        <option>Escolha uma opção</option>
                        {countries?.countries?.map(({ id, title }: any) => <option value={id}>{title}</option>)}
                    </select>
                </div>
            </label>
        </div>
    </>
);

export default Step3;