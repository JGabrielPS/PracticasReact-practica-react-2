import ListadoNombres from "./components/ListadoNombres";
import Bienvenida from "./components/Bienvenida";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <ListadoNombres />
      <Bienvenida nombre="Manuel" />
      <Bienvenida nombre="Jose" />
      <Bienvenida nombre="Susanita" />
      <Bienvenida nombre="Pepe" />
      <div className="row">
        <div className="col">
          <Card
            imagen="https://picsum.photos/100"
            titulo="Título de card 1"
            texto="Texto de la card 1"
          />
        </div>
        <div className="col">
          <Card
            imagen="https://picsum.photos/100"
            titulo="Título de card 2"
            texto="Texto de la card 2"
          />
        </div>
        <div className="col">
          <Card
            imagen="https://picsum.photos/100"
            titulo="Título de card 3"
            texto="Texto de la card 3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
