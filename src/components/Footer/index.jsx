import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="localization">
        <h1>Localização</h1>
        <div></div>
        <ul className="info">
          <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
          <li>Alphavile SP</li>
          <li>brasil@corebiz.ag</li>
          <li>+55 11 3090 1039</li>
        </ul>
      </section>

      <section className="footer-contacts">
        <button className="button-footer">
          <FaEnvelope className="icon-envelope"/>
          ENTRE EM CONTATO
        </button>

        <button className="button-footer headset">
          <MdHeadsetMic className="footer-icon" />
          FALE COM A NOSSO CONSULTOR ONLINE
        </button>
      </section>

      <section className="footer-groups">
        <div className="logo-corebiz">
          <img src="/assets/corebiz.png" alt="Logo corebiz #gobeyond" />
        </div>

        <div className="logo-vtex">
          <img src="/assets/vtex.png" alt="Logo vtex" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
