import IPedido from "../../../interfaces/pedido";
import "../../../styles/global.scss"

export default function Item({
  autor,
  pedido,
}: {
  autor: string;
  pedido: IPedido;
}) {
  return (
    <li className="global-list_item">
      <div className="global-util_horizontal-align">
        <strong className="global-list_item-title">{autor}</strong>
        <span className="global-list_item-cost">R${" "}{(pedido.preco / pedido.autores.length).toFixed(2)}</span>
      </div>
    </li>
  );
}
