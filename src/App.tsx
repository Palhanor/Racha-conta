// Passar para o sistema de routes.js usando gerenciamento de estado global para não guardar estados no arquivo de rotas

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioInicial from "./pages/FormularioInicial";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import NotFound from "./pages/NotFound";
import ICliente from "./interfaces/cliente";
import IPedido from "./interfaces/pedido";

function App() {
  const [mesa, setMesa] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [listaClientes, setListaClientes] = useState<ICliente[]>([]);
  const [listaPedidos, setListaPedidos] = useState<IPedido[]>([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FormularioInicial
              mesa={mesa}
              setMesa={setMesa}
              nome={nome}
              setNome={setNome}
              setListaClientes={setListaClientes}
            />
          }
        />
        <Route
          path="clientes"
          element={
            <Clientes
              mesa={mesa}
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
            />
          }
        />
        <Route
          path="pedidos"
          element={
            <Pedidos
              mesa={mesa}
              listaPedidos={listaPedidos}
              setListaPedidos={setListaPedidos}
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
