'use client'

import React, { useCallback, useEffect, useState } from 'react'

import './SearchFilter.scss';
import { apiRequest } from '../../../../../utils/api';

const averagePrices = [
    [null, 100_000],
    [100_000, 200_000],
    [200_000, 500_000],
    [500_000, 1_000_000],
    [1_000_000, null],
]

export default function SearchFilterForm() {

    const [businessTypes, setBusinessTypes] = useState<any[]>()
    const [propertyCategories, setPropertyCategories] = useState<any[]>()
    const [form, setForm] = useState<any>({})
    useEffect(() => {
        apiRequest({
            endpoint: '/property/business',
            method: 'get',
            urlQueryParams: { page: 1, limit: 10 }
        }).then(({ data }) => setBusinessTypes(data)).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        apiRequest({
            endpoint: '/property/category',
            method: 'get',
            urlQueryParams: { page: 1, limit: 10 }
        }).then(({ data }) => setPropertyCategories(data)).catch(err => console.error(err))
    }, [])
    const handleFormInputChange = (key: string, value: any) => {
        const data: any = {}
        data[key] = value === "" ? undefined : value;
        setForm({ ...form, ...data })
    }
    return (
        <div id="SearchFilterForm">
            <>{JSON.stringify(form)}</>
            <div className="home-banner-tab-menu w-tab-menu">
                {businessTypes?.map(({ title, id }) => <a
                    onClick={() => handleFormInputChange('businessTypeId', id)}
                    data-w-tab="Tab 1"
                    data-w-id="d06ae5a9-80d4-27e9-6fb1-3f4b945e1a3a"
                    className="home-banner-tab-link w-inline-block w-tab-link active">
                    <div>{title}</div>
                    <div style={{ width: '90%', opacity: form?.businessTypeId === id ? 1 : 0 }} className="home-tab-active-line"></div>
                </a>
                )}

            </div>
            <div className="w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <div className="home-banner-form-block w-form">
                        <form id="email-form-3" name="email-form-2" data-name="Email Form 2" method="get" className="home-banner-form"
                            data-wf-page-id="640ecc65637b80d8445d3ecc" data-wf-element-id="57554a5c-b090-7054-f29a-52540e80091a">
                            <select id="field-4" name="field-3" data-name="Field 3" className="home-banner-form-select w-select"
                                onChange={(e: any) => handleFormInputChange('propertyCategoryId', e.target.value)}>
                                <option value={""}>Categoria</option>
                                {propertyCategories?.map(({ title, id }) =>
                                    <option value={id} >{title}</option>
                                )}
                            </select>
                            <select id="field-5" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select">
                                <option value="">Location</option>
                                <option value="First">New York</option>
                                <option value="Second">Los Angeles</option>
                                <option value="Third">California</option>
                            </select>
                            <select id="field-6" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select"
                                onChange={(e: any) => handleFormInputChange('averagePrices', averagePrices[e.target.value as number])}
                            >
                                <option value="">Average Price</option>
                                {averagePrices?.map(([from, to]: any, i: number) => <option value={i}>{from} {to}</option>)}
                            </select>
                            <a href="properties.html" className="home-form-button w-button">Browse</a>
                        </form>
                        <div className="success-message w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="error-message w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                    <div className="home-banner-form-block w-form">
                        <form id="email-form-4" name="email-form-2" data-name="Email Form 2" method="get" className="home-banner-form"
                            data-wf-page-id="640ecc65637b80d8445d3ecc" data-wf-element-id="e3b9768a-cadd-db5a-0d67-7b64e8cdbd56">
                            <select id="field-7" name="field-3" data-name="Field 3" className="home-banner-form-select w-select">
                                <option value="">Property Category</option>
                                <option value="First">Family House</option>
                                <option value="Second">Apartments</option>
                                <option value="Third">Futuristic House</option>
                            </select><select id="field-8" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select">
                                <option value="">Location</option>
                                <option value="First">New York</option>
                                <option value="Second">Los Angeles</option>
                                <option value="Third">California</option>
                            </select><select id="field-9" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select">
                                <option value="">Average Price</option>
                                <option value="First">$8,000-$10,000</option>
                                <option value="Second">$10,000-$12,000</option>
                                <option value="Third">$12,000-$15,000</option>
                            </select><a href="properties.html" className="home-form-button w-button">Browse</a>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane">
                    <div className="home-banner-form-block w-form">
                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="home-banner-form"
                            data-wf-page-id="640ecc65637b80d8445d3ecc" data-wf-element-id="afe1c4dc-6023-5909-e4a5-71fd7b26089c">
                            <select id="field-10" name="field-3" data-name="Field 3" className="home-banner-form-select w-select">
                                <option value="">Property Category</option>
                                <option value="First">Family House</option>
                                <option value="Second">Apartments</option>
                                <option value="Third">Futuristic House</option>
                            </select><select id="field-11" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select">
                                <option value="">Location</option>
                                <option value="First">New York</option>
                                <option value="Second">Los Angeles</option>
                                <option value="Third">California</option>
                            </select><select id="field-3" name="field-3" data-name="Field 3"
                                className="home-banner-form-select w-select">
                                <option value="">Average Price</option>
                                <option value="First">$8,000-$10,000</option>
                                <option value="Second">$10,000-$12,000</option>
                                <option value="Third">$12,000-$15,000</option>
                            </select><a href="properties.html" className="home-form-button w-button">Browse</a>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
