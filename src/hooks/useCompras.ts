import { useRecoilState } from "recoil";
import { compras } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import ICompra from "../interfaces/compra";
import useConsumidores from "./useConsumidores";
import useConta from "./useConta";

function useCompras() {
  const [listaCompras, setListaCompras] = useRecoilState(compras);
  const { adicionaPedidoConsumidor, removePedidoConsumidor } =
    useConsumidores();
  const { atualizaContaCompras } = useConta();

  function adicionaCompra(
    nome: string,
    preco: number | null,
    autores: string[]
  ): void | ErrorConstructor {
    if (autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!preco) throw new Error("Adicione um preço para a compra");
    const novaCompra: ICompra = {
      nome: nome,
      preco: (preco as number) / 100,
      autores: [...autores],
      id: nanoid(idSize),
    };
    const novaListaCompras = [...listaCompras, novaCompra];
    setListaCompras(novaListaCompras);
    adicionaPedidoConsumidor(novaCompra);
    atualizaContaCompras(novaListaCompras);
  }

  function encontraCompra(idCompra: string, compras?: ICompra[]): ICompra {
    const compraAtual = compras
      ? compras.find((compra) => compra.id === idCompra)
      : listaCompras.find((compra) => compra.id === idCompra);
    if (!compraAtual) return { nome: "", preco: 0, autores: [], id: "" };
    return compraAtual;
  }

  function removeCompra(pedidoID: string | undefined): void {
    removePedidoConsumidor(pedidoID);
    const novaListaCompras = listaCompras.filter(
      (velhoCompra) => velhoCompra.id !== pedidoID
    );
    setListaCompras(novaListaCompras);
    atualizaContaCompras(novaListaCompras);
  }

  return {
    listaCompras,
    adicionaCompra,
    encontraCompra,
    removeCompra,
  };
}

export default useCompras;
