import { Link } from "react-router-dom"


export function NavBar() {

  return (
    <>

      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" className="navbar w-nav">
        <div className="container w-container">
          <div className="nav-wrapper">
            <a href="#start" className="logo-wrap w-nav-brand">
              <b>activo.</b> </a>
            <nav role="navigation" className="nav-menu w-nav-menu">

              <div className="nav-link-wrap"><Link to="/home#start" className="nav-link w-nav-link">Inicio</Link>
              </div>

              <div className="nav-link-wrap"><Link to="/home#about" className="nav-link w-nav-link">Sobre nós</Link>
              </div>
              <div className="nav-link-wrap"><Link to="/home#howItWork" className="nav-link w-nav-link">Como funciona</Link>
              </div>
              <div className="nav-link-wrap last"><Link to="/home#contact" className="nav-link w-nav-link">Contactos</Link>
              </div>
            </nav>
            <div className="nav-button-wrapper">
              <a data-w-id="f3666362-07cc-2bc5-53b7-1809e62d284d" href="#contact"
                className="primary-button mobile-off w-inline-block">
                <div className="primary-button-text">Entrar</div>
                <div className="primary-button-arrow"></div>
              </a>
              <div data-w-id="f3666362-07cc-2bc5-53b7-1809e62d2852" className="menu-button w-nav-button">
                <div data-is-ix2-target="1" className="hamburger"
                  data-w-id="f3666362-07cc-2bc5-53b7-1809e62d2853" data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com//img/665b28992f3b8bdebe4efa3e_Hamburger%20Menu.json"
                  data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                  data-default-duration="4.083333333333333" data-duration="0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
