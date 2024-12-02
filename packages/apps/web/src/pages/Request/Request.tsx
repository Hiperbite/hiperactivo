import React from 'react'
import FormWizard from './FormWizard/FormWizard'
import './Request.scss'
import { Link } from 'react-router-dom'
export const Request = () => {
    return (
        <>
            <section className="section creative" id={"Request"} style={{ backgroundColor: 'rgba(255,245,255,1)' }}>
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-top-wrap">
                        <div className="footer-top-left-wrap">
                            <div className="footer-title-wrap">
                                <div data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526bb" className="footer-single-title-wrap">
                                    <h2 className="footer-title">Proteja Suas Ideias. </h2>
                                    <Link data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526be" to="/request#Request"
                                        className="arrow-wrap w-inline-block">
                                        <div className="footer-arrow-wrapper">
                                            <div className="footer-arrow-wrap">
                                                <div className="primary-button-arrow"></div>
                                                <div className="primary-button-arrow"></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <h2 data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526c1" className="footer-title">Registre Sua
                                    Marca agora</h2>
                            </div><a data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526c3"
                                href="mailto:hiperactivo@hiperbite.ao?subject=Support"
                                className="support-mail">hiperactivo@hiperbite.ao</a>
                        </div>
                        <div data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526c5" className="footer-top-right-wrap">
                            <a href="https://facebook.com/" target="_blank" className="footer-social-wrap w-inline-block">
                                <div className="footer-social-icon"></div>
                            </a>
                            <a href="https://linkedin.com/" target="_blank" className="footer-social-wrap w-inline-block">
                                <div className="footer-social-icon"></div>
                            </a>
                            <a href="https://instagram.com/" target="_blank" className="footer-social-wrap w-inline-block">
                                <div className="footer-social-icon"></div>
                            </a>
                        </div>
                    </div>
                    <div className="creative-wrapper"  >

                        <div data-w-id="ccba916f-4124-d7c6-68b9-5db1c9b896db" style={{ opacity: 1 }} className="creative-image-wrap">
                            <img src="/img/665e2c7f6eb00fe97664ed63_Project Image 06.webp" loading="lazy"
                                sizes="(max-width: 479px) 94vw, (max-width: 991px) 96vw, 411.9921875px"
                                srcSet="/img/66603f3280baa631345539e8_Creative Image-p-500.webp 500w, /img/66603f3280baa631345539e8_Creative Image-p-800.webp 800w, /img/66603f3280baa631345539e8_Creative Image.webp 824w"
                                alt="Creative Image" className="creative-image" /></div>
                        <div className="creative-details-wrap" style={{ width: '90%' }}>
                            <FormWizard />
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}
