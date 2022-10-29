import { Routes, Route, BrowserRouter } from "react-router-dom";
import Personaje from './components/Personaje';
import Personajes from "./components/Tarjetas_personajes";
import Inicio from "./components/Inicio";


function App() {

  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/personajes" element={<Personajes></Personajes>}></Route>
          <Route path="/personaje/:id" element={<Personaje></Personaje>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
