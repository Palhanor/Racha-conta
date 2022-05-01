/* IMPORTS */
import { useNavigate, useParams } from "react-router-dom";
import ListaComprasConsumidor from "./components/ListaComprasConsumidor";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import IConsumidor from "../../interfaces/consumidor";
import useCompras from "../../hooks/useCompras";
import useConsumidores from "../../hooks/useConsumidores";
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

/* COMPONENTE */
export default function Consumidor() {
  /* HOOKS DO REACT ROUTER */
  const navigate = useNavigate();
  const { ID } = useParams();

  /* HOOK PERSONALIZADO */
  const { listaConsumidores, removeConsumidor } = useConsumidores();
  const { encontraCompra, removeAutorCompra } = useCompras();

  /* CONSUMIDOR SELECIONADO */
  const consumidorSelecionado: IConsumidor = listaConsumidores.find(
    (consumidor) => consumidor.id === ID
  ) as IConsumidor;

  /* REDIRECIONADOR */
  if (!consumidorSelecionado) return <NotFound />;

  /* APAGAR CONSUMIDOR DA LISTA */
  function apagar(): void {
    removeConsumidor(consumidorSelecionado.id);
    // Deveria estar dentro do removeConsumidor
    removeAutorCompra(consumidorSelecionado.nome);
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
                (total, compra) =>
                  encontraCompra(compra).preco /
                    encontraCompra(compra).autores.length +
                  total,
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
        <ListaComprasConsumidor pedidos={consumidorSelecionado.pedidos} />{" "}
        {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
