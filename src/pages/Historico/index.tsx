import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navegacao from "../../components/Navegacao";
import {
  Titulo,
  Lista,
  Item,
  Inline,
  ItemNome,
  ItemCusto,
  ListaTitulo,
} from "../../components/StyledComponents";
import IConta from "../../interfaces/conta";
import { brkpt, color } from "../../styles";

const TituloMobile = styled(Titulo)`
  @media (min-width: ${brkpt.desktop}) {
    display: none;
  }
`

const NavegacaoPlaceholder = styled.div`
  display: none;

  @media (min-width: ${brkpt.desktop}) {
    display: block;
    order: 2;
    height: 75vh;
    width: 10px;
    border-radius: 0 10px 10px 0;
    background-color: ${color.themeDarker};
  }
`

const ListaResponsiva = styled(Lista)`
  @media (min-width: ${brkpt.desktop}) {
    order: 3;
    margin: 0 0 0 2%;
    max-height: 85vh;
    overflow-y: scroll;
    width: 90%;
    scrollbar-width: thin;
  }
`

const ListaTituloResponsivo = styled(ListaTitulo)`
  display: none;

  @media (min-width: ${brkpt.desktop}) {
    display: block;
  }
`

export default function Historico() {
  let historicoContasObj: IConta[] = [];
  const historicoContas = localStorage.getItem("historicoContas");
  if (historicoContas) {
    historicoContasObj = [...JSON.parse(historicoContas)];
  }

  const navigate = useNavigate();

  return (
    <>
      {historicoContasObj.length > 0 ? (
        <>
          <TituloMobile>Histórico</TituloMobile>
          <ListaResponsiva>
            <ListaTituloResponsivo>Histórico</ListaTituloResponsivo>
            {historicoContasObj.map((conta) => (
              <Item key={conta.id} onClick={() => navigate(`/conta/${conta.id}`)}>
                <Inline>
                  <ItemNome>{conta.nome}</ItemNome>
                  <ItemCusto>R$ {conta.compras.reduce((total, compra) => total + compra.preco, 0).toLocaleString("BRL")}</ItemCusto>
                </Inline>
              </Item>
            ))}
          </ListaResponsiva>
        </>
      ) : (
        <Titulo>Histórico vazio</Titulo>
      )}
      <NavegacaoPlaceholder></NavegacaoPlaceholder>
      <Navegacao />
    </>
  );
}