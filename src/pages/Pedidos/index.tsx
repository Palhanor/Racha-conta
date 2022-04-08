import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import { IPedidosProps } from "../../interfaces/props";
import Item from "./Item";
import ICliente from "../../interfaces/cliente";
import "../../styles/global.scss";
import { v4 as uuidv4 } from "uuid";

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
      fontFamily: 'Marcellus SC',
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

    if (autoresPedido.length === 0) {
      alert("Adicione ao menos um autor para o pedido")
      return;
    }

    const novoPedido = {
      nome: nomePedido,
      preco: precoPedido,
      autores: [...autoresPedido],
      id: uuidv4()
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
      <form
        onSubmit={(e) => atribuirPedido(e)}
        className="global-form_container global-form_container--top"
      >
        <h1 className="global-form_title">Novo pedido</h1>
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
        <label htmlFor="nomePedido" className="global-element_label">
          Nome do pedido
        </label>
        <input
          type="text"
          name="nomePedido"
          id="nomePedido"
          placeholder="Nome do pedido"
          className="global-element_input"
          value={nomePedido}
          onChange={(e) => setNomePedido(e.target.value)}
          required
        />
        <label htmlFor="precoPedido" className="global-element_label">
          Preco do pedido
        </label>
        <input
          type="number"
          name="precoPedido"
          id="precoPedido"
          className="global-element_input"
          step={0.01}
          min="0.01"
          value={precoPedido}
          onChange={(e) => setPrecoPedido(Number(e.target.value))}
          required
        />
        <button className="global-element_button">Adicionar</button>
      </form>
      <div className="global-list_container">
        <div>
          <h2 className="global-list_title">Pedidos</h2>
        </div>
        <ul className="global-list">
          {listaPedidos.map(dadosPedido => (
            <Item key={dadosPedido.id} {...dadosPedido} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
