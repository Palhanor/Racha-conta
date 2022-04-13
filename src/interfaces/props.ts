import IConsumidor from "./consumidor";
import ICompra from "./compra";

export interface IInicioProps {
  conta: string;
  setConta: React.Dispatch<React.SetStateAction<string>>;
  consumidor: string;
  setConsumidor: React.Dispatch<React.SetStateAction<string>>;
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
}

export interface IConsumidoresProps {
  conta: string;
  listaConsumidores: IConsumidor[];
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
}

export interface IComprasProps {
  conta: string;
  listaCompras: ICompra[];
  setListaCompras: React.Dispatch<React.SetStateAction<ICompra[]>>;
  listaConsumidores: IConsumidor[];
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
}

export interface IConsumidorProps {
  listaConsumidores: IConsumidor[];
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>
}

export interface ICompraProps {
  listaCompras: ICompra[];
  setListaCompras: React.Dispatch<React.SetStateAction<ICompra[]>>;
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
}

export interface IExtratoProps {
  listaConsumidores: IConsumidor[];
  listaCompras: ICompra[];
  conta: string;
  setConta: React.Dispatch<React.SetStateAction<string>>;
  setConsumidor: React.Dispatch<React.SetStateAction<string>>;
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
  setListaCompras: React.Dispatch<React.SetStateAction<ICompra[]>>;
}