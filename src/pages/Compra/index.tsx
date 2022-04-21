/* IMPORTS */
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { compras } from "../../states/atom";
import useRemoveCompra from "../../hooks/compra/useRemoveCompra";
import ListaAutoresCompra from "./ListaAutoresCompra";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
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
export default function Compra() {

  /* ESTADO GLOBAL RECOIL */
  const listaCompras = useRecoilValue(compras);

  /* HOOKS DO REACT ROUTER */
  const { ID } = useParams();
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const removeCompra = useRemoveCompra();

  /* COMPRA SELECIONADA */
  const compra = listaCompras.find((dadosCompra) => dadosCompra.id === ID);

  /* REDIRECIONADOR */
  if (!compra) return <NotFound />;

  /* APAGAR A COMPRA */
  function apagar(): void {
    removeCompra(ID);
    navigate("/compras");
  }

  /* JSX */
  return (
    <>
      <Container default>
        <Titulo secondary>{compra.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {compra.autores.length} Consumidor
            {compra.autores.length === 1 ? "" : "es"}
          </ItemTexto>
          <ItemCusto>R$ {compra.preco.toLocaleString("BRL")}</ItemCusto>
        </Inline>
        <div>
          <Botao danger onClick={apagar}>
            Apagar
          </Botao>
        </div>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        {<ListaAutoresCompra {...compra} />} {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
