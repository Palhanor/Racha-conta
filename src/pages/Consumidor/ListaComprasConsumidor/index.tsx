import ICompra from "../../../interfaces/compra";
import "../../../styles/global.scss";

export default function ListaComprasConsumidor(props: ICompra) {
  const { nome, preco, autores, id } = props

  return (
    <li className="global-list_item">
      <div className="global-util_horizontal-align">
        <div>
          <strong className="global-list_item-title">{nome}</strong>{" "}
          &#183;{" "}
          <span className="global-list_item-text">
            R$ {preco.toLocaleString("BRL")}
          </span>
        </div>
        <span className="global-list_item-cost">
          R$ {(preco / autores.length).toLocaleString("BRL")}
        </span>
      </div>
    </li>
  );
}
