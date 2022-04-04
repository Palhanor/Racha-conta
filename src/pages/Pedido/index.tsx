import IPedido from "../../interfaces/pedido";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "./style.css";
import Item from "./Item";
import Navegacao from "../../components/Navegacao";

export default function Cliente({ listaPedidos }: { listaPedidos: IPedido[] }) {
  const { id } = useParams();
  const pedido = listaPedidos.find(
    (dadosPedido) => dadosPedido.nome.toLowerCase().replace(" ", "-") === id
  );

  if (!pedido) {
    return <NotFound />;
  }

  return (
    <>
      <div className="pedido_container">
        <h1 className="pedido_title">{pedido.nome}</h1>
        <div className="pedido_dados">
          <span className="pedido_autores">
            {pedido.autores.length} Autor{pedido.autores.length === 1 ? "" : "es"}
          </span>
          <span className="pedido_container-custo">R$ {pedido.preco.toFixed(2)}</span>
        </div>
      </div>
      <h2 className="pedido_clientes-title">Autores</h2>
      <ul className="pedido_clientes-lista">
        {pedido.autores.map((autor, index) => (
          <Item key={index} autor={autor} pedido={pedido} />
        ))}
      </ul>
      <Navegacao />
    </>
  );
}
