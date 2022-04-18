import { useNavigate, useParams } from "react-router-dom";
import ListaComprasConsumidor from "./ListaComprasConsumidor";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import { useRecoilValue } from "recoil";
import { consumidores } from "../../states/atom";
import useRemoveConsumidor from "../../hooks/useRemoveConsumidor";
import {
  Botao,
  Titulo,
  Lista,
  ItemCusto,
  ItemTexto,
  ListaContainer,
  ListaTitulo,
  Container,
  Inline,
} from "../../components/StyledComponents";

export default function Consumidor() {
  const listaConsumidores = useRecoilValue(consumidores);
  const removerConsumidor = useRemoveConsumidor();
  const { ID } = useParams();
  const navigate = useNavigate();
  const cliente = listaConsumidores.find(
    (dadosCliente) => dadosCliente.id === ID
  );

  if (!cliente) {
    return <NotFound />;
  }

  function apagar(): void {
    removerConsumidor(ID);
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
          <Botao danger onClick={apagar}>
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
