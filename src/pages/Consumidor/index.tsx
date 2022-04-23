/* IMPORTS */
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { consumidores } from "../../states/atom";
import useRemoveConsumidor from "../../hooks/consumidor/useRemoveConsumidor";
import ListaComprasConsumidor from "./ListaComprasConsumidor";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import IConsumidor from "../../interfaces/consumidor";
import {
  Botao,
  Titulo,
  ItemCusto,
  ItemTexto,
  ListaContainer,
  ListaTitulo,
  Container,
  Inline,
} from "../../components/StyledComponents";
import useEncontraCompra from "../../hooks/compra/useEncontraCompra";

/* COMPONENTE */
export default function Consumidor() {

  /* ESTADO GLOBAL RECOIL */
  const listaConsumidores = useRecoilValue(consumidores);

  /* HOOKS DO REACT ROUTER */
  const navigate = useNavigate();
  const { ID } = useParams();

  /* HOOK PERSONALIZADO */
  const removerConsumidor = useRemoveConsumidor();
  const encontraCompra = useEncontraCompra()

  /* CONSUMIDOR SELECIONADO */
  const consumidorSelecionado: (IConsumidor | undefined) = listaConsumidores.find(
    (dadosConsumidor) => dadosConsumidor.id === ID
  );

  /* REDIRECIONADOR */
  if (!consumidorSelecionado) return <NotFound />;

  /* APAGAR CONSUMIDOR DA LISTA */
  function apagar(): void {
    removerConsumidor(ID);
    navigate("/consumidores");
  }

  /* JSX */
  return (
    <>
      <Container default>
        <Titulo secondary>{consumidorSelecionado.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {consumidorSelecionado.pedidos.length} Compra
            {consumidorSelecionado.pedidos.length === 1 ? "" : "s"}
          </ItemTexto>
          <ItemCusto>
            R${" "}
            {consumidorSelecionado.pedidos
              .reduce(
                (total, item) => encontraCompra(item).preco / encontraCompra(item).autores.length + total,
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
        <ListaComprasConsumidor pedidos={consumidorSelecionado.pedidos} /> {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
