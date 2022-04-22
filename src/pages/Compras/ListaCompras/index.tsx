/* IMPORTS */
import { useNavigate } from "react-router-dom";
import ICompra from "../../../interfaces/compra";
import {
  Lista,
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaCompras({listaCompras}: {listaCompras: ICompra[]}) {

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* JSX */
  return (
    <Lista>
      {listaCompras.map((compra) => (
        <Item key={compra.id} onClick={() => navigate(`/compra/${compra.id}`)}>
          <Inline mb>
            <ItemNome>{compra.nome}</ItemNome>
            <ItemCusto>R$ {compra.preco.toLocaleString("BRL")}</ItemCusto>
          </Inline>
          <ItemTexto>
            {compra.autores.map((autor) => autor).join(", ")}
          </ItemTexto>
        </Item>
      ))}
    </Lista>
  );
}
