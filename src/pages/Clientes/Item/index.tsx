import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ICliente from "../../../interfaces/cliente";
import "../../../styles/global.scss"

export default function Item(props: ICliente) {
  const { nome, pedidos, id } = props;
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
    <li className="global-list_item" onClick={() => navigate(`/cliente/${id}`)} >
      <div className="global-util_horizontal-align global-util_margin-bottom">
        <strong className="global-list_item-title">{nome}</strong>
        <span className="global-list_item-cost">R$ {custo.toLocaleString("BRL")}</span>
      </div>
      <span className="global-list_item-text">
        {pedidos.length} Pedido{pedidos.length === 1 ? "" : "s"}
      </span>
    </li>
  );
}