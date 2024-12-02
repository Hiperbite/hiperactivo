import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiRequest } from '../../../../utils/api';
import Input from '../../../../components/Forms/Input';
import { Buttom, Select, TextArea } from '../../../../components/Forms';
import { useNavigate } from 'react-router-dom';

interface PropertyFormInputs {
    title: string;
    descriptions: string;
    categoryId: string;
    location: string;
}
export const PropertiesRegisterForm: React.FC = () => {

    const navigate = useNavigate();
    const [types, setTypes] = useState<any[]>([]);
    const [savedResponse, setSavedResponse] = useState<any>({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm<PropertyFormInputs>();

    const onSubmit: SubmitHandler<PropertyFormInputs> = (data: any) =>
        formSubmit(data);

    useEffect(() => {
        if (savedResponse?.id) {
            reset();
            navigate('/my/properties/' + savedResponse?.id)
        }
    }, [savedResponse])

    const formSubmit = (body: PropertyFormInputs) => {
        apiRequest({
            endpoint: '/property',
            method: 'post',
            body
        }).then((data) => {
            setSavedResponse(data)
        }).catch(err => alert(JSON.stringify(err))/*console.error(err)*/)
    }
    useEffect(() => {
        apiRequest({
            endpoint: '/property/category',
            method: 'get',
            urlQueryParams: { page: 1, limit: 6 }
        }).then(({ data }) => {
            setTypes(data)
        }).catch(err => console.error(err))
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>

            <div>
                <label htmlFor="title">Título</label>
                <input
                    className="page-contact-form-text-field w-input"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Titulo da propriedade"
                    type="text"

                    {...register("title", { required: "Title is required" })}
                >
                </input>
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div>
                <label htmlFor="categoryId">Tipo</label>
                <select id="categoryId" {...register("categoryId", { required: "Type is required" })}
                    className="home-banner-form-select w-select"
                    style={{
                        width: '100%',
                        border: "1px solid #c3d5de",
                        backgroundColor: '#FFF'

                    }}>
                    <option value="">Select Type</option>
                    {types?.map(({ id, title }: any) => <option value={id}>{title}</option>)}
                </select>
                {errors.categoryId && <p>{errors.categoryId.message}</p>}
            </div>

            <div>
                <label htmlFor="description">Descrição</label>
                <textarea
                    className="page-contact-form-text-area w-input" spellCheck="false"
                    {...register("descriptions", { required: "Description is required", minLength: 100 })}
                />
                {errors.descriptions && <p>{errors.descriptions.message}</p>}
            </div>


            <div>
                <label htmlFor="location">Location</label>
                <input
                    className="page-contact-form-text-field w-input"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Titulo da propriedade"
                    type="text"

                    {...register("location", { required: "Location is required" })}
                />

                {errors.location && <p>{errors.location.message}</p>}
            </div>

            <Buttom type="submit" value={"Registar"} />
        </form>
    );
}
