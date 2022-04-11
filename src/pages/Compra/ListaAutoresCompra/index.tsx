import ICompra from "../../../interfaces/compra";
import * as Exattrs from "./Exattrs";
import "../../../styles/global.scss";

export default function ListaAutoresCompra({ pedido }: { pedido: ICompra }) {
  return (
    <ul {...Exattrs.lista}>
      {pedido.autores.map((autor, index) => (
        <li {...Exattrs.item} key={index}>
          <div {...Exattrs.header}>
            <strong {...Exattrs.titulo}>{autor}</strong>
            <span {...Exattrs.custo}>
              R$ {(pedido.preco / pedido.autores.length).toLocaleString("BRL")}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
