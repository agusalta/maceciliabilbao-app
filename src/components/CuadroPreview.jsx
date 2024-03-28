import React from "react";

function CuadroPreview({ cuadro, onClose }) {
  if (!cuadro || !cuadro.imagen) {
    return <span>Error: Información del cuadro no disponible.</span>;
  }

  return (
    <div className="preview" data-target={cuadro.id}>
      <img
        className="cuadro"
        src={require("../img/" + cuadro.imagen)}
        alt={cuadro.nombre}
      />
      <h3>{cuadro.nombre}</h3>
      <p>
        <strong>Medidas:</strong> {cuadro.medidas}
      </p>
      <p>
        <strong>Precio:</strong> ${cuadro.precio}
      </p>
      <button className="agregar-al-carrito">Agregar al carrito</button>
      <button className="cerrar-modal" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default CuadroPreview;