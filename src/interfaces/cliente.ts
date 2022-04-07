import IPedido from "./pedido";

export default interface ICliente {
    nome: string,
    pedidos: IPedido[],
    id: string;
  }