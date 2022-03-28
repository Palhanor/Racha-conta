import ICliente from "../../../interfaces/cliente";
import IPedido from "../../../interfaces/pedido";
import "./style.css";

export default function Pedido({
  dadosPedido,
  listaClientes,
}: {
  dadosPedido: IPedido;
  listaClientes: ICliente[];
}) {
  const { nome, preco, autor } = dadosPedido;

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
        <strong>Autor: </strong>
        {/* Usar um .filter() */}
        {listaClientes.map((dadosCliente) => {
          if (dadosCliente.id === autor) return dadosCliente.nome;
        })}
      </div>
    </li>
  );
}
