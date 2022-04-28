/* IMPORTS */
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import NovaConta from "./pages/NovaConta";
import Consumidores from "./pages/Consumidores";
import Consumidor from "./pages/Consumidor";
import Compras from "./pages/Compras";
import Compra from "./pages/Compra";
import Extrato from "./pages/Extrato";
import NotFound from "./pages/NotFound";
import Historico from "./pages/Historico";
import Perfil from "./pages/Perfil";

/* COMPONENTE COM AS ROTAS */
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Perfil />}/>
        <Route path="nova-conta" element={<NovaConta />} />
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
