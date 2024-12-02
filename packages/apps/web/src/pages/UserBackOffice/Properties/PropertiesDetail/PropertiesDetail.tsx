import React, { useEffect, useState } from 'react'
import { apiRequest } from '../../../../utils/api'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import { PropertiesDataRegister } from '../PropertiesDataRegister/PropertiesDataRegister';

export const PropertiesDetail = () => {

    const [showPropertyData, setShowPropertyData] = useState<boolean>(false);
    const { id } = useParams();
    const [property, setProperty] = useState<any>()
    const [propertyData, setPropertyData] = useState<any>({})



    useEffect(() => {
        apiRequest({
            endpoint: '/property/' + id,
            method: 'get',
            urlQueryParams: { page: 1, limit: 10 }
        }).then((data) => setProperty(data)).catch(err => console.error(err))
        apiRequest({
            endpoint: '/property/data/' + id,
            method: 'get',
            urlQueryParams: { page: 1, limit: 10 }
        }).then((data) => setPropertyData(data)).catch(err => console.error(err))
    }, [id])

    return (
        <>
            <div className="blog-single-wrap">
                <h5>
                    <b>#{property?.code?.toUpperCase()}</b>
                </h5>
                <h4>
                    {property?.title}
                </h4>
                <div data-w-id="072ddd8d-1b59-45d5-3412-9f45bec98201" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="relative-wrap">
                    <img src="https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/642d329ade81f802c1e6bef0_blog-single-image-1.jpg" loading="lazy" alt="" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 1279px) 95vw, 1200px" srcSet="https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/642d329ade81f802c1e6bef0_blog-single-image-1-p-500.jpg 500w, https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/642d329ade81f802c1e6bef0_blog-single-image-1-p-800.jpg 800w, https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/642d329ade81f802c1e6bef0_blog-single-image-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/642d329ade81f802c1e6bef0_blog-single-image-1.jpg 1200w" className="blog-single-image" />
                    <p className="blog-date">{moment(property?.createdAt).format('DD [de] MMMM [de] YYYY')}</p>
                </div>
                <div className="shadow-none p-3 mb-5 bg-body-tertiary rounded">
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3>Prices</h3>
                        </div>
                        <div className='col-md-6'>
                            <div className="property-details-wrap">
                                <div className="property-details"><img
                                    src="/img/6418000ec7afb78d82831190_bedroom-icon.svg" loading="lazy"
                                    alt="Bedroom icon" className="amenities-icon" />
                                    <p className="property-details-text">{propertyData?.bedrooms}bd</p>
                                </div>
                                <div className="property-details-divider"></div>
                                <div className="property-details"><img
                                    src="/img/641800bc4e0fbd805db94d67_bathtub-icon.svg" loading="lazy"
                                    alt="Bathtub Icon" className="amenities-icon" />
                                    <p className="property-details-text">{propertyData?.bathrooms}bs</p>
                                </div>
                                <div className="property-details-divider"></div>
                                <div className="property-details"><img
                                    src="/img/641800f54e0fbd084cb94fb8_scale-icon.svg" loading="lazy"
                                    alt="Scale" className="amenities-icon" />
                                    <p className="property-details-text">{propertyData?.bedrooms}50m²</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-w-id="6b873132-a6c7-03d0-31c0-94de52bcfe90" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="blog-author-line-wrap">
                    <div className="blog-author-wrap">
                        <h4>Descrição</h4>
                    </div>
                    <div className="blog-author-wrap">
                        <p className="blog-author-text">
                            {property?.descriptions}
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <button onClick={() => setShowPropertyData(true)} className="footer-button w-button">Editar</button></div>
                    <div className='col-md-4'>

                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action">Quartos
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.bedrooms}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Sala de estar
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.livingRoom}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Sala de Jantar
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.diningRoom}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Casa de banho
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.bathrooms}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Varandas
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.kitchen}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Escritorio
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.office}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Cozinhas
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.kitchen}</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action">Tanque de água
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.waterTank}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Lavandaria
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.laundryRoom}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Sala de Jantar
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.diningRoom}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Jardim
                                {propertyData?.garden
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Quintal
                                {propertyData?.backyard
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Sotão
                                {propertyData?.attic
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Porão
                                {propertyData?.basement
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }
                            </button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action">Mobiliado

                                {propertyData?.furnished
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Gerador electrico
                                {propertyData?.generator
                                    ? <span className="badge text-bg-success " style={{ float: 'right' }}>Sim</span>
                                    : <span className="badge text-bg-secondary " style={{ float: 'right' }}>Não</span>
                                }</button>
                            <button type="button" className="list-group-item list-group-item-action">Ar condicionado
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.airConditioning}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Segurança
                                <span className="badge text-bg-success " style={{ float: 'right' }}>{propertyData?.security}</span>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Estacionamento</button>
                            <button type="button" className="list-group-item list-group-item-action">Extras</button>
                        </div>
                    </div>
                    <div>
                        <p className="blog-author-text" style={{ fontSize: 12 }}>{propertyData?.detail}</p></div>
                    <PropertiesDataRegister data={{ ...propertyData, propertyId: property?.id }} show={showPropertyData} setShow={setShowPropertyData} />
                </div>
                <div data-w-id="b481b304-0042-9970-8273-302cf33dbc63" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="blog-rich-text-wrap">
                    <div className="blog-rich-text w-richtext">
                        {propertyData?.details}
                    </div>
                </div>
                <div data-w-id="6b873132-a6c7-03d0-31c0-94de52bcfe90" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="blog-author-line-wrap">
                    <div className="blog-author-wrap">
                        <a href="/blog-authors/olivia-johnson" className="blog-author-image-wrap w-inline-block">
                            <img loading="lazy" width="92" src="https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/646f26fbdd3ac063674214d0_blog-author-image-2.jpg" alt="Portrait" className="blog-author-image" />
                        </a>
                        <div className="blog-author-block">
                            <a href="/blog-authors/olivia-johnson" className="blog-author-name">{property?.user?.email}</a>
                            <p className="blog-author-text">My mission is to provide you with valuable insights, expert advice, and actionable tips to help you make informed decisions and thrive in the dynamic realm of property ownership.</p>
                            <div className="blog-author-social-wrap">
                                <a href="https://www.twitter.com" target="_blank" className="blog-author-social-link w-inline-block">
                                    <img src="https://cdn.prod.website-files.com/640ecc65637b801d995d3ecb/656562e7f44083b5a028a432_twitter-icon.svg" loading="lazy" alt="Social Icon" className="amenities-icon" />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" className="blog-author-social-link w-inline-block">
                                    <img src="https://cdn.prod.website-files.com/640ecc65637b801d995d3ecb/642d412934d7f3203d3a1be7_facebook-icon.svg" loading="lazy" alt="Facebook Icon" className="blog-facebook-icon" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" className="blog-author-social-link w-inline-block">
                                    <img src="https://cdn.prod.website-files.com/640ecc65637b801d995d3ecb/642d4133e2d90c10c45ce815_insta-icon.svg" loading="lazy" alt="Instagram Icon" className="amenities-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
