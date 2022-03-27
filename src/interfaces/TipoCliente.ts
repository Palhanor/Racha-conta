import TipoPedido from "./TipoPedido";

export default interface TipoCliente {
    nome: string,
    pedidos: TipoPedido[],
    id: number
  }