// 1. Deixar o sistema de rotas funcional
// 2. Resolver o problema do nested route com a pagina inicial
// 3. Criar um contexto global ou utilizar o Recoil para lidar com dados dos estados (Hooks)
// 4. Resolver a questao da condiçao para exibiçao do <Navegacao />

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import FormularioInicial from "./pages/Inicio";

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
