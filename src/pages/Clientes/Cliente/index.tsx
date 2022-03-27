// Dependencies
import { useEffect, useState } from "react";
// Interfaces
import TipoPedido from "../../../interfaces/TipoPedido";
// Styles
import "./style.css";

interface Props {
  nome: string;
  pedidos: TipoPedido[];
}

export default function Cliente({ nome, pedidos }: Props) {
  const [custo, setCusto] = useState(0);

  useEffect(() => {
    let contador = 0;
    pedidos.map((dadosPedido) => {
      contador += dadosPedido.preco;
    });
    setCusto(contador);
  }, [pedidos]);

  return (
    <li className="clientes_item">
      <div className="clientes_nome-custo">
        <strong>{nome}</strong>
        <span className="clientes_custo">R$ {custo}</span>
      </div>
      {pedidos.length > 0 && (
        <div>
          <span>Pedidos</span>
          <ol className="clientes_lista-pedidos">
            {pedidos.map((dadosPedido, index) => {
              return (
                <li key={index} className="clientes_pedido">
                  {index + 1}. {dadosPedido.nome} - R$ {dadosPedido.preco.toFixed(2)}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </li>
  );
}
