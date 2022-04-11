import { useNavigate, useParams } from "react-router-dom";
import { IConsumidorProps } from "../../interfaces/props";
import ListaComprasConsumidor from "./ListaComprasConsumidor";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import "../../styles/global.scss";

export default function Consumidor(props: IConsumidorProps) {
  const { listaConsumidores, setListaConsumidores } = props;
  const { ID } = useParams();
  const cliente = listaConsumidores.find((dadosCliente) => dadosCliente.id === ID);

  const navigate = useNavigate();

  if (!cliente) {
    return <NotFound />;
  }

  function apagarCliente() {
    setListaConsumidores((velhaLista) =>
      velhaLista.filter(velhoCliente => velhoCliente.id !== ID || velhoCliente.pedidos.length > 0)
    );
    navigate("/consumidores");
  }

  return (
    <>
      <div className="global-item_container">
        <h1 className="global-item_container-title">{cliente.nome}</h1>
        <div className="global-util_horizontal-align">
          <span className="global-list_item-text">
            {cliente.pedidos.length} Compra{cliente.pedidos.length === 1 ? "" : "s"}
          </span>
          <span className="global-list_item-cost">
            R${" "}
            {cliente.pedidos
              .reduce(
                (total, item) => item.preco / item.autores.length + total,
                0
              )
              .toLocaleString("BRL")}
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
        <h2 className="global-list_title">Compras</h2>
        <ul className="global-list">
          {cliente.pedidos.map(pedido => (
            <ListaComprasConsumidor key={pedido.id} {...pedido} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
