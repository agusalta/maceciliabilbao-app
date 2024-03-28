import React from "react";
import Instagram from "../img/instagram.png";
import Whatsapp from "../img/whatsapp.png";

function Footer() {
  return (
    <footer>
      <p>
        &copy; 2024 Galería de Arte - Maria Cecilia Bilbao - Todos los derechos
        reservados
      </p>

      <div id="redes">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/ma.ceciliabilbao/"
        >
          <img className="icon" alt="instagram" src={Instagram} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://chatwith.io/es/s/bilbao"
        >
          <img className="icon" alt="whatsapp" src={Whatsapp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
