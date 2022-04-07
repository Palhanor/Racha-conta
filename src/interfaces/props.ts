import ICliente from "./cliente";
import IPedido from "./pedido";

export interface IFormularioInicialProps {
  mesa: string;
  setMesa: React.Dispatch<React.SetStateAction<string>>;
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}

export interface IClientesProps {
  mesa: string;
  listaClientes: ICliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}

export interface IPedidosProps {
  mesa: string;
  listaPedidos: IPedido[];
  setListaPedidos: React.Dispatch<React.SetStateAction<IPedido[]>>;
  listaClientes: ICliente[];
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
}

export interface IExtratoProps {
  listaClientes: ICliente[];
  listaPedidos: IPedido[];
  mesa: string;
  setMesa: React.Dispatch<React.SetStateAction<string>>;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setListaClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
  setListaPedidos: React.Dispatch<React.SetStateAction<IPedido[]>>;
}