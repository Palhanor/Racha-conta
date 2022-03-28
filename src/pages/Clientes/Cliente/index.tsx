import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ICliente from "../../../interfaces/cliente";
import "./style.css";

export default function Cliente({
  nome,
  pedidos,
  id,
}: ICliente) {
  const [custo, setCusto] = useState(0);

  useEffect(() => {
    const custoTotal = pedidos.reduce((total, item) => item.preco + total, 0);
    setCusto(custoTotal);
  }, [pedidos]);

  return (
    <li className="clientes_item">
      <Link to={`/clientes/${id}`} className="clientes_page-link">
        <div className="clientes_nome-custo">
          <strong>{nome}</strong>
          <span className="clientes_custo">R$ {custo}</span>
        </div>
        {pedidos.length > 0 && (
          <ol className="clientes_lista-pedidos">
            {pedidos.map((dadosPedido, index) => (
              <li key={index} className="clientes_pedido">
                {index + 1}. {dadosPedido.nome} - R${" "}
                {dadosPedido.preco.toFixed(2)}
              </li>
            ))}
          </ol>
        )}
      </Link>
    </li>
  );
}
