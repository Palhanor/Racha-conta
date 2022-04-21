/* IMPORTS */
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { consumidores } from "../../states/atom";
import useRemoveConsumidor from "../../hooks/consumidor/useRemoveConsumidor";
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
  Inline,
} from "../../components/StyledComponents";

/* COMPONENTE */
export default function Consumidor() {

  /* ESTADO GLOBAL RECOIL */
  const listaConsumidores = useRecoilValue(consumidores);

  /* HOOKS DO REACT ROUTER */
  const navigate = useNavigate();
  const { ID } = useParams();

  /* HOOK PERSONALIZADO */
  const removerConsumidor = useRemoveConsumidor();

  /* CONSUMIDOR SELECIONADO */
  const consumidor = listaConsumidores.find(
    (dadosConsumidor) => dadosConsumidor.id === ID
  );

  /* REDIRECIONADOR */
  if (!consumidor) return <NotFound />;

  /* APAGAR CONSUMIDOR DA LISTA */
  function apagar(): void {
    removerConsumidor(ID);
    navigate("/consumidores");
  }

  /* JSX */
  return (
    <>
      <Container default>
        <Titulo secondary>{consumidor.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {consumidor.pedidos.length} Compra
            {consumidor.pedidos.length === 1 ? "" : "s"}
          </ItemTexto>
          <ItemCusto>
            R${" "}
            {consumidor.pedidos
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
          {consumidor.pedidos.map((compra) => (
            <ListaComprasConsumidor key={compra.id} {...compra} />
          ))} {/* COMPONENTE */}
        </Lista>
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
