import { useNavigate } from "react-router-dom";
import ICompra from "../../../interfaces/compra";
import {
  Lista,
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/Styled";

export default function ListaCompras({
  listaPedidos,
}: {
  listaPedidos: ICompra[];
}) {
  const navigate = useNavigate();

  return (
    <Lista>
      {listaPedidos.map((pedido) => (
        <Item key={pedido.id} onClick={() => navigate(`/compra/${pedido.id}`)}>
          <Inline mb>
            <ItemNome>{pedido.nome}</ItemNome>
            <ItemCusto>R$ {pedido.preco.toLocaleString("BRL")}</ItemCusto>
          </Inline>
          <ItemTexto>
            {pedido.autores.map((autor) => autor).join(", ")}
          </ItemTexto>
        </Item>
      ))}
    </Lista>
  );
}
