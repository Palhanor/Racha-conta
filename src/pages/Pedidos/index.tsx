// https://www.npmjs.com/package/multiselect-react-dropdown

// Criar um componente MultipleSelect que vai iterar os clientes criando um campo de click para selecionar cada cliente
// Fazer o sistema de selecao no estilo dropdown como um select e options
// Pegar o estado de todos os clientes que foram selecionados para trabalhar com os dados
// Aplicar um estilo de cliente selecionado dinamicamente atraves do --active
// Usar um array de objetos de cliente selecionado dentro do estado de clientes selecionados
// Fazer os calculos e jogar os resultados com os gastos e os dados dentro da listaClientes.pedidos

// Remover o <Navegacao> e passar para o sistema de rotas de forma condicional


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import { IPedidosProps } from "../../interfaces/props";
import ItemPedido from "./ItemPedido";
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
    if (mesa === "") {
      navigate("/");
    }
  });

  // useEffect(() => {
  //   console.log(listaPedidos)
  // }, [listaPedidos]);

// Tentar uma solucao para o problema de modificar os autores dos pedidos anteriores

  function atribuirPedido(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const novoPedido = {
      nome: nomePedido,
      preco: precoPedido,
      autores: autoresPedido,
    };
    // O array de autores de pedidos anteriores muda de acordo com a mudança no estado de autores
    // Dica - se sair e voltar pra a pagina, nao da problema... entao deve ser algo com a inicializacao da pagina
    setListaPedidos([...listaPedidos, novoPedido]);
    // Preciso conseguir modificar o campo listaClientes para adicionar o pedido dentro de cada cliente
    // setListaClientes()
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
            // console.log(autores);
          }}
          onSelect={(e) => {
            setAutoresPedido(e);
            // console.log(autores);
          }}
          options={listaClientes.map(cliente => cliente.nome)}
          placeholder="Autores do pedido"
          style={{
            multiselectContainer: {
              color: "#426D77",
            },
            searchBox: {
              border: "1px solid #426D77",
              borderRadius: "5px",
              marginBottom: "1rem",
              padding: ".5rem",
              fontFamily: "inherit",
            },
            chips: {
              background: "#426D77",
            },
          }}
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
      <ul className="pedidos_lista">
        {listaPedidos.map((dadosPedido, index) => (
          <ItemPedido
            key={index}
            dadosPedido={dadosPedido}
          />
        ))}
      </ul>
      <Navegacao />
    </>
  );
}
