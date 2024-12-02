
import React from 'react'
import SearchFilter from '../../Properties/components/SearchFilter/SearchFilter'

export default function Barnner() {
  return (
    <div className="home-banner-section" style={{paddingTop:'7em'}}>
        
        <div className="container-regular w-container">
          <div className="home-banner-content-wrap">
            <h1 className="banner-title">Descubra um lugar onde você vai adorar viver</h1>
            <p className="banner-text"></p>
            <div className="home-banner-button-wrap"><a data-w-id="2b9490f3-359f-1deb-9703-71b88c7ab8c3"
              style={{ backgroundColor: "rgb(255,255,255)", borderColor: "rgb(255,255,255)" }} href="properties.html"
              className="banner-button w-inline-block">
              <div>Get Started</div>
              <div className="button-arrow-wrap"><img
                src="/img/640ff4d7acbad56410d7df8d_button-arrow-dark-blue.svg" loading="lazy"
                style={{transform:"translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}}
                alt="Right Arrow" className="primary-arrow" /></div>
            </a></div>
          </div>
          <div className="banner-image-wrap home"><img src="/img/64708390eb26aa9e17c565b7_home-banner.png"
            loading="lazy"
            sizes="(max-width: 767px) 60vw, (max-width: 991px) 63vw, (max-width: 1279px) 70vw, (max-width: 1439px) 77vw, (max-width: 1919px) 70vw, 65vw"
            srcSet="/img/64708390eb26aa9e17c565b7_home-banner-p-500.png 500w, img/64708390eb26aa9e17c565b7_home-banner.png 1206w"
            alt="Building" className="banner-image" /></div>
        </div>
        <div className="banner-small-circle home"></div>
        <div className="banner-corner-circle"></div>
        <div className="home-banner-circle"></div>
        <div className="home-banner-tab-wrap">
          <SearchFilter/>
        </div>
      </div>
  )
}
