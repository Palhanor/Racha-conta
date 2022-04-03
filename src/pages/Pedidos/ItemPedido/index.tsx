import { Link, useNavigate } from "react-router-dom";
import IPedido from "../../../interfaces/pedido";
import "./style.css";

export default function ItemPedido({ nome, preco, autores }: IPedido) {
  const navigate = useNavigate();

  return (
    <li
      className="pedidos_item"
      onClick={() =>
        navigate(`/pedido/${nome.toLowerCase().replace(" ", "-")}`)
      }
    >
      <div className="pedidos_nome-custo">
        <strong>{nome}</strong>
        <span className="pedidos_custo">R$ {preco.toFixed(2)}</span>
      </div>
      <div className="pedidos_nomes-autores">
        {autores.map((autor) => autor).join(", ")}
      </div>
    </li>
  );
}
