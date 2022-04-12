import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IExtratoProps } from "../../interfaces/props";
import "./style.scss";
import Navegacao from "../../components/Navegacao";
import { v4 as uuidv4 } from "uuid";
import { Botao, Lista, ItemCusto, ItemTexto } from "../../components/Styled";
// TO DO: import { randomUUID } from "crypto";

export default function Extrato(props: IExtratoProps) {
  const {
    listaConsumidores,
    listaCompras,
    conta,
    setConta,
    setNome,
    setListaConsumidores,
    setListaCompras,
  } = props;
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

  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/")
  });

  function finalizarMesa() {

    const objetoConta = {
      nome: conta,
      consumidores: listaConsumidores,
      compras: listaCompras,
      id: uuidv4()
    }

    if (!localStorage.getItem("historicoContas")) {
      const arrObjetoConta = [objetoConta];
      localStorage.setItem("historicoContas", JSON.stringify(arrObjetoConta))
    } else {
      const historicoContas = localStorage.getItem("historicoContas");
      const historicoContasObj  = JSON.parse(historicoContas as string)
      historicoContasObj.push(objetoConta)
      localStorage.setItem("historicoContas", JSON.stringify(historicoContasObj))
    }

    setConta("");
    setNome("");
    setListaConsumidores([]);
    setListaCompras([]);
    navigate("/");
  }

  return (
    <>
      <div className="extrato_container extrato_container-lista">
        <h2 className="extrato_title">Consumidores</h2>
        <Lista>
          {listaConsumidores.map((dadosCliente, index) => (
            <li key={dadosCliente.id} className="extrato_item">
              <strong className="extrato_item-title">{dadosCliente.nome}</strong>
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
            </li>
          ))}
        </Lista>
        <br />
        <h2 className="extrato_title">Compras</h2>
        <Lista>
          {listaCompras.map((dadosPedido) => (
            <li key={dadosPedido.id} className="extrato_item">
              <strong className="extrato_item-title">{dadosPedido.nome}</strong>
              <div>
                <ItemCusto>
                  R$ {dadosPedido.preco.toLocaleString("BRL")}
                </ItemCusto>{" "}
                &#183;{" "}
                <ItemTexto>
                  {((dadosPedido.preco / total) * 100).toFixed(2)}%
                </ItemTexto>
              </div>
            </li>
          ))}
        </Lista>
      </div>
      <div className="extrato_container extrato_container-total">
        <h1 className="extrato_conta">{conta}</h1>
        <h2 className="extrato_title">
          Total:{" "}
          <span className="extrato_total">R$ {total.toLocaleString("BRL")}</span>
        </h2>
        <Botao danger onClick={() => finalizarMesa()}>
          Finalizar
        </Botao>
      </div>
      <Navegacao />
    </>
  );
}
