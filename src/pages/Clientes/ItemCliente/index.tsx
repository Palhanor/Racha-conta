import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ICliente from "../../../interfaces/cliente";
import "./style.css";

export default function ItemCliente(props: ICliente) {
  const { nome, pedidos, id } = props;

  const [custo, setCusto] = useState<number>(0);

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
      </Link>
    </li>
  );
}
