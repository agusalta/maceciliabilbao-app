function Cuadro({ nombre, imagen, onClick }) {
  return (
    <div className="cuadro-container" data-name={nombre} onClick={onClick}>
      <img
        className="cuadro"
        src={imagen ?? ''}
        alt={nombre}
        loading="lazy"
      />
      <h3>{nombre}</h3>
    </div>
  );
}

export default Cuadro;
