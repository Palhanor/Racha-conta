// Interface
import TipoCliente from "../../../interfaces/TipoCliente";

// Style
import "./style.css"

interface Props {
    nomePedido: string,
    precoPedido: number,
    autor: number,
    listaClientes: TipoCliente[];
}

export default function Pedido({ nomePedido, precoPedido, autor, listaClientes }: Props) {
  return (
    <li className="pedidos_item">
      <div>
        <strong>Pedido: </strong>
        {nomePedido}
      </div>
      <div>
        <strong>Preco: </strong>
        R$ {precoPedido.toFixed(2)}
      </div>
      <div>
        <strong>Autor: </strong>
        {listaClientes.map((dadosCliente) => {
          if (dadosCliente.id === autor) return dadosCliente.nome
        })}
      </div>
    </li>
  );
}
