/* IMPORTS */
import { useNavigate } from "react-router-dom";
import IConsumidor from "../../../interfaces/consumidor";
import useCompras from "../../../hooks/useCompras";
import {
  Lista,
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaConsumidores({
  listaConsumidores,
}: {
  listaConsumidores: IConsumidor[];
}) {
  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const { encontraCompra } = useCompras();

  /* CALCULA GASTO INDIVIDUAL */
  function gastoIndividual(pedidos: string[]): number {
    return pedidos.reduce(
      (total, compra) =>
        encontraCompra(compra).preco / encontraCompra(compra).autores.length +
        total,
      0
    );
  }

  /* JSX */
  return (
    <Lista>
      {listaConsumidores.map((consumidor) => (
        <Item
          key={consumidor.id}
          onClick={() => navigate(`/consumidor/${consumidor.id}`)}
        >
          <Inline mb>
            <ItemNome>{consumidor.nome}</ItemNome>
            <ItemCusto>
              R$ {gastoIndividual(consumidor.pedidos).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
          <ItemTexto>
            {consumidor.pedidos.length} Compra
            {consumidor.pedidos.length === 1 ? "" : "s"}
          </ItemTexto>
        </Item>
      ))}
    </Lista>
  );
}
