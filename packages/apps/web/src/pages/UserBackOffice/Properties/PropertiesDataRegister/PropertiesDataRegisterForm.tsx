import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiRequest } from '../../../../utils/api';
import Input from '../../../../components/Forms/Input';
import { Buttom, Select, TextArea } from '../../../../components/Forms';
import { useNavigate } from 'react-router-dom';

import './PropertiesDataRegister.scss';

interface PropertyFormInputs {
  detail: string;
  property: string; // Assuming 'Property' is a string, change type if different
  state: number;
  furnished: boolean;
  bathrooms: number;
  bedrooms: number;
  balconies: number;
  office: number;
  waterTank: number;
  generator: boolean;
  privateParking: boolean;
  airConditioning: string;
  extras: string;
  security: string;
  livingRoom: number;
  kitchen: number;
  bedroom: number;
  bathroom: number;
  diningRoom: number;
  laundryRoom: number;
  garage: boolean;
  garden: boolean;
  backyard: boolean;
  corridors: number;
  attic: boolean;
  basement: boolean;
  propertyId: string;
}
export const PropertiesDataRegisterForm = ({ propertyData }: any) => {

  const navigate = useNavigate();

  const [savedResponse, setSavedResponse] = useState<any>({});
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PropertyFormInputs>({
    defaultValues: {
      ...propertyData
    }
  });

  const onSubmit: SubmitHandler<PropertyFormInputs> = (data: any) =>
    formSubmit({ ...data, ...propertyData });

  useEffect(() => {
    if (savedResponse?.id) {
      reset();
      window.location.href = '/my/properties/' + savedResponse?.id;
    }
  }, [savedResponse])

  const formSubmit = (body: PropertyFormInputs) => {
    apiRequest({
      endpoint: '/property/data',
      method: propertyData?.createdAt ? 'put' : 'post',
      body
    }).then((data) => {
      setSavedResponse(data)
    }).catch(err => console.error(err))
  }

  return (
    <form id="PropertiesDataRegister" onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
      <div className='row'>
        <div className='col-md-4'>
          <label className="container">
            State:
            <select id="state" {...register("state", { required: "Type is required" })}
              className="home-banner-form-select w-select"
              style={{
                width: '100%',
                border: "1px solid #c3d5de",
                backgroundColor: '#FFF'

              }}>
              <option value="">Select Type</option>
              {['Novo', 'Moderado', 'Antigo']?.map((text: string, i: number) => <option value={i}>{text}</option>)}
            </select>
            {errors.state && <p>State is required.</p>}
          </label>
        </div>

        <div className='col-md-4'>
          <label className="container">
            Bathrooms:
            <select id="categoryId" {...register("bathrooms", { required: "Type is required" })}
              className="home-banner-form-select w-select"
              style={{
                width: '100%',
                border: "1px solid #c3d5de",
                backgroundColor: '#FFF'

              }}>
              <option value="">Select Type</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i: number) => <option value={i}>{i}</option>)}
            </select>
          </label>
          {errors.bathrooms && <p>Bathrooms are required.</p>}
        </div>

        <div className='col-md-4'></div>

        <div className='col-md-4'>
          <label className="container">
            Bedrooms:
            <select id="categoryId" {...register("bedrooms", { required: "Type is required" })}
              className="home-banner-form-select w-select"
              style={{
                width: '100%',
                border: "1px solid #c3d5de",
                backgroundColor: '#FFF'

              }}>
              <option value="">Select Type</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i: number) => <option value={i}>{i}</option>)}
            </select>

          </label>
          {errors.bedrooms && <p>Bedrooms are required.</p>}
        </div>

        <div className='col-md-4'>
          <label className="container">
            Living Room:
            <select id="categoryId" {...register("livingRoom", { required: "Type is required" })}
              className="home-banner-form-select w-select"
              style={{
                width: '100%',
                border: "1px solid #c3d5de",
                backgroundColor: '#FFF'

              }}>
              <option value="">Select Type</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i: number) => <option value={i}>{i}</option>)}
            </select>
          </label>
        </div>


        <div className='col-md-4'>
          <label className="container">
            Kitchen:
            <select id="categoryId" {...register("kitchen", { required: "Type is required" })}
              className="home-banner-form-select w-select"
              style={{
                width: '100%',
                border: "1px solid #c3d5de",
                backgroundColor: '#FFF'

              }}>
              <option value="">Select Type</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i: number) => <option value={i}>{i}</option>)}
            </select>
          </label>
        </div>
      </div>
      <div className='row'>

        {/* Add more fields similarly */}

        <div className='col-md-4'>
          <label className="checkbox-container">
            Generator:
            <input type="checkbox" {...register('generator')} />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className='col-md-4'>
          <label className="checkbox-container">
            Furnished
            <input type="checkbox" {...register('furnished')} />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className='col-md-4'>
          <label className="checkbox-container">
            Private Parking:
            <input type="checkbox" {...register('privateParking')} />
            <span className="checkmark"></span>
          </label>
        </div>


        <div className='col-md-4'>
          <label className="checkbox-container">
            Air Conditioning:
            <input type="checkbox" {...register('airConditioning')} />
            <span className="checkmark"></span>
          </label>
        </div>


        <div className='col-md-4'>
          <label className="checkbox-container">
            Garden:
            <input type="checkbox" {...register('garden')} />
            <span className="checkmark"></span>
          </label>
        </div>


        <div className='col-md-4'>
          <label className="checkbox-container">
            Basement:
            <input type="checkbox" {...register('basement')} />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <hr />
      <div className='row'>

        <div className='col-md-4'>
          <label className="container">
            Extras:
            <input
              className="page-contact-form-text-field w-input"
              maxLength={256}
              data-name="Name"
              placeholder="Titulo da propriedade"
              type="text"
              {...register('extras')} />
          </label>
        </div>


        <div className='col-md-4'>
          <label className="container">
            Security:
            <input
              className="page-contact-form-text-field w-input"
              maxLength={256}
              data-name="Name"
              placeholder="Titulo da propriedade"
              type="text"
              {...register('security')} />
          </label>
        </div>

        <div className='col-md-4'>
          <label className="container">
            Detail:
            <input
              className="page-contact-form-text-field w-input"
              maxLength={256}
              data-name="Name"
              placeholder="Titulo da propriedade"
              type="text"
              {...register('detail', { required: true })} />
            {errors.detail && <p>Detail is required.</p>}
          </label>
        </div>
        <Buttom type="submit" value={"Registar"} />
      </div>
    </form>
  );
}
