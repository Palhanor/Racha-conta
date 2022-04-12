import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Navegacao from "../../components/Navegacao";
import { ICompraProps } from "../../interfaces/props";
import ListaAutoresCompra from "./ListaAutoresCompra";
import {
  Botao,
  Titulo,
  ItemCusto,
  ItemTexto,
  ListaContainer,
  ListaTitulo,
  Container,
  Inline,
} from "../../components/Styled";

export default function Compra(props: ICompraProps) {
  const { listaCompras, setListaCompras, setListaConsumidores } = props;
  const { ID } = useParams();
  const pedido = listaCompras.find((dadosPedido) => dadosPedido.id === ID);
  const navigate = useNavigate();

  if (!pedido) {
    return <NotFound />;
  }

  function apagarPedido() {
    setListaConsumidores((velhaListaClientes) =>
      velhaListaClientes.map((dadosCliente) => {
        const { nome, pedidos, id } = dadosCliente;
        const novosPedidos = pedidos.filter((pedido) => pedido.id !== ID);
        return {
          nome: nome,
          pedidos: novosPedidos,
          id: id,
        };
      })
    );

    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoPedido) => velhoPedido.id !== ID)
    );
    navigate("/compras");
  }

  return (
    <>
      <Container>
        <Titulo secondary>{pedido.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {pedido.autores.length} Consumidor
            {pedido.autores.length === 1 ? "" : "es"}
          </ItemTexto>
          <ItemCusto>R$ {pedido.preco.toLocaleString("BRL")}</ItemCusto>
        </Inline>
        <div>
          <Botao danger onClick={() => apagarPedido()}>
            Apagar
          </Botao>
        </div>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        {<ListaAutoresCompra pedido={pedido} />}
      </ListaContainer>
      <Navegacao />
    </>
  );
}
