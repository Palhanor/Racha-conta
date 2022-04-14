import { useNavigate, useParams } from "react-router-dom";
import ListaComprasConsumidor from "./ListaComprasConsumidor";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";

import {
  Botao,
  Titulo,
  Lista,
  ItemCusto,
  ItemTexto,
  ListaContainer,
  ListaTitulo,
  Container,
  Inline
} from "../../components/StyledComponents";
import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

export default function Consumidor() {
  const [listaConsumidores, setListaConsumidores] = useRecoilState(consumidores)
  const { ID } = useParams();
  const cliente = listaConsumidores.find(
    (dadosCliente) => dadosCliente.id === ID
  );

  const navigate = useNavigate();

  if (!cliente) {
    return <NotFound />;
  }

  function apagarCliente() {
    setListaConsumidores((velhaLista) =>
      velhaLista.filter(
        (velhoCliente) =>
          velhoCliente.id !== ID || velhoCliente.pedidos.length > 0
      )
    );
    navigate("/consumidores");
  }

  return (
    <>
      <Container default>
        <Titulo secondary>{cliente.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {cliente.pedidos.length} Compra
            {cliente.pedidos.length === 1 ? "" : "s"}
          </ItemTexto>
          <ItemCusto>
            R${" "}
            {cliente.pedidos
              .reduce(
                (total, item) => item.preco / item.autores.length + total,
                0
              )
              .toLocaleString("BRL")}
          </ItemCusto>
        </Inline>
        <div>
          <Botao danger onClick={apagarCliente}>
            Apagar
          </Botao>
        </div>
      </Container>
      <ListaContainer>
        <ListaTitulo>Compras</ListaTitulo>
        <Lista>
          {cliente.pedidos.map((pedido) => (
            <ListaComprasConsumidor key={pedido.id} {...pedido} />
          ))}
        </Lista>
      </ListaContainer>
      <Navegacao />
    </>
  );
}
