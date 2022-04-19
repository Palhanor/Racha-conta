import { atom } from "recoil";
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";
import IConta from "../interfaces/conta";

export const contaAtual = atom<IConta>({
  key: "conta",
  default: { nome: "", consumidores: [], compras: [], id: "" },
});
export const consumidores = atom<IConsumidor[]>({
  key: "listaConsumidores",
  default: [],
});
export const compras = atom<ICompra[]>({ key: "listaCompras", default: [] });
