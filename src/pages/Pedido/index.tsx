import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "../../styles/global.scss";
import Item from "./Item";
import Navegacao from "../../components/Navegacao";
import { IPedidoProps } from "../../interfaces/props";

export default function Cliente(props: IPedidoProps) {
  const { listaPedidos, setListaPedidos, setListaClientes } = props;
  const { pageId } = useParams();
  const pedido = listaPedidos.find((dadosPedido) => dadosPedido.id === pageId);
  const navigate = useNavigate();

  if (!pedido) {
    return <NotFound />;
  }

  function apagarPedido() {

    setListaClientes((velhaListaClientes) =>
      velhaListaClientes.map((dadosCliente) => {
        const { nome, pedidos, id } = dadosCliente;
        const novosPedidos = pedidos.filter(pedido => pedido.id !== pageId)
        return {
          nome: nome,
          pedidos: novosPedidos,
          id: id,
        };
      })
    );

    setListaPedidos((velhaLista) =>
      velhaLista.filter((velhoPedido) => velhoPedido.id !== pageId)
    );
    navigate("/pedidos");
  }

  return (
    <>
      <div className="global-item_container">
        <h1 className="global-item_container-title">{pedido.nome}</h1>
        <div className="global-util_horizontal-align">
          <span className="global-list_item-text">
            {pedido.autores.length} Autor
            {pedido.autores.length === 1 ? "" : "es"}
          </span>
          <span className="global-list_item-cost">
            R$ {pedido.preco.toLocaleString("BRL")}
          </span>
        </div>
        <div>
          <button
            className="global-element_button global-element_button--danger"
            onClick={() => apagarPedido()}
          >
            Apagar
          </button>
        </div>
      </div>
      <div className="global-list_container">
        <h2 className="global-list_title">Autores</h2>
        <ul className="global-list">
          {pedido.autores.map((autor, index) => (
            <Item key={index} autor={autor} pedido={pedido} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
