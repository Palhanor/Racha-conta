// Dependencies
import { useState } from "react";

// Interface
import TipoCliente from "../../interfaces/TipoCliente";

// Utils
import contador from "../../utils/contador";

// Components
import Cliente from "./Cliente";

// Styles
import "./style.css";

interface Props {
  mesa: string;
  nome: string;
  listaClientes: TipoCliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<TipoCliente[]>>;
}

export default function Clientes({
  mesa,
  nome,
  listaClientes,
  setListaClientes,
}: Props) {
  const [cliente, setCliente] = useState("");

  return (
    <>
      {mesa !== "" && (
        <>
          <h1 className="clientes_title">{mesa}</h1>
          <form
            className="clientes_form"
            onSubmit={(e) => {
              e.preventDefault();
              setListaClientes([
                ...listaClientes,
                { nome: cliente, pedidos: [], id: contador() },
              ]);
              setCliente("");
            }}
          >
            <label htmlFor="cliente" className="clientes_label">
              Adicionar cliente
            </label>
            <input
              type="text"
              name="cliente"
              id="cliente"
              placeholder="Adicionar um novo cliente"
              className="clientes_input"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
            />
            <button className="clientes_button">Adicionar</button>
          </form>
          <h2 className="clientes_lista-title">Clientes</h2>
          <ul className="clientes_lista">
            {listaClientes.map((dadosCliente) => {
              return <Cliente key={dadosCliente.id} {...dadosCliente} />;
            })}
          </ul>
        </>
      )}
    </>
  );
}
