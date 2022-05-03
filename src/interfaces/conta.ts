import ICompra from "./compra";
import IConsumidor from "./consumidor";

export default interface IConta {
  nome: string; // Nome da conta
  consumidores: IConsumidor[]; // Lista de consumidores
  compras: ICompra[]; // Lista de compras
  id: string; // Valor do id da conta
  data: Date | string;
}
