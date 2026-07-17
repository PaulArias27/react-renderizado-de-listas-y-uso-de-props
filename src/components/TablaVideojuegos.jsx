import "./TablaVideojuegos.css";

function TablaVideojuegos({ videojuegos }) {
  return (
    <div className="contenedor-tabla">
      <table>
        <thead>
          <tr>
            <th>Portada</th>
            <th>Título</th>
            <th>Género</th>
            <th>Plataforma</th>
            <th>Lanzamiento</th>
            <th>Precio</th>
            <th>Disponible</th>
            <th>Descarga</th>
          </tr>
        </thead>

        <tbody>
          {videojuegos.map((juego) => (
            <tr key={juego.id}>

              <td>
                <img
                  src={juego.imagen}
                  alt={juego.titulo}
                  className="portada"
                />
              </td>

              <td>{juego.titulo}</td>
              <td>{juego.genero}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.lanzamiento}</td>
              <td>${juego.precio}</td>
              <td>{juego.disponible ? "Sí" : "No"}</td>

              <td>
                <progress value={juego.progreso} max="1"></progress>
                <span> {Math.round(juego.progreso * 100)}%</span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaVideojuegos;