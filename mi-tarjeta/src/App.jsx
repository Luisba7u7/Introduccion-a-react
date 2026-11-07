import ListaCompras from './ListaCompras';
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
      <ListaCompras/>
    </div>
  );
}

export default App;
