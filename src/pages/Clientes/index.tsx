import { useState } from "react";
import ICliente from "../../interfaces/cliente";
import contador from "../../utils/contador";
import Cliente from "./Cliente";
import "./style.css";

export default function Clientes({
  mesa,
  listaClientes,
  setListaClientes,
}: {
  mesa: string;
  listaClientes: ICliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}) {
  const [cliente, setCliente] = useState("");

  function novoCliente(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaClientes([
      ...listaClientes,
      { nome: cliente, pedidos: [], id: contador() },
    ]);
    setCliente("");
  }

  return (
    <>
      <h1 className="clientes_title">{mesa}</h1>
      <form className="clientes_form" onSubmit={(e) => novoCliente(e)}>
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
        {listaClientes.map((dadosCliente) => (
          <Cliente key={dadosCliente.id} {...dadosCliente} />
        ))}
      </ul>
    </>
  );
}
