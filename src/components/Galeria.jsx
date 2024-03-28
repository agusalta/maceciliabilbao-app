import React, { useState } from "react";
import Cuadro from "./Cuadro";
import Banner from "./Banner";
import cuadrosData from "../cuadros.json";
import CuadroPreview from "./CuadroPreview";
import "../styles/galeria.css";

function Galeria() {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedCuadro, setSelectedCuadro] = useState(null);

  function handleCuadroClick(cuadro) {
    setSelectedCuadro(cuadro);
    setShowPreview(true);
  }

  const handleClosePreview = () => {
    setShowPreview(false);
    setSelectedCuadro(null);
  };

  return (
    <div id="galeria">
      <Banner />
      <h2 className="subtitulo">Nuestra Galería</h2>
      <section className="galeria-container">
        {cuadrosData && cuadrosData.length > 0 ? (
          cuadrosData.map(cuadro => (
            <Cuadro
              key={cuadro.id}
              nombre={cuadro.nombre}
              descripcion={cuadro.descripcion}
              imagen={require("../img/" + cuadro.imagen)}
              data-name={cuadro.nombre}
              onClick={() => handleCuadroClick(cuadro)}
            />
          ))
        ) : (
          <p>No hay cuadros disponibles</p>
        )}
      </section>

      {showPreview && selectedCuadro && (
        <div
          className="cuadros-preview"
          style={showPreview ? { display: "block" } : { display: "none" }}
        >
          <CuadroPreview cuadro={selectedCuadro} onClose={handleClosePreview} />
        </div>
      )}
    </div>
  );
}

export default Galeria;
