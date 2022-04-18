import ICompra from "../../../interfaces/compra";
import { Lista, Item, ItemNome, ItemCusto, Inline } from "../../../components/StyledComponents";

export default function ListaAutoresCompra({ compra }: { compra: ICompra }) {
  return (
    <Lista>
      {compra.autores.map((autor, index) => (
        <Item key={index}>
          <Inline>
            <ItemNome>{autor}</ItemNome>
            <ItemCusto>
              R$ {(compra.preco / compra.autores.length).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
