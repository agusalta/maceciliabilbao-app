import { getImageUrl } from "../utils/getImageUrl";

function CuadroPreview({ cuadro, onClose }) {
  if (!cuadro || !cuadro.imagen) {
    return <span>Error: Información del cuadro no disponible.</span>;
  }

  const imageUrl = getImageUrl(cuadro.imagen);
  if (!imageUrl) {
    return <span>No se pudo cargar la imagen: {cuadro.imagen}</span>;
  }

  const handleRedireccion = () => {
    window.open(
      "https://www.instagram.com/ma.ceciliabilbao/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="cuadro-imagen">
      <div className="preview" data-target={cuadro.id}>
        <img
          className="cuadro"
          src={imageUrl}
          alt={cuadro.nombre}
          title={cuadro.nombre}
        />
        <h3 title={cuadro.nombre}>{cuadro.nombre}</h3>
        <p>
          <strong>Medidas:</strong> {cuadro.medidas}
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
