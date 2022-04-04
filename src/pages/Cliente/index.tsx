import { useParams } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ICliente from "../../interfaces/cliente";
import NotFound from "../NotFound";
import Item from "./Item";
import "./style.css";

export default function Cliente({
  listaClientes,
}: {
  listaClientes: ICliente[];
}) {
  const { id } = useParams();
  const cliente = listaClientes.find(
    (dadosCliente) => dadosCliente.id === Number(id)
  );

  if (!cliente) {
    return <NotFound />;
  }

  return (
    <>
      <div className="cliente_container">
        <h1 className="cliente_title">{cliente.nome}</h1>
        <div className="cliente_dados">
          <span className="cliente_num-pedidos">{cliente.pedidos.length} Pedido</span>
          <span className="cliente_container-custo">
            R${" "}
            {cliente.pedidos
              .reduce(
                (total, item) => item.preco / item.autores.length + total,
                0
              )
              .toFixed(2)}
          </span>
        </div>
      </div>
      <h2 className="cliente_pedidos-title">Consumo</h2>
      <ul className="cliente_pedidos-lista">
        {cliente.pedidos.map((pedido, index) => (
          <Item key={index} pedido={pedido} />
        ))}
      </ul>
      <Navegacao />
    </>
  );
}
