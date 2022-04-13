import ICompra from "../../../interfaces/compra";
import { Lista, Item, ItemNome, ItemCusto, Inline } from "../../../components/StyledComponents";

export default function ListaAutoresCompra({ pedido }: { pedido: ICompra }) {
  return (
    <Lista>
      {pedido.autores.map((autor, index) => (
        <Item key={index}>
          <Inline>
            <ItemNome>{autor}</ItemNome>
            <ItemCusto>
              R$ {(pedido.preco / pedido.autores.length).toLocaleString("BRL")}
            </ItemCusto>
          </Inline>
        </Item>
      ))}
    </Lista>
  );
}
