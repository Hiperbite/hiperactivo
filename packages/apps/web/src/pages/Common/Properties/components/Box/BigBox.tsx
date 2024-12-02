import React from 'react'

export default function BigBox({ property }: any) {
    return (
        <div role="listitem" className="property-item w-dyn-item w-col w-col-3">
            <div className="property-card"><a href="property/whispering-oaks.html"
                className="property-image-wrap w-inline-block"><img alt="Buildings" loading="lazy"
                    src="/img/64634379b56f29d8c91d6622_property-image-3.jpg"
                    sizes="(max-width: 479px) 86vw, (max-width: 991px) 400px, (max-width: 1279px) 37vw, (max-width: 1439px) 28vw, (max-width: 1919px) 27vw, 25vw"
                    srcSet="/img/64634379b56f29d8c91d6622_property-image-3-p-500.jpg 500w, 6417f2ffd039699811a0ce25/64634379b56f29d8c91d6622_property-image-3.jpg 734w"
                    className="property-image" /></a>
                <div className="property-content-wrap">
                    <p className="property-price">$5200</p><a href="property/whispering-oaks.html"
                        className="property-title">{property?.title}</a>
                    <p>789, Pleasantville, USA 54321</p>
                    <div className="property-divider-line"></div>
                    <div className="property-details-wrap">
                        <div className="property-details"><img
                            src="/img/6418000ec7afb78d82831190_bedroom-icon.svg" loading="lazy"
                            alt="Bedroom icon" className="amenities-icon" />
                            <p className="property-details-text">3bd</p>
                        </div>
                        <div className="property-details-divider"></div>
                        <div className="property-details"><img
                            src="/img/641800bc4e0fbd805db94d67_bathtub-icon.svg" loading="lazy"
                            alt="Bathtub Icon" className="amenities-icon" />
                            <p className="property-details-text">4bs</p>
                        </div>
                        <div className="property-details-divider"></div>
                        <div className="property-details"><img
                            src="/img/641800f54e0fbd084cb94fb8_scale-icon.svg" loading="lazy"
                            alt="Scale" className="amenities-icon" />
                            <p className="property-details-text">1100m²</p>
                        </div>
                    </div>
                </div><a href="property-category/sale.html" className="property-category w-button">Sale</a>
            </div>
        </div>
    )
}
