import { useState } from "react";
import videojuegosData from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";

function App() {

  const [videojuegos] = useState(videojuegosData);

  return (
    <>
      <h1>Tienda de Videojuegos</h1>

      <TablaVideojuegos videojuegos={videojuegos}/>
    </>
  );
}

export default App;