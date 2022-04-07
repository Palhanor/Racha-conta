import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import NotFound from "./pages/NotFound";
import ICliente from "./interfaces/cliente";
import IPedido from "./interfaces/pedido";
import Cliente from "./pages/Cliente";
import Pedido from "./pages/Pedido";
import Extrato from "./pages/Extrato";

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
            <Inicio
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
        <Route
          path="cliente/:id"
          element={
            <Cliente
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
            />
          }
        />
        <Route
          path="pedido/:pageId"
          element={
            <Pedido
              listaPedidos={listaPedidos}
              setListaPedidos={setListaPedidos}
              setListaClientes={setListaClientes}
            />
          }
        />
        <Route
          path="extrato"
          element={
            <Extrato
              listaClientes={listaClientes}
              listaPedidos={listaPedidos}
              mesa={mesa}
              setMesa={setMesa}
              setNome={setNome}
              setListaClientes={setListaClientes}
              setListaPedidos={setListaPedidos}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
