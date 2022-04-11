import ICompra from "./compra";
import IConsumidor from "./consumidor";

export default interface IConta {
    nome: string,
    consumidores: IConsumidor[],
    compras: ICompra[]
}