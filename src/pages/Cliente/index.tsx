import { useNavigate, useParams } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ICliente from "../../interfaces/cliente";
import NotFound from "../NotFound";
import Item from "./Item";
import "../../styles/global.scss";

export default function Cliente({
  listaClientes,
  setListaClientes,
}: {
  listaClientes: ICliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}) {
  const { id } = useParams();
  const cliente = listaClientes.find((dadosCliente) => dadosCliente.id === id);

  const navigate = useNavigate();

  if (!cliente) {
    return <NotFound />;
  }

  function apagarCliente() {
    setListaClientes((velhaLista) =>
      velhaLista.filter(velhoCliente => velhoCliente.id !== id || velhoCliente.pedidos.length > 0)
    );
    navigate("/clientes");
  }

  return (
    <>
      <div className="global-item_container">
        <h1 className="global-item_container-title">{cliente.nome}</h1>
        <div className="global-util_horizontal-align">
          <span className="global-list_item-text">
            {cliente.pedidos.length} Pedido
          </span>
          <span className="global-list_item-cost">
            R${" "}
            {cliente.pedidos
              .reduce(
                (total, item) => item.preco / item.autores.length + total,
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <div>
          <button
            className="global-element_button global-element_button--danger"
            onClick={() => apagarCliente()}
          >
            Apagar
          </button>
        </div>
      </div>
      <div className="global-list_container">
        <h2 className="global-list_title">Consumo</h2>
        <ul className="global-list">
          {cliente.pedidos.map((pedido, index) => (
            <Item key={index} pedido={pedido} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
