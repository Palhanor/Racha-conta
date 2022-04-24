/* IMPORTS */
import { useNavigate, useParams } from "react-router-dom";
import ListaAutoresCompra from "./ListaAutoresCompra";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import ICompra from "../../interfaces/compra";
import useCompras from "../../hooks/useCompras";
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

  /* HOOKS DO REACT ROUTER */
  const { ID } = useParams();
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const { listaCompras, removeCompra } = useCompras();

  /* COMPRA SELECIONADA */
  const compraSelecionada: (ICompra | undefined) = listaCompras.find((dadosCompra) => dadosCompra.id === ID);

  /* REDIRECIONADOR */
  if (!compraSelecionada) return <NotFound />;

  /* APAGAR A COMPRA */
  function apagar(): void {
    removeCompra(ID);
    navigate("/compras");
  }

  /* JSX */
  return (
    <>
      <Container default>
        <Titulo secondary>{compraSelecionada.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {compraSelecionada.autores.length} Consumidor
            {compraSelecionada.autores.length === 1 ? "" : "es"}
          </ItemTexto>
          <ItemCusto>R$ {compraSelecionada.preco.toLocaleString("BRL")}</ItemCusto>
        </Inline>
        <div>
          <Botao danger onClick={apagar}>
            Apagar
          </Botao>
        </div>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        {<ListaAutoresCompra {...compraSelecionada} />} {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
