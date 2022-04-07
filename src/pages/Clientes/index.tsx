import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { IClientesProps } from "../../interfaces/props";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import "../../styles/global.scss";

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

    if ((listaClientes.find((clienteVirificado) => clienteVirificado.nome === cliente))) {
      alert("O nome dos clientes devem ser diferentes entre si");
      setCliente("");
      return;
    }

    setListaClientes([
      ...listaClientes,
      { nome: cliente, pedidos: [], id: uuidv4() },
    ]);
    setCliente("");
  }

  return (
    <>
      <form
        className="global-form_container global-form_container--top"
        onSubmit={(e) => novoCliente(e)}
      >
        <h1 className="global-form_title">Novo cliente</h1>
        <label htmlFor="cliente" className="global-element_label">
          Novo cliente
        </label>
        <input
          type="text"
          name="cliente"
          id="cliente"
          placeholder="Nome do cliente"
          className="global-element_input"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
        <button className="global-element_button">Adicionar</button>
      </form>
      <div className="global-list_container">
        <div>
          <h2 className="global-list_title">Clientes</h2>
        </div>
        <ul className="global-list">
          {listaClientes.map((dadosCliente) => (
            <Item key={dadosCliente.id} {...dadosCliente} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
