import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { brkpt, color } from "../../styles";
import { adicionarConta, excluirConta } from "../../utils/localStorage";
import { useSetRecoilState } from "recoil";
import { compras, consumidores, nomeConta } from "../../states/atom";
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
import IConsumidor from "../../interfaces/consumidor";
import ICompra from "../../interfaces/compra";

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
  const setConta = useSetRecoilState(nomeConta)
  const setListaConsumidores = useSetRecoilState(consumidores)
  const setListaCompras = useSetRecoilState(compras)
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ID } = useParams();

  const total = listaCompras.reduce((total, item) => item.preco + total, 0);
  const gastosClientes: number[] = listaConsumidores.map((dadosCliente) =>
    dadosCliente.pedidos.reduce(
      (total, item) => item.preco / item.autores.length + total,
      0
    )
  );
  const percentualClientes: number[] = gastosClientes.map(
    (gasto) => gasto / total
  );

  function resetStates(): void {
    setConta("");
    setListaConsumidores([]);
    setListaCompras([]);
    navigate("/");
  }

  function finalizar(): void {

    const objetoConta = {
      nome: conta,
      consumidores: listaConsumidores,
      compras: listaCompras,
      id: uuidv4(),
    };

    const novaConta = adicionarConta(objetoConta);
    localStorage.setItem("historicoContas", novaConta);

    resetStates();
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
          {listaConsumidores.map((dadosCliente, index) => (
            <ItemLista key={dadosCliente.id}>
              <ItemNome>{dadosCliente.nome}</ItemNome>
              <div>
                <ItemCusto>
                  R$ {gastosClientes[index].toLocaleString("BRL")}
                </ItemCusto>
                {listaConsumidores[index].pedidos.length > 0 && (
                  <ItemTexto>
                    {" "}
                    &#183; {(percentualClientes[index] * 100).toFixed(2)}%
                  </ItemTexto>
                )}
              </div>
            </ItemLista>
          ))}
        </Lista>
        <ListaTituloExtrato>Compras</ListaTituloExtrato>
        <Lista>
          {listaCompras.map((dadosPedido) => (
            <ItemLista key={dadosPedido.id}>
              <ItemNome>{dadosPedido.nome}</ItemNome>
              <div>
                <ItemCusto>
                  R$ {dadosPedido.preco.toLocaleString("BRL")}
                </ItemCusto>{" "}
                &#183;{" "}
                <ItemTexto>
                  {((dadosPedido.preco / total) * 100).toFixed(2)}%
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
