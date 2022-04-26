// TODO: Corrigir o poroblema de NaN na visualização da conta pelo histórico
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import useConta from "../../hooks/useConta";
import styled from "styled-components";
import { brkpt, color } from "../../styles";
import IConta from "../../interfaces/conta";
import useCompras from "../../hooks/useCompras";
import NotFound from "../NotFound";
import {
  Botao,
  Lista,
  ItemCusto,
  ItemTexto,
  Container,
  Titulo,
  ItemNome,
  Inline,
  ListaTitulo,
} from "../../components/StyledComponents";

const ContainerConta = styled.div`
  width: 90%;
  margin: 2rem auto;
  border-radius: 10px;
  background-color: ${color.white};
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: ${brkpt.desktop}) {
    order: 3;
    max-height: 90vh;
    margin: 0;
    width: 40vw;
    overflow-y: scroll;
    padding: 2rem;
    scrollbar-width: thin;
  }
`;
const ItemLista = styled.li`
  border: 1px dashed ${color.gray};
  border-bottom: none;
  padding: 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :last-child {
    border-bottom: 1px dashed ${color.gray};
  }
`;
const TituloConta = styled(Titulo)`
  color: ${color.black};
  margin-top: 0;
  text-align: left;

  @media (min-width: ${brkpt.tablet}) {
    margin-bottom: 2rem;
  }
`;
const TotalTitulo = styled.h2`
  margin: 0;
`;
const TotalCusto = styled(ItemCusto)`
  font-weight: 700;
  font-size: 1.4rem;
`;
const ListaTituloExtrato = styled(ListaTitulo)`
  color: ${color.black};
  margin: 0 0 1rem 0;
`;

export default function Extrato() {
  const navigate = useNavigate();
  const { ID } = useParams();
  const { encontraCompra } = useCompras();
  const { conta, historico, adicionaConta, removeConta, resetaConta } =
    useConta();

  const contaSelecionada: IConta =
    conta.id === ID
      ? conta
      : (historico.find((conta) => conta.id === (ID as string)) as IConta);

  if (!contaSelecionada) return <NotFound />;

  const { nome, consumidores, compras, id } = contaSelecionada as IConta;

  const gastoTotal: number = compras.reduce(
    (total, item) => item.preco + total,
    0
  );

  const gastosIndividuais: number[] = consumidores.map((dadosConsumidor) =>
    dadosConsumidor.pedidos.reduce(
      (total, item) =>
        encontraCompra(item, compras).preco /
          encontraCompra(item, compras).autores.length +
        total,
      0
    )
  );

  const percentuaisIndividuais: number[] = gastosIndividuais.map(
    (gasto) => gasto / gastoTotal
  );

  function finalizar(): void {
    const contaSelecionadaValidada = contaSelecionada as IConta;
    adicionaConta(contaSelecionadaValidada);
    resetaConta();
    navigate("/");
  }

  function excluir(): void {
    removeConta(id);
    navigate("/historico");
  }

  return (
    <>
      <ContainerConta>
        <ListaTituloExtrato>Consumidores</ListaTituloExtrato>
        <Lista>
          {consumidores.map((dadosConsumidor, index) => (
            <ItemLista key={dadosConsumidor.id}>
              <ItemNome>{dadosConsumidor.nome}</ItemNome>
              <div>
                <ItemCusto>
                  R$ {gastosIndividuais[index].toLocaleString("BRL")}
                </ItemCusto>
                {consumidores[index].pedidos.length > 0 && (
                  <ItemTexto>
                    {" "}
                    &#183; {(percentuaisIndividuais[index] * 100).toFixed(2)}%
                  </ItemTexto>
                )}
              </div>
            </ItemLista>
          ))}
        </Lista>
        <ListaTituloExtrato>Compras</ListaTituloExtrato>
        <Lista>
          {compras.map((dadosCompra) => (
            <ItemLista key={dadosCompra.id}>
              <ItemNome>{dadosCompra.nome}</ItemNome>
              <div>
                <ItemCusto>
                  R$ {dadosCompra.preco.toLocaleString("BRL")}
                </ItemCusto>{" "}
                &#183;{" "}
                <ItemTexto>
                  {((dadosCompra.preco / gastoTotal) * 100).toFixed(2)}%
                </ItemTexto>
              </div>
            </ItemLista>
          ))}
        </Lista>
      </ContainerConta>
      <Container default>
        <TituloConta>{nome}</TituloConta>
        <Inline>
          <TotalTitulo>Total</TotalTitulo>
          <TotalCusto>R$ {gastoTotal.toLocaleString("BRL")}</TotalCusto>
        </Inline>
        {conta.id === ID ? (
          <Botao danger onClick={finalizar}>
            Finalizar
          </Botao>
        ) : (
          <Botao danger onClick={excluir}>
            Excluir
          </Botao>
        )}
      </Container>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
