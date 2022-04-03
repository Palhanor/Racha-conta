// 1. Cirar pagina de cliente que recebe o id do cliente e exibe todas as informacoes do cliente em questao
// 2. Permitir que o cliente seja apagado ou que seus dados sejam editados

import { useParams } from "react-router-dom";
import ICliente from "../../interfaces/cliente";
import NotFound from "../NotFound";

export default function Cliente({ listaClientes }: { listaClientes: ICliente[] }) {

  const { id } = useParams();
  const cliente = listaClientes.find(dadosCliente => dadosCliente.id === Number(id));

  if (!cliente) {
    return <NotFound />
  }

  return (
    <>
    <h1>{cliente.nome}</h1>
    <span>ID: {id}</span> <br />
    <span>Pedidos: {cliente.pedidos.map(pedido => pedido.nome).join(", ")}</span> <br />
    <span>Gasto: R$ {cliente.pedidos.reduce((total, item) => item.preco / item.autores.length + total,
      0)}</span>
    </>
  );
}
