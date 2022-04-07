import IPedido from "../../../interfaces/pedido";
import "../../../styles/global.scss";

export default function Item({ pedido }: { pedido: IPedido }) {
  return (
    <li className="global-list_item">
      <div className="global-util_horizontal-align">
        <div>
          <strong className="global-list_item-title">{pedido.nome}</strong>{" "}
          &#183;{" "}
          <span className="global-list_item-text">
            R$ {pedido.preco.toFixed(2)}
          </span>
        </div>
        <span className="global-list_item-cost">
          R$ {(pedido.preco / pedido.autores.length).toFixed(2)}
        </span>
      </div>
    </li>
  );
}
