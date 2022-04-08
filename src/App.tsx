import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  const pedidosProps = {
    mesa,
    listaPedidos,
    setListaPedidos,
    listaClientes,
    setListaClientes,
  };
  const extratoProps = {
    listaClientes,
    listaPedidos,
    mesa,
    setMesa,
    setNome,
    setListaClientes,
    setListaPedidos,
  };
  const inicioProps = { mesa, setMesa, nome, setNome, setListaClientes };
  const clientesProps = { mesa, listaClientes, setListaClientes };
  const clienteProps = { listaClientes, setListaClientes };
  const pedidoProps = { listaPedidos, setListaPedidos, setListaClientes };

  return (
    <Routes>
      <Route path="/" element={<Inicio {...inicioProps} />} />
      <Route path="clientes" element={<Clientes {...clientesProps} />} />
      <Route path="pedidos" element={<Pedidos {...pedidosProps} />} />
      <Route path="cliente/:id" element={<Cliente {...clienteProps} />} />
      <Route path="pedido/:pageId" element={<Pedido {...pedidoProps} />} />
      <Route path="extrato" element={<Extrato {...extratoProps} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
