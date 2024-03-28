import React from "react";

function Cuadro({ nombre, descripcion, imagen }) {
  return (
    <div className="cuadro-container" data-name={nombre}>
      <img className="cuadro" src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Cuadro;
