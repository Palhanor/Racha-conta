/* IMPORTS */
import ICompra from "../../../interfaces/compra";
import {
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaComprasConsumidor(compra: ICompra) {
  const { nome, preco, autores } = compra;

  /* JSX */
  return (
    <Item>
      <Inline>
        <div>
          <ItemNome>{nome}</ItemNome> &#183;{" "}
          <ItemTexto>R$ {preco.toLocaleString("BRL")}</ItemTexto>
        </div>
        <ItemCusto>
          R$ {(preco / autores.length).toLocaleString("BRL")}
        </ItemCusto>
      </Inline>
    </Item>
  );
}
