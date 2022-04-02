import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import FormularioInicial from "./pages/FormularioInicial";
// Problema dos hooks de state
// Problema do nested route com a pagina inicial

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioInicial />}>
          <Route index element={<FormularioInicial />} />
          <Route index element={<Clientes />} />
          <Route index element={<Pedidos />} />
        </Route>
      </Routes>
    </Router>
  );
}
