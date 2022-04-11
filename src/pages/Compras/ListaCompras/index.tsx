import { useNavigate } from "react-router-dom";
import ICompra from "../../../interfaces/compra";
import * as Exattrs from "./Exattrs";
import "../../../styles/global.scss";

export default function ListaCompras({
  listaPedidos,
}: {
  listaPedidos: ICompra[];
}) {
  const navigate = useNavigate();

  return (
    <ul {...Exattrs.lista}>
      {listaPedidos.map((pedido) => (
        <li
          {...Exattrs.item}
          key={pedido.id}
          onClick={() => navigate(`/compra/${pedido.id}`)}
        >
          <div {...Exattrs.header}>
            <strong {...Exattrs.titulo}>{pedido.nome}</strong>
            <span {...Exattrs.custo}>
              R$ {pedido.preco.toLocaleString("BRL")}
            </span>
          </div>
          <div {...Exattrs.texto}>
            {pedido.autores.map((autor) => autor).join(", ")}
          </div>
        </li>
      ))}
    </ul>
  );
}
