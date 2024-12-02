import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import countries from './countries.json';

const Step4 = ({ register }: any) => (
    <>

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
                Palavrapasse:
                <div className="input">
                    <input type="password" className="footer-text-field w-input"  {...register("name", { required: "Nome é obrigatório" })} />
                </div>
            </label>
        </div>
        
    </>
);

export default Step4;