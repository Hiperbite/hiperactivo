import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";


const Step2 = ({ register }: any) => (

    <>
        <div>
            <label>
                Descreva o seu produto:
                <div className="input">
                    <textarea className="footer-text-field w-input"
                        type="text"
                        rows={5}
                        {...register("descriptions", { required: "Email é obrigatório" })}
                    />
                </div>
            </label>
        </div>
        <div>
            <label>
                Ficheiro:
                <label htmlFor="files" style={{ cursor: 'pointer', padding: 20, border: 'solid 1px #eee', maxWidth: 120, textAlign: 'center', backgroundColor: '#eee' }}>
                    <img src="https://img.icons8.com/pastel-glyph/64/upload--v1.png" alt="upload--v1" style={{ width: 44, height: 44 }} />
                    <br />
                    <span style={{ fontSize: 12, fontWeight: 'normal', lineHeight: 0 }}>Carregar ficheiro</span>
                </label>
                <input style={{ display: 'none' }} id={"files"} className="footer-text-field w-input"
                    type="file" accept=".pdf,.jpg,.png"
                    {...register("file", { required: "Email é obrigatório" })}
                />
            </label>
        </div>
    </>
);

export default Step2