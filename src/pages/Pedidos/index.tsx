// Dependencies
import { useState } from "react";
// Interfaces
import TipoCliente from "../../interfaces/TipoCliente";
import TipoPedido from "../../interfaces/TipoPedido";

// Components
import Pedido from "./Pedido";

// Styles
import "./style.css";

interface Props {
  mesa: string;
  listaPedidos: TipoPedido[];
  setListaPedidos: React.Dispatch<React.SetStateAction<TipoPedido[]>>;
  listaClientes: TipoCliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<TipoCliente[]>>;
}

export default function Pedidos({
  mesa,
  listaPedidos,
  setListaPedidos,
  listaClientes,
  setListaClientes,
}: Props) {
  const [nomePedido, setNomePedido] = useState("");
  const [precoPedido, setPrecoPedido] = useState(0);
  const [autores, setAutores] = useState(1);

  function atribuirPedido() {
    const novoPedido = { nome: nomePedido, preco: precoPedido, autor: autores };
    const copiaDaLista = [...listaClientes];
    copiaDaLista[autores - 1].pedidos.push(novoPedido);
    setListaClientes(copiaDaLista);
    setListaPedidos([...listaPedidos, novoPedido]);
  }

  return (
    <>
      {mesa !== "" && (
        <>
          <h1 className="pedidos_title">{mesa}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              atribuirPedido();
              setNomePedido("");
              setPrecoPedido(0);
            }}
            className="pedidos_form"
          >
            <label htmlFor="autores" className="pedidos_label">
              Autor do pedido
            </label>
            <select
              value={autores}
              id="autores"
              onChange={(e) => setAutores(Number(e.target.value))}
              className="pedidos_autores"
            >
              {listaClientes.map((dadosCliente) => {
                return (
                  <option value={dadosCliente.id} key={dadosCliente.id}>
                    {dadosCliente.nome}
                  </option>
                );
              })}
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
              min="0"
              value={precoPedido}
              onChange={(e) => setPrecoPedido(Number(e.target.value))}
              required
            />
            <button className="pedidos_button">Adicionar</button>
          </form>
          <h2 className="pedidos_lista-title">Pedidos</h2>
          <ul className="pedidos_lista">
            {listaPedidos.map((dadosPedido, index) => {
              return (
                <Pedido
                  key={index}
                  precoPedido={dadosPedido.preco}
                  nomePedido={dadosPedido.nome}
                  autor={dadosPedido.autor}
                  listaClientes={listaClientes}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
