import { IItemPedidoProps } from "../../../interfaces/props";
import "./style.css";

export default function ItemPedido(props: IItemPedidoProps) {
  const { dadosPedido } = props;

  const { nome, preco, autores } = dadosPedido;

  return (
    <li className="pedidos_item">
      <div>
        <strong>Pedido: </strong>
        {nome}
      </div>
      <div>
        <strong>Preço: </strong>
        R$ {preco.toFixed(2)}
      </div>
      <div>
        <strong>Autor{autores.length === 1 ? "" : "es"}: </strong>
        {autores.map((autor, index) => (
          <span key={index}>{autor}{autores.length === index+1 ? "" : ","} </span>
        ))}
      </div>
    </li>
  );
}
