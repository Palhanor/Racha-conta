// Icone usado: https://www.pixeltrue.com/free-packs/error-state
// Biblioteca de multiselect usada: https://www.npmjs.com/package/multiselect-react-dropdown

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import { IPedidosProps } from "../../interfaces/props";
import Item from "./Item";
import ICliente from "../../interfaces/cliente";
import "./style.css";

export default function Pedidos(props: IPedidosProps) {
  const {
    mesa,
    listaPedidos,
    setListaPedidos,
    listaClientes,
    setListaClientes,
  } = props;

  const [nomePedido, setNomePedido] = useState<string>("");
  const [precoPedido, setPrecoPedido] = useState<number>(0);
  const [autoresPedido, setAutoresPedido] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (mesa === "") navigate("/");
  });

  const estiloMultiselectComponent = {
    searchBox: {
      // Input e container das tags
      cursor: "pointer",
      color: "#426D77",
      border: "1px solid #426D77",
      borderRadius: "5px",
      marginBottom: "1rem",
      padding: ".5rem",
      fontFamily: "inherit",
    },
    chips: {
      // Tag contendo o valor selecionado
      background: "#426D77",
      borderRadius: "5px",
    },
    optionContainer: {
      // Lista contendo os valores para selecionar
      marginTop: "-1rem",
    },
  };

  function atribuirPedido(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novoPedido = {
      nome: nomePedido,
      preco: precoPedido,
      autores: [...autoresPedido],
    };
    setListaPedidos([...listaPedidos, novoPedido]);

    const novaListaClientes: ICliente[] = listaClientes.map((dadosCliente) => {
      const listaDeQuemFezPedido = [...novoPedido.autores];
      if (listaDeQuemFezPedido.indexOf(dadosCliente.nome) === -1) {
        return { ...dadosCliente };
      } else {
        return {
          ...dadosCliente,
          pedidos: [...dadosCliente.pedidos, novoPedido],
        };
      }
    });
    setListaClientes(novaListaClientes);

    setNomePedido("");
    setPrecoPedido(0);
  }

  return (
    <>
      <form onSubmit={(e) => atribuirPedido(e)} className="pedidos_form">
        <h2 className="pedidos_title">Novo pedido</h2>
        <Multiselect
          isObject={false}
          onRemove={(e) => {
            setAutoresPedido(e);
          }}
          onSelect={(e) => {
            setAutoresPedido(e);
          }}
          options={listaClientes.map((cliente) => cliente.nome)}
          placeholder="Autores do pedido"
          style={estiloMultiselectComponent}
        />
        <label htmlFor="nomePedido" className="pedidos_label">
          Nome do pedido
        </label>
        <input
          type="text"
          name="nomePedido"
          id="nomePedido"
          placeholder="Nome do pedido"
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
      {listaPedidos.length > 0 ? (
        <ul className="pedidos_lista">
          {listaPedidos.map((dadosPedido, index) => (
            <Item key={index} {...dadosPedido} />
          ))}
        </ul>
      ) : (
        <img
          src="assets/Tissue.png"
          alt="Ilustração de um rolo de papel higiênico vazio"
          className="pedidos_vazio"
        />
      )}
      <Navegacao />
    </>
  );
}
