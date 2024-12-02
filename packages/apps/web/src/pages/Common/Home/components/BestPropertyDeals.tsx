'use client'


import React, { useEffect, useState } from 'react'
import { BigBox } from '../../Properties/components/Box'
import { apiRequest } from '../../../../utils/api'

export default function BestPropertyDeals() {
    const [properties, setProperties] = useState<any[]>()
    const [form, setForm] = useState<any>({})
    useEffect(() => {
        apiRequest({
            endpoint: '/property',
            method: 'get',
            urlQueryParams: { page: 1, limit: 10 }
        }).then(({ data }) => setProperties(data)).catch(err => console.error(err))
    }, [])
    return (
        <>
            <div className="home-property-section" style={{ backgroundColor: '#FFF' }}>
                <div className="container-regular w-container">
                    <div className="best-property-wrap">
                        <div data-w-id="04d099c9-285a-d93d-2401-e9bd338c3266" style={{ opacity: 1 }} className="best-property-title-wrap">
                            <div className="best-property-title-block">
                                <h2 className="section-title">
                                    Melhores ofertas de imóveis
                                </h2>
                                <p className="text-large mg-0">Dê uma olhada a fundo e navegue por casas à venda, fotos originais, avaliações de moradores e insights locais para encontrar o que é certo para você.</p>
                            </div><a data-w-id="7d923f04-6358-e160-a3ce-f0d48d9e320f"
                                style={{ backgroundColor: "rgb(221,226,229)", borderColor: "rgb(221,226,229)" }} href="#"
                                className="grey-button w-inline-block">
                                <div>Explore mais</div>
                                <div
                                    style={{ transform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                                    className="button-arrow-wrap">
                                    <img
                                        src="/img/640eea960dce3ca0fd70d87c_button-arrow-orange.svg" loading="lazy" style={{ opacity: 1 }} alt="Arrow" className="primary-arrow" /><img src="/img/640ff4d7acbad56410d7df8d_button-arrow-dark-blue.svg"
                                            loading="lazy" style={{ opacity: 1 }} alt="Right Arrow" className="secondary-arrow" /></div>
                            </a>
                            <div className="featured-bg-text-wrap"><img
                                src="/img/64b22604bbc26ebaa07edd39_featured-large-text.png" loading="lazy"
                                sizes="(max-width: 479px) 93vw, (max-width: 755px) 96vw, 725px"
                                srcSet="/img/64b22604bbc26ebaa07edd39_featured-large-text-p-500.png 500w, img/64b22604bbc26ebaa07edd39_featured-large-text.png 725w"
                                alt="Featured Large Image" className="featured-large-image" />
                                <div className="featured-bg-text-blur"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="property-spacing-wrap" style={{ opacity: 1, backgroundColor: '#FFF' }}>
                <div data-w-id="5f6afeb4-9074-30fd-922d-4a5d94776108" style={{ opacity: 1, width: '100%' }} className="property-wrap">
                    <div className="property-collection-list w-dyn-list" style={{ width: '100%' }}>
                        <div role="list" className="property-collection-list w-dyn-items w-row">
                            {properties?.map((property:any) => <BigBox property={property}/>)}
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-regular w-container" style={{ backgroundColor: '#FFF' }}>
                <div className="find-home-wrap">
                    <div data-w-id="0070d68d-d74e-a0a7-b42c-ec08976e1d77" style={{ opacity: 1 }} className="w-layout-grid find-home-grid">
                        <div id="w-node-_9388b3e3-df7f-01c7-bb81-71d00463a7b3-445d3ecc" className="find-home-image-wrap"><img
                            src="/img/645dd13f50e2b484db516ddf_find-home-image-1.jpg" loading="lazy" width="461"
                            sizes="(max-width: 479px) 90vw, (max-width: 767px) 75vw, (max-width: 991px) 67vw, 461px" alt="Building"
                            srcSet="/img/645dd13f50e2b484db516ddf_find-home-image-1-p-500.jpg 500w, img/645dd13f50e2b484db516ddf_find-home-image-1-p-800.jpg 800w, img/645dd13f50e2b484db516ddf_find-home-image-1.jpg 922w"
                            className="find-home-image" />
                            <div className="find-home-top-image-wrap"><img
                                src="/img/645dd1117afaca9df84be1db_find-home-image-2.png" loading="lazy"
                                sizes="(max-width: 479px) 65vw, (max-width: 767px) 54vw, (max-width: 991px) 47vw, 408px" width="408"
                                alt="Rooftop"
                                srcSet="/img/645dd1117afaca9df84be1db_find-home-image-2-p-500.png 500w, img/645dd1117afaca9df84be1db_find-home-image-2.png 816w"
                                className="find-home-top-image" />
                                <div className="find-home-image-bg"></div>
                            </div>
                            <div className="find-home-counter-card">
                                <div className="find-home-counter-number">3470+</div>
                                <p>Negocios fechados</p>
                            </div>
                        </div>
                        <div id="w-node-ce0f8e1b-2a0f-7342-89f2-1f46987b1648-445d3ecc" className="find-home-content-wrap">
                            <h2 className="section-title">Mais de 25 anos ajudando pessoas a encontrar a casa certa</h2>
                            <p className="text-large">Nossa confiança vem do fato de que temos um entendimento preciso de todos os aspectos da cadeia imobiliária, forjado por anos de expertise em execução.</p>
                            <div className="find-home-bottom-content">
                                <div className="mg-bottom-30">
                                    <p className="text-large">Acreditamos que isso abre caminho para um vínculo duradouro com nossos clientes.</p>
                                </div>
                                <ul role="list" className="intro-list-wrap w-list-unstyled">
                                    <li className="intro-list-item">
                                        <div className="intro-list-icon"><img
                                            src="/img/64140c1adba3676940b36d25_list-tick-iocn.svg" loading="lazy" alt="Tick Icon" className="amenities-icon" /></div>
                                        <p className="intro-list-point">Nós ajudamos você a encontrar a casa dos seus sonhos</p>
                                    </li>
                                    <li className="intro-list-item">
                                        <div className="intro-list-icon"><img
                                            src="/img/64140c1adba3676940b36d25_list-tick-iocn.svg" loading="lazy" alt="Tick Icon" className="amenities-icon" /></div>
                                        <p className="intro-list-point">Obtenha suporte incrível de nossos agentes</p>
                                    </li>
                                </ul>
                                <div className="find-home-button-wrap">
                                    <a data-w-id="6a425d35-61d2-5f6c-e010-aa3ea57a86c0" style={{ backgroundColor: "rgb(21,46,63);border-color:rgb(21,46,63)" }} href="#" className="primary-button w-inline-block">
                                        <div>Saiba mais sobre nós</div>
                                        <div style={{ transform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                                            className="button-arrow-wrap">
                                            <img src="/img/640eea960dce3ca0fd70d87c_button-arrow-orange.svg" loading="lazy" style={{ opacity: 1 }} alt="Arrow" className="primary-arrow" />
                                            <img src="/img/640ff4d7acbad56410d7df8d_button-arrow-dark-blue.svg" loading="lazy" style={{ opacity: 1 }} alt="Right Arrow" className="secondary-arrow" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="featured-bg-text-wrap find-home">
                                <img
                                    src="/img/64b22604bbc26ebaa07edd39_featured-large-text.png" loading="lazy"
                                    sizes="(max-width: 479px) 99vw, (max-width: 725px) 100vw, 725px"
                                    srcSet="/img/64b22604bbc26ebaa07edd39_featured-large-text-p-500.png 500w, img/64b22604bbc26ebaa07edd39_featured-large-text.png 725w"
                                    alt="Featured Large Image" className="featured-large-image" />
                                <div className="featured-bg-text-blur"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
