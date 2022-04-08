import IPedido from "../../../interfaces/pedido";
import "../../../styles/global.scss";

export default function Item(props: IPedido) {
  const { nome, preco, autores, id } = props

  return (
    <li className="global-list_item">
      <div className="global-util_horizontal-align">
        <div>
          <strong className="global-list_item-title">{nome}</strong>{" "}
          &#183;{" "}
          <span className="global-list_item-text">
            R$ {preco.toFixed(2)}
          </span>
        </div>
        <span className="global-list_item-cost">
          R$ {(preco / autores.length).toFixed(2)}
        </span>
      </div>
    </li>
  );
}
