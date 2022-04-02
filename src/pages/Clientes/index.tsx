// Remover o <Navegacao> e passar para o sistema de rotas de forma condicional

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { IClientesProps } from "../../interfaces/props";
import contador from "../../utils/contador";
import ItemCliente from "./ItemCliente";
import "./style.css";

export default function Clientes(props: IClientesProps) {
  const { mesa, listaClientes, setListaClientes } = props;
  const [cliente, setCliente] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (mesa === "") {
      navigate("/");
    }
  });

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
      <form className="clientes_form" onSubmit={(e) => novoCliente(e)}>
        <h2 className="clientes_title">Novo cliente</h2>
        <label htmlFor="cliente" className="clientes_label">
          Novo cliente
        </label>
        <input
          type="text"
          name="cliente"
          id="cliente"
          placeholder="Nome do cliente"
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
          <ItemCliente key={dadosCliente.id} {...dadosCliente} />
        ))}
      </ul>
      <Navegacao />
    </>
  );
}
