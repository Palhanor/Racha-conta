import { atom } from "recoil"
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";

export const nomeConta = atom<string>({ key: "conta", default: "" });
export const consumidores = atom<IConsumidor[]>({ key: "listaConsumidores", default: [] })
export const compras = atom<ICompra[]>({ key: "listaCompras", default: [] })