import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { brkpt, color } from "../../styles";
import useResetarConta from "../../hooks/useResetarConta";
import useAdicionaConta from "../../hooks/useAdicionaConta";
import useRemoveConta from "../../hooks/useRemoveConta";
import useAtualizarConta from "../../hooks/useAtualizaConta";
import IConta from "../../interfaces/conta";
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

// Parece muito com o Container global
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

export default function ListaConta(contaSelecionada: IConta) {
  const { nome, consumidores, compras, id } = contaSelecionada;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const atualizaConta = useAtualizarConta();
  const adicionaConta = useAdicionaConta();
  const resetarConta = useResetarConta();
  const removeConta = useRemoveConta();

  const total = compras.reduce((total, item) => item.preco + total, 0);
  const gastosConsumidores: number[] = consumidores.map(
    (dadosConsumidor) =>
      dadosConsumidor.pedidos.reduce(
        (total, item) => item.preco / item.autores.length + total,
        0
      )
  );
  const percentualConsumidores: number[] = gastosConsumidores.map(
    (gasto) => gasto / total
  );

  function finalizar(): void {
    atualizaConta()
    adicionaConta(contaSelecionada);
    resetarConta();
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
                  R$ {gastosConsumidores[index].toLocaleString("BRL")}
                </ItemCusto>
                {consumidores[index].pedidos.length > 0 && (
                  <ItemTexto>
                    {" "}
                    &#183; {(percentualConsumidores[index] * 100).toFixed(2)}%
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
                  {((dadosCompra.preco / total) * 100).toFixed(2)}%
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
          <TotalCusto>R$ {total.toLocaleString("BRL")}</TotalCusto>
        </Inline>
        {pathname === "/extrato" ? (
          <Botao danger onClick={finalizar}>
            Finalizar
          </Botao>
        ) : (
          <Botao danger onClick={excluir}>
            Excluir
          </Botao>
        )}
      </Container>
    </>
  );
}
