import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IExtratoProps } from "../../interfaces/props";
import * as Exattrs from "./Exattrs";
import "../../styles/global.scss";
import "./Extrato.scss";

export default function Extrato(props: IExtratoProps) {
  const {
    listaClientes,
    listaPedidos,
    mesa,
    setMesa,
    setNome,
    setListaClientes,
    setListaPedidos,
  } = props;
  const total = listaPedidos.reduce((total, item) => item.preco + total, 0);
  const gastosClientes: number[] = listaClientes.map((dadosCliente) =>
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
    if (mesa === "") {
      navigate("/");
    }
  });

  function finalizarMesa() {
    setMesa("");
    setNome("");
    setListaClientes([]);
    setListaPedidos([]);
    navigate("/");
  }

  return (
    <>
      <div {...Exattrs.container}>
        <h2 {...Exattrs.title}>Clientes</h2>
        <ul {...Exattrs.lista}>
          {listaClientes.map((dadosCliente, index) => (
            <li key={dadosCliente.id} {...Exattrs.item}>
              <strong {...Exattrs.nome}>{dadosCliente.nome}</strong>
              <div>
                <span {...Exattrs.custo}>
                  R$ {gastosClientes[index].toLocaleString("BRL")}
                </span>
                {listaClientes[index].pedidos.length > 0 && (
                  <span {...Exattrs.porcentagem}>
                    {" "}
                    &#183; {(percentualClientes[index] * 100).toFixed(2)}%
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {listaPedidos.length > 0 && (
        <div {...Exattrs.container}>
          <h2 {...Exattrs.title}>Pedidos</h2>
          <ul {...Exattrs.lista}>
            {listaPedidos.map((dadosPedido) => (
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
      )}
      <div {...Exattrs.container}>
        <h2 {...Exattrs.title}>
          Total: <span {...Exattrs.total}>R$ {total.toLocaleString("BRL")}</span>
        </h2>
        <button {...Exattrs.retornarBotao} onClick={() => navigate(-1)}>
          Retornar
        </button>
        <button {...Exattrs.finalizarBotao} onClick={() => finalizarMesa()}>
          Finalizar
        </button>
      </div>
    </>
  );
}
