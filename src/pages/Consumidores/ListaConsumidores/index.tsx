/* IMPORTS */
import { useNavigate } from "react-router-dom";
import IConsumidor from "../../../interfaces/consumidor";
import {
  Lista,
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/StyledComponents";
import ICompra from "../../../interfaces/compra";

/* COMPONENTE */
export default function ListaConsumidores({listaConsumidores}: {listaConsumidores: IConsumidor[]}) {

  /* HOOK DO REACT REOUTER */
  const navigate = useNavigate();

  function gastoIndividual(pedidos: ICompra[]): number {
    return pedidos.reduce(
      (total, item) => item.preco / item.autores.length + total,
      0
    )
  }

  /* JSX */
  return (
    <Lista>
      {listaConsumidores.map(consumidor => (
        <Item key={consumidor.id} onClick={() => navigate(`/consumidor/${consumidor.id}`)}>
          <Inline mb>
            <ItemNome>{consumidor.nome}</ItemNome>
            <ItemCusto>R$ {gastoIndividual(consumidor.pedidos).toLocaleString("BRL")}</ItemCusto>
          </Inline>
          <ItemTexto>
            {consumidor.pedidos.length} Compra{consumidor.pedidos.length === 1 ? "" : "s"}
          </ItemTexto>
        </Item>
      ))}
    </Lista>
  );
}
