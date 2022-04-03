import IPedido from "../../../interfaces/pedido";
import "./style.css"

export default function Item({
  autor,
  pedido,
}: {
  autor: string;
  pedido: IPedido;
}) {
  return (
    <li className="container_autor-pedido">
      <div className="container_conteudo">
        <strong>{autor}</strong>
        <span className="custo-dividido">R${" "}{(pedido.preco / pedido.autores.length).toFixed(2)}</span>
      </div>
    </li>
  );
}
