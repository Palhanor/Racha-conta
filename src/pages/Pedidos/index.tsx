import { useState } from "react";
import ICliente from "../../interfaces/cliente";
import IPedido from "../../interfaces/pedido";
import Pedido from "./Pedido";
import "./style.css";

export default function Pedidos({
  mesa,
  listaPedidos,
  setListaPedidos,
  listaClientes,
  setListaClientes,
}: {
  mesa: string;
  listaPedidos: IPedido[];
  setListaPedidos: React.Dispatch<React.SetStateAction<IPedido[]>>;
  listaClientes: ICliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}) {
  const [nomePedido, setNomePedido] = useState("");
  const [precoPedido, setPrecoPedido] = useState(0);
  const [autores, setAutores] = useState(1);

  function atribuirPedido(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const novoPedido = { nome: nomePedido, preco: precoPedido, autor: autores };
    const copiaDaLista = [...listaClientes];
    copiaDaLista[autores - 1].pedidos.push(novoPedido);
    setListaClientes(copiaDaLista);
    setListaPedidos([...listaPedidos, novoPedido]);
    setNomePedido("");
    setPrecoPedido(0);
  }

  return (
    <>
      <h1 className="pedidos_title">{mesa}</h1>
      <form onSubmit={(e) => atribuirPedido(e)} className="pedidos_form">
        <label htmlFor="autores" className="pedidos_label">
          Autor do pedido
        </label>
        <select
          value={autores}
          id="autores"
          onChange={(e) => setAutores(Number(e.target.value))}
          className="pedidos_autores"
        >
          {listaClientes.map((dadosCliente) => (
            <option value={dadosCliente.id} key={dadosCliente.id}>
              {dadosCliente.nome}
            </option>
          ))}
        </select>
        <label htmlFor="nomePedido" className="pedidos_label">
          Nome do pedido
        </label>
        <input
          type="text"
          name="nomePedido"
          id="nomePedido"
          placeholder="Adicionar nome do pedido"
          className="pedidos_input"
          value={nomePedido}
          onChange={(e) => setNomePedido(e.target.value)}
          required
        />
        <label htmlFor="precoPedido" className="pedidos_label">
          Preco do pedido
        </label>
        <input
          type="number"
          name="precoPedido"
          id="precoPedido"
          placeholder="Adicionar preco do pedido"
          className="pedidos_input"
          step={0.01}
          min="0.01"
          value={precoPedido}
          onChange={(e) => setPrecoPedido(Number(e.target.value))}
          required
        />
        <button className="pedidos_button">Adicionar</button>
      </form>
      <h2 className="pedidos_lista-title">Pedidos</h2>
      <ul className="pedidos_lista">
        {listaPedidos.map((dadosPedido, index) => (
          <Pedido
            key={index}
            dadosPedido={dadosPedido}
            listaClientes={listaClientes}
          />
        ))}
      </ul>
    </>
  );
}
