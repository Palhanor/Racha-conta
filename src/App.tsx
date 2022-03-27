// Dependencias
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componentes
import Navegacao from "./components/Navegacao";
import FormularioInicial from "./pages/FormularioInicial";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import NotFound from "./pages/NotFound";

// Interfaces
import TipoCliente from "./interfaces/TipoCliente";
import TipoPedido from "./interfaces/TipoPedido";

function App() {
  const [mesa, setMesa] = useState("");
  const [nome, setNome] = useState("");
  const [listaClientes, setListaClientes] = useState<TipoCliente[]>([]);
  const [listaPedidos, setListaPedidos] = useState<TipoPedido[]>([]);

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
              nome={nome}
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
      <Navegacao />
    </Router>
  );
}

export default App;
