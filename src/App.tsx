/* IMPORTS */
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Consumidores from "./pages/Consumidores";
import Consumidor from "./pages/Consumidor";
import Compras from "./pages/Compras";
import Compra from "./pages/Compra";
import Extrato from "./pages/Extrato";
import NotFound from "./pages/NotFound";
import Historico from "./pages/Historico";

/* COMPONENTE COM AS ROTAS */
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="consumidores" element={<Consumidores />} />
        <Route path="compras" element={<Compras />} />
        <Route path="consumidor/:ID" element={<Consumidor />} />
        <Route path="compra/:ID" element={<Compra />} />
        <Route path="historico" element={<Historico />} />
        <Route path="extrato/:ID" element={<Extrato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
