import { Link } from "react-router-dom";
import IPedido from "../../../interfaces/pedido";
import "./style.css";

export default function ItemPedido({ nome, preco, autores }: IPedido) {
  return (
    <li className="pedidos_item">
      <Link to={`/pedido?id=01`} className="pedidos_page-link">
        <div className="pedidos_nome-custo">
          <strong>{nome}</strong>
          <span className="pedidos_custo">R$ {preco.toFixed(2)}</span>
        </div>
        <div className="pedidos_nomes-autores">
          {autores.map((autor, index) => (
            <span key={index}>
              {autor}
              {autores.length === index + 1 ? "" : ", "}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
}
