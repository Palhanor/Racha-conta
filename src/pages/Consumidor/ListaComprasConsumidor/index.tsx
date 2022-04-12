import { Item, ItemNome, ItemCusto, ItemTexto, Inline } from "../../../components/Styled";
import ICompra from "../../../interfaces/compra";

export default function ListaComprasConsumidor(props: ICompra) {
  const { nome, preco, autores } = props

  return (
    <Item>
      <Inline>
        <div>
          <ItemNome>{nome}</ItemNome>{" "}
          &#183;{" "}
          <ItemTexto>
            R$ {preco.toLocaleString("BRL")}
          </ItemTexto>
        </div>
        <ItemCusto>
          R$ {(preco / autores.length).toLocaleString("BRL")}
        </ItemCusto>
      </Inline>
    </Item>
  );
}
