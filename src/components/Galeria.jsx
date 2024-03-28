import React from "react";
import Cuadro from "./Cuadro";
import Banner from "./Banner";
import cuadrosData from "../cuadros.json";

function Galeria() {
  return (
    <section id="galeria">
      <Banner />
      <h2 className="subtitulo">Nuestra Galería</h2>
      <div className="galeria-container">
        {cuadrosData && cuadrosData.length > 0 ? (
          cuadrosData.map(cuadro => (
            <Cuadro
              key={cuadro.id}
              nombre={cuadro.nombre}
              descripcion={cuadro.descripcion}
              imagen={require("../img/" + cuadro.imagen)}
            />
          ))
        ) : (
          <p>No hay cuadros disponibles</p>
        )}
      </div>
    </section>
  );
}

export default Galeria;
