import ICompra from "./compra";

export default interface IConsumidor {
    nome: string,
    pedidos: ICompra[],
    id: string;
  }