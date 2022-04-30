/* IMPORTS */
import useCompras from "../../../hooks/useCompras";
import {
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
  Lista,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaComprasConsumidor({
  pedidos,
}: {
  pedidos: string[];
}) {
  /* HOOK PERSONALIZADO */
  const { encontraCompra } = useCompras();

  /* JSX */
  return (
    <Lista>
      {pedidos.map((compra) => (
        <Item key={encontraCompra(compra).id}>
          <Inline>
            <div>
              <ItemNome>{encontraCompra(compra).nome}</ItemNome> &#183;{" "}
              <ItemTexto>
                R$ {encontraCompra(compra).preco.toLocaleString("BRL")}
              </ItemTexto>
            </div>
            <ItemCusto>
              R${" "}
              {(
                encontraCompra(compra).preco /
                encontraCompra(compra).autores.length
              ).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
