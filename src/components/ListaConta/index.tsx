import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { brkpt, color } from "../../styles";
import { adicionarConta, excluirConta } from "../../utils/localStorage";
import IConsumidor from "../../interfaces/consumidor";
import ICompra from "../../interfaces/compra";
import useResetarConta from "../../hooks/useResetarConta";
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

// TO DO: Transformar no recebimento de props do tipo IConta
export default function ListaConta(props: {
  conta: string,
  listaConsumidores: IConsumidor[],
  listaCompras: ICompra[]
}
) {
  const { conta, listaConsumidores, listaCompras } = props;
  const resetarConta = useResetarConta();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ID } = useParams();

  const total = listaCompras.reduce((total, item) => item.preco + total, 0);
  const gastosConsumidores: number[] = listaConsumidores.map((dadosConsumidor) =>
    dadosConsumidor.pedidos.reduce(
      (total, item) => item.preco / item.autores.length + total,
      0
    )
  );
  const percentualConsumidores: number[] = gastosConsumidores.map(
    (gasto) => gasto / total
  );

  function finalizar(): void {

    const objetoConta = {
      nome: conta,
      consumidores: listaConsumidores,
      compras: listaCompras,
      id: uuidv4(),
    };

    const novaConta = adicionarConta(objetoConta);
    localStorage.setItem("historicoContas", novaConta);

    resetarConta()
    navigate("/");
  }

  function excluir(): void {
    const novoHistorico = excluirConta(ID);
    localStorage.setItem("historicoContas", novoHistorico);
    navigate("/historico");
  }

  return (
    <>
      <ContainerConta>
        <ListaTituloExtrato>Consumidores</ListaTituloExtrato>
        <Lista>
          {listaConsumidores.map((dadosConsumidor, index) => (
            <ItemLista key={dadosConsumidor.id}>
              <ItemNome>{dadosConsumidor.nome}</ItemNome>
              <div>
                <ItemCusto>
                  R$ {gastosConsumidores[index].toLocaleString("BRL")}
                </ItemCusto>
                {listaConsumidores[index].pedidos.length > 0 && (
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
          {listaCompras.map((dadosCompra) => (
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
        <TituloConta>{conta}</TituloConta>
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
