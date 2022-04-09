import { useNavigate } from "react-router-dom";
import IPedido from "../../../interfaces/pedido";
import "../../../styles/global.scss"

export default function Item(props: IPedido) {
  const { nome, preco, autores, id }= props;
  const navigate = useNavigate();

  return (
    <li
      className="global-list_item"
      onClick={() =>
        navigate(`/pedido/${id}`)
      }
    >
      <div className="global-util_horizontal-align global-util_margin-bottom">
        <strong className="global-list_item-title">{nome}</strong>
        <span className="global-list_item-cost">R$ {(preco).toLocaleString("BRL")}</span>
      </div>
      <div className="global-list_item-text">
        {autores.map((autor) => autor).join(", ")}
      </div>
    </li>
  );
}