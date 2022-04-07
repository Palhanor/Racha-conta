import IPedido from "../../interfaces/pedido";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "../../styles/global.scss";
import Item from "./Item";
import Navegacao from "../../components/Navegacao";

export default function Cliente({ listaPedidos }: { listaPedidos: IPedido[] }) {
  const { id } = useParams();
  const pedido = listaPedidos.find(
    (dadosPedido) => dadosPedido.id === id
  );

  if (!pedido) {
    return <NotFound />;
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
            R$ {pedido.preco.toFixed(2)}
          </span>
        </div>
      </div>
      <div  className="global-list_container">
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
