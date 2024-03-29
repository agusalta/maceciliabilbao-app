import React, { useState, useEffect } from "react";
import Carrito48 from "../img/icons8-carrito-de-compras-48.png";
import MB from "../img/MB.png";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1098);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? (
        <img className="logo-img" alt="" src={MB} />
      ) : (
        <p className="titulo">Maria Bilbao.</p>
      )}
      <div className="carrito-container">
        <a href="/carrito" className="carrito">
          <img
            src={Carrito48}
            alt="carrito de compras"
            className="carrito-icon"
          />
          <span className="cantidad-productos">
            <strong>0</strong>
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
