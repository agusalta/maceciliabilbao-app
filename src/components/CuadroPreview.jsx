import React from "react";

function CuadroPreview({ cuadro, onClose }) {
  if (!cuadro || !cuadro.imagen) {
    return <span>Error: Información del cuadro no disponible.</span>;
  }

  function handleRedireccion() {
    window.open(
      "https://www.instagram.com/ma.ceciliabilbao/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="cuadro-imagen">
      <div className="preview" data-target={cuadro.id}>
        <img
          className="cuadro"
          src={require("../img/" + cuadro.imagen)}
          alt={cuadro.nombre}
          title={cuadro.nombre}
        />
        <h3 title={cuadro.nombre}>{cuadro.nombre}</h3>
        <p>
          <strong>Medidas:</strong> {cuadro.medidas}
        </p>
        <p>
          <strong>Precio:</strong> {cuadro.precio}{" "}
          <span className="usd">USD</span>
        </p>
        <button className="agregar-al-carrito" onClick={handleRedireccion}>
          Mas información
        </button>
        <button className="cerrar-modal" onClick={onClose}>
          <p>X</p>
        </button>
      </div>
    </div>
  );
}

export default CuadroPreview;
