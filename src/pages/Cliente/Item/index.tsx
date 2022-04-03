import IPedido from "../../../interfaces/pedido";
import "./style.css"

export default function Item({ pedido }: { pedido: IPedido }) {
  return (
    <li className="container_nome-pedido">
      <div className="container_conteudo-pedido">
        <div><strong>{pedido.nome}</strong> &#183; <span className="total-custo-pedido">R$ {pedido.preco.toFixed(2)}</span></div>
        <span className="custo-dividido-pedido">
          R$ {(pedido.preco / pedido.autores.length).toFixed(2)}
        </span>
      </div>
    </li>
  );
}
