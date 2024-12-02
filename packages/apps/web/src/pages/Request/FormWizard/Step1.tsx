import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import countries from './countries.json';
import { apiRequest } from "../../../utils/api";
const Step1 = ({ register, errors }: any) => {
  const [serviceTypes, setServiceTypes] = useState<any>({})
  useEffect(() => {
    apiRequest({
      endpoint: '/service-types?sort[0]=title:asc&filters[active][$eq]=true',
      method: 'get',
    }).then(setServiceTypes)
  }, [])

  return (<>
    <div>
      <label>
        Tipo de Marca:
        <div className="input">
          <select className="footer-text-field w-input"  {...register("tipo", { required: "Nome é obrigatório" })} >
            <option value={undefined}>Escolha uma opção</option>
            {serviceTypes?.data?.map(({ id, title }: any) => <option value={id}>{title}</option>)}
          </select>
        </div>
        {errors?.tipo && <p style={{ color: "red" }}>{errors?.tipo.message}</p>}
      </label>
    </div>
    <div>
      <label>
        Nome da Marca:
        <div className="input">
          <input className="footer-text-field w-input"  {...register("name", { required: "Nome é obrigatório" })} />
        </div>
        {errors?.name && <p style={{ color: "red" }}>{errors?.name.message}</p>}
      </label>
    </div>

    <div>
      <label>
        Onde deseja Registar:
        <div className="input">

          <select className="footer-text-field w-input"  {...register("country", { required: "Nome é obrigatório" })} >
            <option>Escolha uma opção</option>
            {countries?.countries?.map(({ id, title }: any) => <option value={id}>{title}</option>)}
          </select>
        </div>
      </label>
    </div>
  </>)
}

export default Step1;


