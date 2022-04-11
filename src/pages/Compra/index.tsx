import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "../../styles/global.scss";
import Navegacao from "../../components/Navegacao";
import { ICompraProps } from "../../interfaces/props";
import * as Exattrs from "./Exattrs";
import ListaAutoresCompra from "./ListaAutoresCompra";

export default function Compra(props: ICompraProps) {
  const { listaCompras, setListaCompras, setListaConsumidores } = props;
  const { ID } = useParams();
  const pedido = listaCompras.find((dadosPedido) => dadosPedido.id === ID);
  const navigate = useNavigate();

  if (!pedido) {
    return <NotFound />;
  }

  function apagarPedido() {
    setListaConsumidores((velhaListaClientes) =>
      velhaListaClientes.map((dadosCliente) => {
        const { nome, pedidos, id } = dadosCliente;
        const novosPedidos = pedidos.filter((pedido) => pedido.id !== ID);
        return {
          nome: nome,
          pedidos: novosPedidos,
          id: id,
        };
      })
    );

    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoPedido) => velhoPedido.id !== ID)
    );
    navigate("/compras");
  }

  return (
    <>
      <div {...Exattrs.container}>
        <h1 {...Exattrs.titulo}>{pedido.nome}</h1>
        <div {...Exattrs.footer}>
          <span {...Exattrs.texto}>
            {pedido.autores.length} Consumidor
            {pedido.autores.length === 1 ? "" : "es"}
          </span>
          <span {...Exattrs.custo}>
            R$ {pedido.preco.toLocaleString("BRL")}
          </span>
        </div>
        <div>
          <button {...Exattrs.botaoApagar} onClick={() => apagarPedido()}>
            Apagar
          </button>
        </div>
      </div>
      <div {...Exattrs.containerLista}>
        <h2 {...Exattrs.tituloLista}>Consumidores</h2>
        {<ListaAutoresCompra pedido={pedido} />}
      </div>
      <Navegacao />
    </>
  );
}
