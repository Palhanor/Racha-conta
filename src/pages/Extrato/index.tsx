import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IExtratoProps } from "../../interfaces/props";
import * as Exattrs from "./Exattrs";
import "../../styles/global.scss";
import "./Extrato.scss";
import Navegacao from "../../components/Navegacao";

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
      compras: listaCompras
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
      <div {...Exattrs.containerLista}>
        <h2 {...Exattrs.title}>Consumidores</h2>
        <ul {...Exattrs.lista}>
          {listaConsumidores.map((dadosCliente, index) => (
            <li key={dadosCliente.id} {...Exattrs.item}>
              <strong {...Exattrs.nome}>{dadosCliente.nome}</strong>
              <div>
                <span {...Exattrs.custo}>
                  R$ {gastosClientes[index].toLocaleString("BRL")}
                </span>
                {listaConsumidores[index].pedidos.length > 0 && (
                  <span {...Exattrs.porcentagem}>
                    {" "}
                    &#183; {(percentualClientes[index] * 100).toFixed(2)}%
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <br />
        <h2 {...Exattrs.title}>Compras</h2>
        <ul {...Exattrs.lista}>
          {listaCompras.map((dadosPedido) => (
            <li key={dadosPedido.id} {...Exattrs.item}>
              <strong {...Exattrs.nome}>{dadosPedido.nome}</strong>
              <div>
                <span {...Exattrs.custo}>
                  R$ {dadosPedido.preco.toLocaleString("BRL")}
                </span>{" "}
                &#183;{" "}
                <span {...Exattrs.porcentagem}>
                  {((dadosPedido.preco / total) * 100).toFixed(2)}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div {...Exattrs.containerTotal}>
        <h1 {...Exattrs.conta}>{conta}</h1>
        <h2 {...Exattrs.title}>
          Total:{" "}
          <span {...Exattrs.total}>R$ {total.toLocaleString("BRL")}</span>
        </h2>
        <button {...Exattrs.finalizarBotao} onClick={() => finalizarMesa()}>
          Finalizar
        </button>
      </div>
      <Navegacao />
    </>
  );
}
