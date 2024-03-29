import React, { useState } from "react";
import Cuadro from "./Cuadro";
import Banner from "./Banner";
import cuadrosData from "../cuadros.json";
import CuadroPreview from "./CuadroPreview";
import "../styles/Preview.css";

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
      <p className="subtitulo">Nuestra Galería</p>
      <section className="galeria-container">
        {cuadrosData && cuadrosData.length > 0 ? (
          cuadrosData.map(cuadro => (
            <div key={cuadro.id} className="cuadro-container">
              <Cuadro
                nombre={cuadro.nombre}
                descripcion={cuadro.descripcion}
                imagen={require("../img/" + cuadro.imagen)}
                data-name={cuadro.nombre}
                onClick={() => handleCuadroClick(cuadro)}
              />
              {cuadro.nuevo && <span className="etiqueta-nuevo">Nuevo</span>}
              {!cuadro.disponible && (
                <span className="etiqueta-no-disponible">No disponible</span>
              )}
            </div>
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
