'use client';

import { Link } from "react-router-dom";
import { Recall } from "../../../../components/Recall";


type Data = {
  page: {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
  };
  components: [
    {
      id: string;
      name: string;
      status: string;
      created_at: string;
      updated_at: string;
      position: number;
      description: string | null;
      showcase: boolean;
      start_date: string;
      group_id: null;
      page_id: string;
      group: boolean;
      only_show_if_degraded: boolean;
    }
  ];
  incidents: [];
  scheduled_maintenances: [];
  status: {
    indicator: string;
    description: string;
  };
};

export const Footer = () => {

  return (
    <>

      <section className="section footer" id="contact">
        <div className="w-layout-blockcontainer container w-container">
          <div className="footer-wrapper">
            <div className="footer-top-wrap">
              <div className="footer-top-left-wrap">
                
                  <Recall/>
                  
                <a data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526c3"
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
            <div className="footer-bottom-wrap">
              <div data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526d6" className="footer-menu-wrapper">
                <a href="#start" className="site-logo-wrap w-inline-block">
                  <b>activo.</b>
                </a>
                <div className="footer-menu-wrap">
                  <a href="#start" className="footer-menu-link">Inicio</a>
                  <a href="#howItWork" className="footer-menu-link">Como funciona</a>
                  <a href="#about" className="footer-menu-link">Sobre Nós</a>
                  <a href="#contact" className="footer-menu-link">Contactos</a>

                </div>
              </div>
              <div data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526e6" className="copy-wrap">
                <div className="copy-text">© Copyright 2024 | Developed By <a href="https://www.hiperbite.ao/"
                  target="_blank" className="site-link">Hiperbite.ao</a> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
