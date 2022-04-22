/* IMPORTS */
import ICompra from "../../../interfaces/compra";
import {
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
  Lista,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaComprasConsumidor({pedidos}: {pedidos: ICompra[]}) {

  /* JSX */
  return (
    <Lista>
      {pedidos.map(compra => (
        <Item key={compra.id}>
          <Inline>
            <div>
              <ItemNome>{compra.nome}</ItemNome> &#183;{" "}
              <ItemTexto>R$ {compra.preco.toLocaleString("BRL")}</ItemTexto>
            </div>
            <ItemCusto>
              R$ {(compra.preco / compra.autores.length).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
