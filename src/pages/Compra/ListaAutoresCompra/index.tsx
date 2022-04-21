/* IMPORTS */
import ICompra from "../../../interfaces/compra";
import { Lista, Item, ItemNome, ItemCusto, Inline } from "../../../components/StyledComponents";

/* COMPONENTE */
export default function ListaAutoresCompra(compra: ICompra) {
  const { preco, autores } = compra; 

  /* JSX */
  return (
    <Lista>
      {autores.map((autor, index) => (
        <Item key={index}>
          <Inline>
            <ItemNome>{autor}</ItemNome>
            <ItemCusto>
              R$ {(preco / compra.autores.length).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
