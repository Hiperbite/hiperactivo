import React from 'react'

function Header() {
    return (
        <>

            <div className="banner-section">
                <div className="container-regular w-container">
                    <div className="banner-content-wrap">
                        <div className="banner-text-wrap">
                            <h1 className="banner-title">Encontre o Imóvel Ideal para Você</h1>
                            <p className="banner-text">Explore uma ampla seleção de imóveis disponíveis para venda, aluguel, troca e outras modalidades.</p>
                        </div>
                        <div className="banner-image-wrap property">
                            <img src="https://cdn.prod.website-files.com/640ecc65637b801d995d3ecb/64708cfe3f6ba168312c150b_property-banner.png" loading="lazy"
                                srcSet="https://assets-global.website-files.com/640ecc65637b801d995d3ecb/64708cfe3f6ba168312c150b_property-banner-p-500.png 500w, https://assets-global.website-files.com/640ecc65637b801d995d3ecb/64708cfe3f6ba168312c150b_property-banner.png 716w" sizes="(max-width: 479px) 43vw, (max-width: 767px) 38vw, (max-width: 991px) 50vw, (max-width: 1439px) 55vw, (max-width: 1919px) 716px, 45vw" alt="Building" className="banner-image" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
                        </div>
                    </div>
                </div>
                <div className="banner-small-circle"></div>
                <div className="banner-corner-circle"></div>
                <div className="about-page-circle"></div>
            </div>
        </>
    )
}

export default Header