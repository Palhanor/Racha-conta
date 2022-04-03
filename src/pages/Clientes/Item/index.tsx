import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ICliente from "../../../interfaces/cliente";
import "./style.css";

export default function Item({ nome, pedidos, id }: ICliente) {
  const [custo, setCusto] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const custoTotal = pedidos.reduce(
      (total, item) => item.preco / item.autores.length + total,
      0
    );
    setCusto(custoTotal);
  }, [pedidos]);

  return (
    <li className="clientes_item" onClick={() => navigate(`/cliente/${id}`)} >
      <div className="clientes_nome-custo">
        <strong>{nome}</strong>
        <span className="clientes_custo">R$ {custo.toFixed(2)}</span>
      </div>
      <span className="clientes_num-pedidos">
        {pedidos.length} Pedido{pedidos.length === 1 ? "" : "s"}
      </span>
    </li>
  );
}
