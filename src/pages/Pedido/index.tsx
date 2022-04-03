import IPedido from "../../interfaces/pedido";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

export default function Cliente({ listaPedidos }: { listaPedidos: IPedido[] }) {
  const { id } = useParams();
  const pedido = listaPedidos.find(
    (dadosPedido) => dadosPedido.nome.toLowerCase().replace(" ", "-") === id
  );

  if(!pedido) {
    return <NotFound />
  }

  return (
    <>
      <h1>{pedido.nome}</h1>
      <span>Preço: {pedido.preco}</span> <br />
      <span>
        Autores: {pedido.autores.map((autor) => autor).join(", ")}
      </span>{" "}
    </>
  );
}
