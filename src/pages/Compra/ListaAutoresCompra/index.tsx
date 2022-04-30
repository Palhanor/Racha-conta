/* IMPORTS */
import ICompra from "../../../interfaces/compra";
import {
  Lista,
  Item,
  ItemNome,
  ItemCusto,
  Inline,
} from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaAutoresCompra(compra: ICompra) {
  const { preco, autores } = compra;

  /* GASTO POR AUTOR */
  const custoIndividual: number = preco / autores.length;

  /* JSX */
  return (
    <Lista>
      {autores.map((autor) => (
        <Item key={autor}>
          <Inline>
            <ItemNome>{autor}</ItemNome>
            <ItemCusto>R$ {custoIndividual.toLocaleString("BRL")}</ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
