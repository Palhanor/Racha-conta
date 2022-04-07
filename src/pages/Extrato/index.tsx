import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IExtratoProps } from "../../interfaces/props";
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
      <div className="extrato_container">
        <h2 className="extrato_title">Clientes</h2>
        <ul className="global-list">
          {listaClientes.map((dadosCliente, index) => (
            <li
              key={dadosCliente.id}
              className="extrato_item global-util_horizontal-align"
            >
              <strong className="extrato_item-title">
                {dadosCliente.nome}
              </strong>
              <div>
                <span className="global-list_item-cost">
                  R$ {gastosClientes[index].toFixed(2)}
                </span>
                {listaClientes[index].pedidos.length > 0 && (
                  <span className="global-list_item-text">
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
        <div className="extrato_container">
          <h2 className="extrato_title">Pedidos</h2>
          <ul className="global-list">
            {listaPedidos.map((dadosPedido) => (
              <li
                key={dadosPedido.id}
                className="extrato_item global-util_horizontal-align"
              >
                <strong className="extrato_item-title">
                  {dadosPedido.nome}
                </strong>
                <div>
                  <span className="global-list_item-cost">
                    R$ {dadosPedido.preco.toFixed(2)}
                  </span>{" "}
                  &#183;{" "}
                  <span className="global-list_item-text">
                    {((dadosPedido.preco / total) * 100).toFixed(2)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="extrato_container">
        <h2 className="extrato_title">
          Total: <span className="extrato_total">R$ {total.toFixed(2)}</span>
        </h2>
        <button className="global-element_button" onClick={() => navigate(-1)}>
          Retornar
        </button>
        <button
          className="global-element_button global-element_button--danger"
          onClick={() => finalizarMesa()}
        >
          Finalizar
        </button>
      </div>
    </>
  );
}
