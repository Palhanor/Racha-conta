import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navegacao from "../../components/Navegacao";
import { brkpt, color } from "../../styles";
import {
  Titulo,
  Lista,
  Item,
  Inline,
  ItemNome,
  ItemCusto,
  ListaTitulo,
} from "../../components/StyledComponents";
import useHistorico from "../../hooks/useHistorico";

const TituloMobile = styled(Titulo)`
  @media (min-width: ${brkpt.desktop}) {
    display: none;
  }
`;
const TituloDesktop = styled(Titulo)`
  order: 3;
  margin-left: 2%;
`;
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
`;
const ListaResponsiva = styled(Lista)`
  @media (min-width: ${brkpt.desktop}) {
    order: 3;
    margin: 0 0 0 2%;
    max-height: 85vh;
    overflow-y: scroll;
    width: 90%;
    scrollbar-width: thin;
  }
`;
const ListaTituloResponsivo = styled(ListaTitulo)`
  display: none;

  @media (min-width: ${brkpt.desktop}) {
    display: block;
  }
`;

export default function Historico() {
  const historico = useHistorico()();
  const navigate = useNavigate();

  return (
    <>
      {historico.length > 0 ? (
        <>
          <TituloMobile>Histórico</TituloMobile>
          <ListaResponsiva>
            <ListaTituloResponsivo>Histórico</ListaTituloResponsivo>
            {historico.map((conta) => (
              <Item
                key={conta.id}
                onClick={() => navigate(`/conta/${conta.id}`)}
              >
                <Inline>
                  <ItemNome>{conta.nome}</ItemNome>
                  <ItemCusto>
                    R${" "}
                    {conta.compras
                      .reduce((total, compra) => total + compra.preco, 0)
                      .toLocaleString("BRL")}
                  </ItemCusto>
                </Inline>
              </Item>
            ))}
          </ListaResponsiva>
        </>
      ) : (
        <TituloDesktop>Histórico vazio</TituloDesktop>
      )}
      <NavegacaoPlaceholder></NavegacaoPlaceholder>
      <Navegacao />
    </>
  );
}
