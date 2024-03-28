import React from "react";
import Carrito48 from "../img/icons8-carrito-de-compras-48.png";

function Header() {
  return (
    <header>
      <p className="titulo">Maria Cecilia Bilbao.</p>
      <div className="carrito-container">
        <a className="carrito" href="carrito.html">
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
