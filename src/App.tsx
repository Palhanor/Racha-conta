import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import IConsumidor from "./interfaces/consumidor";
import ICompra from "./interfaces/compra";
import Inicio from "./pages/Inicio";
import Consumidores from "./pages/Consumidores";
import Consumidor from "./pages/Consumidor";
import Compras from "./pages/Compras";
import Compra from "./pages/Compra";
import Extrato from "./pages/Extrato";
import NotFound from "./pages/NotFound";
import Historico from "./pages/Historico";
import Conta from "./pages/Conta";

function App() {
  const [conta, setConta] = useState<string>("");
  const [consumidor, setConsumidor] = useState<string>("");
  const [listaConsumidores, setListaConsumidores] = useState<IConsumidor[]>([]);
  const [listaCompras, setListaCompras] = useState<ICompra[]>([]);

  const comprasProps = {
    conta,
    listaCompras,
    setListaCompras,
    listaConsumidores,
    setListaConsumidores,
  };
  const extratoProps = {
    listaConsumidores,
    listaCompras,
    conta,
    setConta,
    setConsumidor,
    setListaConsumidores,
    setListaCompras,
  };
  const inicioProps = {
    conta,
    setConta,
    consumidor,
    setConsumidor,
    setListaConsumidores,
  };
  const consumidoresProps = { conta, listaConsumidores, setListaConsumidores };
  const consumidorProps = { listaConsumidores, setListaConsumidores };
  const compraProps = { listaCompras, setListaCompras, setListaConsumidores };
  const contaProps = {
    setConta,
    setConsumidor,
    setListaCompras,
    setListaConsumidores,
  };

  return (
    <Routes>
      <Route path="/" element={<Inicio {...inicioProps} />} />
      <Route
        path="consumidores"
        element={<Consumidores {...consumidoresProps} />}
      />
      <Route path="compras" element={<Compras {...comprasProps} />} />
      <Route
        path="consumidor/:ID"
        element={<Consumidor {...consumidorProps} />}
      />
      <Route path="compra/:ID" element={<Compra {...compraProps} />} />
      <Route path="extrato" element={<Extrato {...extratoProps} />} />
      <Route path="historico" element={<Historico />} />
      <Route path="conta/:ID" element={<Conta {...contaProps} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
